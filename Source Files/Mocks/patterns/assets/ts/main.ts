import { IIIF, Collection, Manifest, Canvas, Image } from "@allmaps/iiif-parser";
import OpenSeadragon from "openseadragon";
import { Canvas as FabricCanvas, Line, Rect } from "fabric";
import { initOSDFabricJS, FabricOverlay } from "openseadragon-fabric";

type IIIFSelect = {
  type: IIIFType;
  entries: Array<IIIFEntry | IIIFImageEntry>;
  element?: HTMLSelectElement;
  source?: URL;
};

type IIIFType = "Collection" | "Manifest" | "Image";

type IIIFEntry = {
  label: string;
  id: string;
};

type Dimensions = {
  height: number;
  width: number;
  aspectRatio?: number;
};

type IIIFImageEntry = IIIFEntry & Dimensions;

export enum CutPosition {
  Top = 0,
  Bottom = 1,
  Left = 2,
  Right = 3
}

type CutNotification = { [key in CutPosition]?: number | undefined };

class Cuts {
  overlay: FabricOverlay;
  width: number;
  height: number;
  shapes: { [key in CutPosition]?: [Line, Rect] };
  positions: { [key in CutPosition]?: number | undefined };
  changeCallback: Function[];

  constructor(positions: CutPosition[], overlay: FabricOverlay) {
    this.positions = {};
    this.shapes = {};
    this.overlay = overlay;

    positions.forEach((position) => {
      const cover = this.createCover();
      const line = this.createLine();
      this.shapes[position] = [line, cover];
      this.positions[position] = undefined;
    });
  }

  createLine(width: number = 5): Line {
    var line = new Line([0, 0, 0, 0], {
      strokeWidth: width,
      stroke: "red",
      hasControls: false
    });
    this.overlay.fabricCanvas().add(line);
    return line;
  }

  createCover(opacity: number = 0.4, fill: string = "white"): Rect {
    var rect = new Rect({
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      strokeWidth: 0,
      hasControls: false,
      opacity: opacity,
      fill: fill
    });
    this.overlay.fabricCanvas().add(rect);
    return rect;
  }

  getLine(position: CutPosition): Line | undefined {
    if (position in this.positions && this.shapes[position] !== undefined) {
      return this.shapes[position][0];
    }
  }

  getCover(position: CutPosition): Rect | undefined {
    if (position in this.positions && this.shapes[position] !== undefined) {
      return this.shapes[position][1];
    }
  }

  setLineWidth(position: CutPosition, width: number) {
    if (position in this.positions && this.shapes[position] !== undefined) {
      this.shapes[position][0].set({
        strokeWidth: width
      });
      this.shapes[position][0].setCoords();
      this.shapes[position][0].canvas?.renderAll();
    }
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;

    const validPositions = Object.keys(this.positions) as unknown as CutPosition[];
    validPositions.forEach((position: CutPosition) => {
      if (this.shapes[position] === undefined) {
        return;
      }

      const line = this.shapes[position][0];
      const cover = this.shapes[position][1];

      if (position == CutPosition.Top) {
        line.set({
          x1: 0,
          y1: 0,
          x2: width,
          y2: 0
        });
        cover.set({
          left: 0,
          top: 0,
          width: width,
          height: 0
        });
      } else if (position == CutPosition.Bottom) {
        line.set({
          x1: 0,
          y1: height,
          x2: width,
          y2: height
        });
        cover.set({
          left: 0,
          top: height,
          width: width,
          height: height
        });
      } else if (position == CutPosition.Right) {
        line.set({
          x1: width,
          y1: 0,
          x2: width,
          y2: height
        });
        cover.set({
          left: width,
          top: 0,
          width: width,
          height: height
        });
      } else if (position == CutPosition.Left) {
        line.set({
          x1: 0,
          y1: 0,
          x2: 0,
          y2: height
        });
        cover.set({
          left: 0,
          top: 0,
          width: 0,
          height: height
        });
      } else {
        throw new Error("Not a valid position");
      }
      line.setCoords();
      cover.setCoords();
      line.canvas?.renderAll();
    });
  }

