import OpenSeadragon from "openseadragon";
import { initOSDFabricJS, FabricOverlay } from "openseadragon-fabric";
import { RotatingInput } from "./components/RotatingInput";
import { DualRangeSlider } from "./components/DualRangeSlider";
import { Cuts } from "./Cuts";
import { Renderer } from "./Renderer";
import { IIIFForm } from "./IIIFForm";
import { CutPosition } from "./types";
import type { IIIFImageStub, Translation } from "./types";
import { getLang, loadInfoJson } from "./util";

export class CuttingTable {
  static labels: { [key: string]: { [key: string]: Translation } } = {
    links: {
      json: { de: "Als JSON herunterladen", en: "Download as JSON" }
    }
  };

  defaultId: string = "#cutting-table";
  container: HTMLDivElement;
  selectContainerId: string = "#select-container";
  viewerElementId: string = "#cutting-table-viewer";
  viewer: OpenSeadragon.Viewer;
  renderer: Renderer | undefined;
  cuts: Cuts;
  form: IIIFForm;
  fabricOverlay: FabricOverlay;
  viewerElement: HTMLDivElement;
  cutY: DualRangeSlider;
  cutX: DualRangeSlider;
  offsetY: HTMLInputElement;
  offsetX: HTMLInputElement;
  rotationX: RotatingInput;
  rotationY: RotatingInput;
  rulerCheckbox: HTMLInputElement;
  downloadLink: HTMLAnchorElement;
  _imageAPI: URL;
  download: boolean = false;

  constructor(element?: HTMLDivElement) {
    if (element === undefined) {
      this.container = document.querySelector<HTMLDivElement>(this.defaultId)!;
    } else {
      this.container = element;
    }
    //Components
    customElements.define("rotating-input", RotatingInput);
    customElements.define("dual-range-slider", DualRangeSlider);

    //Result renderer
    this.form = new IIIFForm(this);
    this.renderer = new Renderer();
    this.viewerElement = document.querySelector<HTMLDivElement>(this.viewerElementId)!;

    this.setupOSD(this.viewerElement);
    if (this.viewerElement.parentElement !== null && this.download) {
      this.addJSONLink(this.viewerElement.parentElement);
    }

    this.setup();
  }

  setupOSD(element: HTMLDivElement) {
    initOSDFabricJS();
    const options: OpenSeadragon.Options = {
      element: element,
      gestureSettingsMouse: { clickToZoom: false },
      showFullPageControl: false,
      showHomeControl: false,
      autoHideControls: false,
      crossOriginPolicy: "Anonymous"
    };
    this.viewer = OpenSeadragon(options);
    this.fabricOverlay = this.viewer.fabricOverlay({ fabricCanvasOptions: { selection: false } });
  }

