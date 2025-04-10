import OpenSeadragon from "openseadragon";
import { initOSDFabricJS, FabricOverlay } from "openseadragon-fabric";
import { RotatingInput } from "./components/RotatingInput";
import { DualRangeSlider } from "./components/DualRangeSlider";
import { Cuts } from "./Cuts";
import { Renderer } from "./Renderer";
import { IIIFForm } from "./IIIFForm";
import { CutPosition } from "./types";
import type { IIIFImageStub, Translation, CutJSON } from "./types";
import { getLang, loadInfoJson } from "./util";

export class CuttingTable {
  static labels: { [key: string]: { [key: string]: Translation } } = {
    links: {
      json: { de: "Als JSON herunterladen", en: "Download as JSON" }
    },
    upload: {
      error: { de: "JSON konnte nicht geladen werden", en: "JSON could not be loaded" }
    }
  };

  _imageAPI: URL;
  download: boolean = true;
  viewer: OpenSeadragon.Viewer;
  renderer: Renderer | undefined;
  cuts: Cuts;
  form: IIIFForm;
  fabricOverlay: FabricOverlay;
  container: HTMLDivElement;
  //Element identifiers
  defaultId: string = "#cutting-table";
  selectContainerId: string = "#select-container";
  viewerElementId: string = "#cutting-table-viewer";
  dropZoneElementId = "#generator";
  //Elements of Contols and
  viewerElement: HTMLDivElement;
  cutY: DualRangeSlider;
  cutX: DualRangeSlider;
  offsetY: HTMLInputElement;
  offsetX: HTMLInputElement;
  rotationX: RotatingInput;
  rotationY: RotatingInput;
  rulerCheckbox: HTMLInputElement;
  squareButton: HTMLElement;
  downloadLink: HTMLAnchorElement;
  dropZoneElement: HTMLDivElement;

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