  update(position: CutPosition, pos: number) {
    if (this.shapes[position] === undefined) {
      return;
    }
    this.positions[position] = pos;
    const line = this.shapes[position][0];
    const cover = this.shapes[position][1];

    if (position == CutPosition.Bottom) {
      line.set({
        x1: 0,
        y1: pos,
        x2: this.width,
        y2: pos
      });
      cover.set({
        left: 0,
        top: pos,
        width: this.width,
        height: this.height - pos
      });
    } else if (position == CutPosition.Right) {
      line.set({
        x1: pos,
        y1: 0,
        x2: pos,
        y2: this.height
      });
      cover.set({
        left: pos,
        top: 0,
        width: this.width - pos,
        height: this.height
      });
    } else {
      //TODO: Finish top and left
      throw new Error("Not all postions aren't implemented yet");
    }

    line.setCoords();
    cover.setCoords();
    line.canvas?.renderAll();
    this.notify();
  }

  addCallback(func: Function): void {
    if (this.changeCallback !== undefined) {
      this.changeCallback = [];
    }
    this.changeCallback.push(func);
  }

  notify(): void {
    if (this.changeCallback !== undefined) {
      this.changeCallback.forEach((fn) => {
        let notification: CutNotification = {};
        const validPositions = Object.keys(this.positions) as unknown as CutPosition[];
        validPositions.forEach((position: CutPosition) => {
          notification[position] = this.positions[position];
        });
        fn(notification);
      });
    }
  }
}

class Renderer {
  element: HTMLElement | null;
  _source: Object;
  viewer: OpenSeadragon.Viewer | undefined;
  defaultId: string = "#output-viewer";
  rows: number = 3;
  columns: number = 3;

  constructor(source: OpenSeadragon.Viewer, element?: HTMLElement) {
    if (element === undefined) {
      this.element = document.querySelector<HTMLElement>(this.defaultId);
    } else {
      this.element = element;
    }
    this._source = source;
    this.viewer = this.setupViewer();
  }

  set source(json: object) {
    this._source = json;
  }

  setupViewer() {
    if (this.element !== null) {
      const options = {
        element: this.element,
        collectionMode: true,
        preserveViewport: true,
        /*
        visibilityRatio: 1,
        minZoomLevel: 0.5,
        defaultZoomLevel: 0.5,
        */
        gestureSettingsMouse: { clickToZoom: false }
      };
      let outputViewer: OpenSeadragon.Viewer = OpenSeadragon(options);
      return outputViewer;
    }
  }

  clip(left: number = 0, top: number = 0, width: number, height: number) {
    //const tiledImage: OpenSeadragon.TiledImage = this.source.world.getItemAt(0);
    //const imageSize = tiledImage.getContentSize()

    if (tiledImage) {
      let clipRect = new OpenSeadragon.Rect(left, top, width, height);
      tiledImage.setClip(clipRect);
    }
    return tiledImage;
  }

  changeSize(columns: number, rows: number) {
    this.columns = columns;
    this.rows = rows;
  }

  preview(left: number = 0, top: number = 0, width?: number, height?: number) {
    let image: OpenSeadragon.TiledImage;
    if (width !== undefined && height !== undefined) {
      image = this.clip(left, top, width, height);
    } else {
      //image = ;
    }
    this.viewer?.addTiledImage({ index: this.viewer.world.getItemCount(), tileSource: this.source });
  }

  /*
  function drawOutput(source) {
    var tileSources = [];
    for (var i = 0; i < this.columns * this.rows; i++) {
      tileSources.push(source);
    }
  }
  */
}

const patternCollection: URL = new URL("https://vorsatzpapier.projektemacher.org/patterns/collection.json");
let viewer: OpenSeadragon.Viewer;
let renderer: Renderer | undefined;
let cuts: Cuts;
let current: IIIFSelect[] = new Array(3);
let fabricOverlay: FabricOverlay;

let cutY: HTMLInputElement;
let cutX: HTMLInputElement;

const selectStrings = [
  { chooseDE: "Vorlage auswählen", chooseEN: "Select template", buttonDE: "Auswählen", buttonEN: "Select" },
  { chooseDE: "Seite auswählen", chooseEN: "Select page", buttonDE: "Anzeigen", buttonEN: "Show" }
];

export function getLang(): string {
  let lang = "en";
  if (document.documentElement.lang !== undefined) {
    lang = document.documentElement.lang.split("-")[0];
  }
  return lang;
}