  addJSONLink(element: HTMLElement) {
    this.downloadLink = document.createElement("a");
    this.downloadLink.innerText = CuttingTable.labels.links.json[getLang()];
    this.downloadLink.title = CuttingTable.labels.links.json[getLang()];
    this.downloadLink.setAttribute("href", "javascript:void(0)");
    this.downloadLink.classList.add("link", "json", "disabled");
    this.downloadLink.setAttribute("id", "downloadJSON");
    this.downloadLink.setAttribute("download", "cuttingTable.json");
    this.downloadLink.addEventListener("click", () => {
      if (this.cuts !== undefined) {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.cuts.toJSON(), null, 2));
        this.downloadLink.setAttribute("href", dataStr);
      }
    });
    element.appendChild(this.downloadLink);
  }

  async loadImageAPI(imageAPIEndpoint: URL) {
    let service;
    try {
      service = await loadInfoJson(imageAPIEndpoint);
    } catch {
      console.warn(`Failed to get ${imageAPIEndpoint}`);
    }

    if (this.renderer !== undefined) {
      this.renderer.source = service;
    }

    if (this.viewer !== undefined) {
      this.viewer.addTiledImage({ index: this.viewer.world.getItemCount(), tileSource: service });
      if (service["@context"].startsWith("http://iiif.io/api/image/")) {
        this.updateLines(service.height, service.width);
      }
      this.cuts.url = imageAPIEndpoint;
    } else {
      console.warn("Viewer not initialized");
    }
  }

  set imageService(endpointService: IIIFImageStub) {
    if (this.renderer !== undefined) {
      if (this.renderer.loaded) {
        this.renderer.clear();
      }
      this.renderer.source = endpointService;
    }
    if (this.viewer !== undefined) {
      if (this.viewer.world.getItemCount()) {
        this.viewer.close();
        this.viewer.open(endpointService);
      } else {
        this.viewer.addTiledImage({ index: this.viewer.world.getItemCount(), tileSource: endpointService });
      }
      if (endpointService["@context"].startsWith("http://iiif.io/api/image/")) {
        this.updateLines(endpointService.height, endpointService.width);
      }
    } else {
      console.warn("Viewer not initialized");
    }
    if (this.download) {
      this.downloadLink.classList.remove("disabled");
    }
  }

  set imageServiceUrl(url: URL) {
    this._imageAPI = url;
    this.cuts.url = url;
  }

  updateLines(height: number, width: number) {
    const lineWidth = Math.ceil(5 / this.viewer.viewport.getZoom());

    if (this.cuts === undefined) {
      this.cuts = new Cuts([CutPosition.Right, CutPosition.Bottom, CutPosition.Top, CutPosition.Left], this.fabricOverlay);
    }
    this.cuts.setSize(width, height);
    this.cuts.setLineWidth(CutPosition.Right, lineWidth);
    this.cuts.setLineWidth(CutPosition.Bottom, lineWidth);
    this.cuts.setLineWidth(CutPosition.Left, lineWidth);
    this.cuts.setLineWidth(CutPosition.Top, lineWidth);

    if (this.renderer !== undefined) {
      this.cuts.callback = this.renderer.notify.bind(this.renderer);
    }

    this.cutX.setAttribute("max", String(width));
    this.cutX.setAttribute("value-max", String(width));
    this.offsetX.min = String(Math.ceil(0 - width / 2));
    this.offsetX.max = String(Math.floor(width / 2));
    this.offsetX.setAttribute("value", "0");
    this.cutX.disabled = false;
    this.offsetX.disabled = false;
    this.cutY.setAttribute("max", String(height));
    this.cutY.setAttribute("value-max", String(height));
    this.offsetY.min = String(Math.ceil(0 - height / 2));
    this.offsetY.max = String(Math.floor(height / 2));
    this.offsetY.setAttribute("value", "0");
    this.cutY.disabled = false;
    this.offsetY.disabled = false;
  }

  async setup() {
    //Cutter
    this.cutY = document.querySelector<DualRangeSlider>("#cut-y")!;
    this.cutX = document.querySelector<DualRangeSlider>("#cut-x")!;

    if (this.cuts === undefined) {
      this.cutY.disabled = true;
      this.cutX.disabled = true;
    }

    this.cutX?.addEventListener("input", (e: CustomEvent) => {
      if (e.detail !== undefined) {
        const min = Number(e.detail.min);
        const max = Number(e.detail.max);
        this.cuts.update(CutPosition.Left, min);
        this.cuts.update(CutPosition.Right, max);
      }
    });

    this.cutY?.addEventListener("input", (e: CustomEvent) => {
      if (e.detail !== undefined) {
        const min = Number(e.detail.min);
        const max = Number(e.detail.max);
        this.cuts.update(CutPosition.Top, min);
        this.cuts.update(CutPosition.Bottom, max);
      }
    });

    //Offsets
    this.offsetY = document.querySelector<HTMLInputElement>("#offset-y")!;
    this.offsetX = document.querySelector<HTMLInputElement>("#offset-x")!;

    if (this.cuts === undefined) {
      this.offsetY.disabled = true;
      this.offsetX.disabled = true;
    }
    this.offsetX?.addEventListener("input", (e: Event) => {
      const value = Number((e.target as HTMLInputElement).value);
      //const height = Number(this.offsetY.max);

      this.cuts.offsetX = value;
    });

    this.offsetY?.addEventListener("input", (e: Event) => {
      const value = Number((e.target as HTMLInputElement).value);
      //const width = Number(this.offsetX.max);

      this.cuts.offsetY = value;
    });

    //Rotations
    this.rotationX = document.querySelector<RotatingInput>("#rotate-x")!;
    this.rotationY = document.querySelector<RotatingInput>("#rotate-y")!;
    this.rotationX?.addEventListener("degreeChange", (event: CustomEvent<{ degree: number }>) => {
      this.cuts.rotateX = event.detail.degree;
    });
    this.rotationY?.addEventListener("degreeChange", (event: CustomEvent<{ degree: number }>) => {
      this.cuts.rotateY = event.detail.degree;
    });

    //Options
    this.rulerCheckbox = document.querySelector<HTMLInputElement>("#ruler-visible")!;

    this.rulerCheckbox?.addEventListener("change", () => {
      this.cuts.setVisibility();
    });
  }
}