    this.setupControls();
  }

  setupOSD(element: HTMLDivElement) {
    initOSDFabricJS();
    const options: OpenSeadragon.Options = {
      zoomInButton: element.querySelector<Element>(".zoomin")!,
      zoomOutButton: element.querySelector<Element>(".zoomout")!,
      element: element,
      gestureSettingsMouse: { clickToZoom: false },
      showFullPageControl: false,
      showHomeControl: false,
      autoHideControls: false,
      crossOriginPolicy: "Anonymous"
    };
    this.viewer = OpenSeadragon(options);
    this.viewer.addHandler("open", () => {
      if (this.cuts !== undefined) {
        this.cuts.setVisibility(true);
      }
    });
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
        if (this.cuts.url === undefined && this._imageAPI !== undefined) {
          this.cuts.url = this._imageAPI;
        }
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.cuts.toJSON(), null, 2));
        this.downloadLink.setAttribute("href", dataStr);
      }
    });
    element.appendChild(this.downloadLink);
  }

  square() {
    if (this.cuts !== undefined && this.cuts.square()) {
      this.cutY.valueMin = this.cuts.getPosition(CutPosition.Top);
      this.cutY.valueMax = this.cuts.getPosition(CutPosition.Bottom);
      this.cutX.valueMin = this.cuts.getPosition(CutPosition.Left);
      this.cutY.valueMax = this.cuts.getPosition(CutPosition.Right);
    }
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

    this.imageService = service as IIIFImageStub;
    this.imageServiceUrl = imageAPIEndpoint;
    /*
    if (this.viewer !== undefined) {
      this.viewer.addTiledImage({ index: this.viewer.world.getItemCount(), tileSource: service });

      if (service["@context"].startsWith("http://iiif.io/api/image/")) {
        this.updateLines(service.height, service.width);
      }

      this.cuts.url = imageAPIEndpoint;

    } else {
      console.warn("Viewer not initialized");
    }
    */
  }

  set imageService(endpointService: IIIFImageStub) {
    if (this.viewer !== undefined) {
      this.viewer.addHandler("open", () => {
        if (this.cuts !== undefined) {
          this.cuts.setVisibility(true);
        }
      });
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
    if (this.renderer !== undefined) {
      if (this.renderer.loaded) {
        this.renderer.clear();
      }
      this.renderer.source = endpointService;
    }
  }

  set imageServiceUrl(url: URL) {
    this._imageAPI = url;
    this.cuts.url = url;
  }

  initCuts() {
    //if (this.cuts === undefined) {
    this.cuts = new Cuts([CutPosition.Right, CutPosition.Bottom, CutPosition.Top, CutPosition.Left], this.fabricOverlay);
    //}
    this.cuts.setVisibility(false);
  }

  dropHandler(event: DragEvent) {
    this.dragOffHandler();
    if (event.dataTransfer === null) {
      return;
    }
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type === "application/json") {
        const reader = new FileReader();
        reader.addEventListener("load", async (e: ProgressEvent<FileReader>) => {
          if (e !== undefined && e.target !== null && e.target.result !== null) {
            try {
              const result = e.target.result as string;
              const json = JSON.parse(result) as CutJSON;
              if (json.url !== undefined) {
                this.form.urlInput = new URL(json.url);
              }
              if (json.url !== undefined) {
                await this.loadImageAPI(new URL(json.url));
              }
              this.cuts.loadJSON(json);
              this.cuts.setVisibility(true);
              this.updateControls();
            } catch (error) {
              console.error(error);
              this.form.displayMessage(CuttingTable.labels.upload.error[getLang()] + "+ " + error.message);
            }
          }
        });
        reader.readAsText(file);
      } else {
        const msg = "File is not a JSON";
        this.form.displayMessage(CuttingTable.labels.upload.error[getLang()] + ": " + msg);
        throw new Error(msg);
      }
    }
  }
  dragOnHandler() {
    this.dropZoneElement.classList.add("dropzone");
  }
  dragOffHandler() {
    this.dropZoneElement.classList.remove("dropzone");
  }

  updateCutLineWidth() {
    if (this.cuts !== undefined && this.viewer !== undefined) {
      const lineWidth = Math.ceil(5 / this.viewer.viewport.getZoom());
      const shapePositions = Object.keys(this.cuts.shapes) as unknown as CutPosition[];
      shapePositions.forEach((position: CutPosition) => {
        this.cuts.setLineWidth(position, lineWidth);
      });
    }
  }

  updateControls() {
    this.updateCutLineWidth();
    if (this.cuts !== undefined) {
      this.cutX.max = this.cuts.width;
      this.cutY.max = this.cuts.height;
      this.offsetX.min = String(Math.ceil(0 - this.cuts.width / 2));
      this.offsetX.max = String(Math.floor(this.cuts.width / 2));
      this.offsetY.min = String(Math.ceil(0 - this.cuts.height / 2));
      this.offsetY.max = String(Math.floor(this.cuts.height / 2));

      const positions = Object.keys(this.cuts.positions) as unknown as CutPosition[];
      positions.forEach((position: CutPosition) => {
        if (position == CutPosition.Left && this.cuts.positions[CutPosition.Left] !== undefined) {
          this.cutX.valueMin = this.cuts.positions[CutPosition.Left];
        }
        if (position == CutPosition.Right && this.cuts.positions[CutPosition.Right] !== undefined) {
          this.cutX.valueMax = this.cuts.positions[CutPosition.Right];
        }
        if (position == CutPosition.Top && this.cuts.positions[CutPosition.Top] !== undefined) {
          this.cutY.valueMin = this.cuts.positions[CutPosition.Top];
        }
        if (position == CutPosition.Bottom && this.cuts.positions[CutPosition.Bottom] !== undefined) {
          this.cutY.valueMax = this.cuts.positions[CutPosition.Bottom];
        }
      });
      const offsets = Object.keys(this.cuts.offsets) as unknown as CutPosition[];
      offsets.forEach((position: CutPosition) => {
        if (position == CutPosition.Left && this.cuts.offsets[CutPosition.Left] !== undefined) {
          this.offsetX.value = String(this.cuts.offsets[CutPosition.Left] * -1);
        }
        if (position == CutPosition.Right && this.cuts.offsets[CutPosition.Right] !== undefined) {
          this.offsetX.value = String(this.cuts.offsets[CutPosition.Right]);
        }
        if (position == CutPosition.Top && this.cuts.offsets[CutPosition.Right] !== undefined) {
          this.offsetY.value = String(this.cuts.offsets[CutPosition.Right] * -1);
        }
        if (position == CutPosition.Bottom && this.cuts.offsets[CutPosition.Bottom] !== undefined) {
          this.offsetY.value = String(this.cuts.offsets[CutPosition.Bottom]);
        }
      });
      const rotations = Object.keys(this.cuts.rotations) as unknown as CutPosition[];
      rotations.forEach((position: CutPosition) => {
        if (position == CutPosition.Right && this.cuts.positions[CutPosition.Right] !== undefined) {
          this.rotationX.value = this.cuts.positions[CutPosition.Right];
        }
        if (position == CutPosition.Bottom && this.cuts.positions[CutPosition.Bottom] !== undefined) {
          this.rotationY.value = this.cuts.positions[CutPosition.Bottom];
        }
      });
    }
  }

  updateLines(height: number, width: number) {
    this.fabricOverlay.fabricCanvas().clear();
    this.initCuts();
    this.cuts.setSize(width, height);
    this.updateCutLineWidth();
    this.cuts.setVisibility(true);

    if (this.renderer !== undefined) {
      this.cuts.callback = this.renderer.notify.bind(this.renderer);
    }

    this.cutX.setAttribute("max", String(width));
    this.cutX.setAttribute("value-min", "0");
    this.cutX.setAttribute("value-max", String(width));
    this.offsetX.min = String(Math.ceil(0 - width / 2));
    this.offsetX.max = String(Math.floor(width / 2));
    this.offsetX.setAttribute("value", "0");
    this.cutX.disabled = false;
    this.offsetX.disabled = false;
    this.rotationX.disabled = false;
    this.cutY.setAttribute("max", String(height));
    this.cutY.setAttribute("value-min", "0");
    this.cutY.setAttribute("value-max", String(height));
    this.offsetY.min = String(Math.ceil(0 - height / 2));
    this.offsetY.max = String(Math.floor(height / 2));
    this.offsetY.setAttribute("value", "0");
    this.cutY.disabled = false;
    this.offsetY.disabled = false;
    this.rotationY.disabled = false;
    this.rulerCheckbox.disabled = false;
    this.rulerCheckbox.checked = true;
    this.squareButton.dataset.height = String(height);
    this.squareButton.dataset.width = String(width);
    this.squareButton.classList.remove("disabled");
  }

  createJsonUploader(element: HTMLElement) {
    element.addEventListener("dragover", (event: Event) => {
      event.preventDefault();
      this.dragOnHandler();
    });
    element.addEventListener("dragenter", (event: Event) => {
      event.preventDefault();
      this.dragOnHandler();
    });
    element.addEventListener("dragleave", (event: Event) => {
      event.preventDefault();
      this.dragOffHandler();
    });
    element.addEventListener("dragend", (event: Event) => {
      event.preventDefault();
      this.dragOffHandler();
    });
    element.addEventListener("drop", (event: DragEvent) => {
      event.preventDefault();
      this.dropHandler(event);
    });
  }

  async setupControls() {
    //Cutter
    this.cutY = document.querySelector<DualRangeSlider>("#cut-y")!;
    this.cutX = document.querySelector<DualRangeSlider>("#cut-x")!;
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
    this.offsetX?.addEventListener("input", (e: Event) => {
      const value = Number((e.target as HTMLInputElement).value);
      this.cuts.offsetX = value;
    });
    this.offsetY?.addEventListener("input", (e: Event) => {
      const value = Number((e.target as HTMLInputElement).value);
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
    this.rulerCheckbox?.addEventListener("change", (e: Event) => {
      const value = Boolean((e.target as HTMLInputElement).checked);
      this.cuts.setVisibility(value);
    });
    this.squareButton = this.viewerElement.querySelector<HTMLElement>(".square")!;
    this.squareButton.addEventListener("click", () => {
      this.square();
    });
    this.squareButton.classList.add("disabled");

    this.dropZoneElement = document.querySelector<HTMLDivElement>(this.dropZoneElementId)!;
    this.createJsonUploader(this.dropZoneElement);

    if (this.cuts === undefined) {
      this.cutY.disabled = true;
      this.cutX.disabled = true;
      this.offsetX.disabled = true;
      this.offsetY.disabled = true;
      this.rotationX.disabled = true;
      this.rotationY.disabled = true;
      this.rulerCheckbox.disabled = true;
    }
  }
}