async function loadInfoJson(id: URL) {
  let url: string;

  if (!id.toString().endsWith("/info.json")) {
    url = id.toString() + "/info.json";
  } else {
    url = id.toString();
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return await response.json();
}

async function loadImageAPI(imageAPIEndpoint: URL) {
  let service;
  try {
    service = await loadInfoJson(imageAPIEndpoint);
  } catch {
    console.warn(`Failed to get ${imageAPIEndpoint}`);
  }

  if (renderer !== undefined) {
    renderer.source = service;
  }

  if (viewer !== undefined) {
    viewer.addTiledImage({ index: viewer.world.getItemCount(), tileSource: service });
    /*
    viewer.addTiledImage({
      tileSource: imageAPIEndpoint.toString(),
      index: viewer.world.getItemCount(), // Add the layer on top
      success: function(event) {
        console.log('IIIF layer added successfully:', event);
      },
      error: function(error) {
        console.error('Error adding IIIF layer:', error);
      }
    });
    */
    if (service["@context"].startsWith("http://iiif.io/api/image/")) {
      updateLines(service.height, service.width);
    }
  } else {
    console.log("Viewer not initialized");
  }
}

function updateLines(height: number, width: number) {
  const lineWidth = Math.ceil(5 / viewer.viewport.getZoom());

  if (cuts === undefined) {
    cuts = new Cuts([CutPosition.Right, CutPosition.Bottom], fabricOverlay);
  }
  cuts.setSize(width, height);
  cuts.setLineWidth(CutPosition.Right, lineWidth);
  cuts.setLineWidth(CutPosition.Bottom, lineWidth);

  cutX.max = String(width);
  cutX.value = String(width);
  cutY.max = String(height);
  cutY.value = String(height);
  cutX.disabled = false;
  cutY.disabled = false;
}

// See : https://github.com/brunoocastro/openseadragon-fabric
function setupOSD(element: HTMLDivElement) {
  initOSDFabricJS();
  const options = {
    element: element,
    /*
    collectionMode: true,
    preserveViewport: true,
    visibilityRatio: 1,
    minZoomLevel: 0.5,
    defaultZoomLevel: 0.5,
    */
    gestureSettingsMouse: { clickToZoom: false },
    showFullPageControl: false,
    showHomeControl: false,
    autoHideControls: false
    //tileSources: [service],
  };
  viewer = OpenSeadragon(options);
  fabricOverlay = viewer.fabricOverlay({ fabricCanvasOptions: { selection: false } });
}

//See https://openlayers.org/en/latest/examples/layer-clipping-vector.html

// traverseDescriptive for thumbnail
/**
 * TODO: check for collection, manifest or Image API
 */

function createSelect(options: IIIFSelect, clz?: string, id?: string, element?: HTMLDivElement, label?: string) {
  const selectList = document.createElement("select");
  const selectName = "select-" + Math.random().toString(16).slice(5);
  const selectId = "select-" + options.type;
  if (label !== undefined) {
    const existing = document.querySelector<HTMLSelectElement>(`#${selectId}`);
    if (existing !== null) {
      existing.remove();
    }

    const labelElement = document.createElement("label");
    labelElement.innerHTML = label;
    labelElement.htmlFor = selectId;
    selectList.appendChild(labelElement);
    selectList.name = selectName;
    selectList.id = selectId;
    labelElement.id = selectId;
  }
  if (clz !== undefined && clz !== "") {
    selectList.classList.add(clz);
  }
  if (id !== undefined && clz !== "") {
    selectList.id = id;
  }

  options.entries.forEach((optionEntry) => {
    const option = document.createElement("option");
    option.value = optionEntry.id;
    option.text = optionEntry.label;
    selectList.appendChild(option);
  });

  options.element = selectList;

  if (element !== undefined) {
    element.appendChild(selectList);
  }
  return options;
}

function addSelect(options: IIIFSelect) {
  const container = document.querySelector<HTMLDivElement>("#select-container");
  if (container !== null) {
    const label = "choose" + getLang().toUpperCase();
    const id = "";
    options = createSelect(options, id, `select-${options.type}`, container, label);
  }

  if (options.entries.length == 1) {
    if ("element" in options && options.element !== undefined) {
      options.element.disabled = true;
    }
    if (options.type === "Image") {
      loadImageAPI(new URL(options.entries[0].id));
    }
    console.log(options.entries[0]);
  } else {
    options.element?.addEventListener("change", (e) => {
      console.log("Got select change", e.target);
      if (e.target instanceof HTMLSelectElement) {
        const url = new URL(e.target.value);
        console.log(`Got select change to ${url} for ${options.type}`);
        loadUrl(url);
      }
    });
  }

  return options;
}

async function loadUrl(url: URL) {
  const json = await fetch(url).then((res) => res.json());
  const manifest = IIIF.parse(json);
  const lang = getLang();

  if (manifest instanceof Collection) {
    const manifests: IIIFSelect = { type: "Collection", entries: [], source: url };

    manifest.items.forEach((m) => {
      let label = "";
      if (m.label !== undefined) {
        if (lang in m.label) {
          label = m.label[lang].join(" ");
        } else {
          label = m.label[Object.keys(m.label)[0]].join(" ");
        }
      }
      manifests.entries.push({ id: m.uri, label: label });
    });
    current[0] = manifests;
  } else if (manifest instanceof Manifest) {
    const pages: IIIFSelect = { type: "Image", entries: [], source: url };
    manifest.canvases.forEach((m) => {
      let label = "";
      if (m.label !== undefined) {
        if (lang in m.label) {
          label = m.label[lang].join(" ");
        } else {
          label = m.label[Object.keys(m.label)[0]].join(" ");
        }
      }
      let entry = { id: m.image.uri, label: label } as IIIFImageEntry;
      if ("width" in m && "height" in m) {
        entry.height = m.height;
        entry.width = m.width;
      }
      pages.entries.push(entry);
    });
    current[1] = pages;
  } else if (manifest instanceof Image) {
    const image: IIIFSelect = { type: "Image", entries: [], source: url };
    console.log(manifest);
    image.entries.push({ id: manifest.uri, label: "" });
    current[2] = image;
  }
  return current.slice(-1)[0];
}

function createForm(options: IIIFSelect) {
  current.forEach((select) => {
    if (select !== undefined) {
      addSelect(select);
    }
  });
}

function setupOutput(): OpenSeadragon.Viewer | undefined {
  const outputElement = document.querySelector<HTMLElement>("#output-viewer");
  if (outputElement !== null) {
    const options = {
      element: outputElement,
      collectionMode: true,
      preserveViewport: true,
      /*
      visibilityRatio: 1,
      minZoomLevel: 0.5,
      defaultZoomLevel: 0.5,
      */
      gestureSettingsMouse: { clickToZoom: false }
    };
    let outputViewer: OpenSeadragon.Viewer = OpenSeadragon(options);
    return outputViewer;
  }
}

async function setupCuttingTable() {
  const viewerElement = document.querySelector<HTMLDivElement>("#cutting-table-viewer");
  if (viewerElement !== null) {
    //setupMap(viewerElement);
    setupOSD(viewerElement);
  }

  // Load button
  const button = document.querySelector("#load-url");
  button?.addEventListener("click", (e) => {
    const inputField = document.querySelector<HTMLInputElement>("#collection-url");
    if (inputField !== null) {
      const url = inputField?.value;

      if (url !== undefined && url !== "") {
        console.log(`Loading ${url}`);
        current = new Array(3);
        loadUrl(new URL(url)).then((options) => {
          createForm(options);
        });
      }
    }
  });
  //Result renderer
  renderer = new Renderer(viewer);

  //Cutter
  cutY = document.querySelector<HTMLInputElement>("#cut-y");
  cutX = document.querySelector<HTMLInputElement>("#cut-x");
  if (cuts === undefined) {
    cutY.disabled = true;
    cutX.disabled = true;
  }

  cutX?.addEventListener("input", (e) => {
    const value = Number((e.target as HTMLInputElement).value);
    const height = Number(cutY.max);

    cuts.update(CutPosition.Right, value);
    //cuts[CutPosition.Right]?.update(value);
    renderer?.preview();
  });

  cutY?.addEventListener("input", (e) => {
    const value = Number((e.target as HTMLInputElement).value);
    const width = Number(cutX.max);

    //cuts[CutPosition.Bottom]?.update(value);
    cuts.update(CutPosition.Bottom, value);
    renderer?.preview();
  });
}

setupCuttingTable();
