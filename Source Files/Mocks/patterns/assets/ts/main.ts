import { IIIF, Collection, Manifest, Canvas, Image } from "@allmaps/iiif-parser";
import OpenSeadragon from "openseadragon";
import { Canvas as FabricCanvas, Line, Rect } from "fabric";
import { initOSDFabricJS, FabricOverlay } from "openseadragon-fabric";
//import OpenSeadragonImagingHelper from '@openseadragon-imaging/openseadragon-imaginghelper';
import { Cuts } from "./Cuts";
import { Renderer } from "./Renderer";
import { CutPosition } from "./types";
import type { CutNotifyFunction,  CutNotification, IIIFImageStub, IIIFSelect, IIIFImageEntry } from "./types";




const patternCollection: URL = new URL("https://vorsatzpapier.projektemacher.org/patterns/collection.json");
let viewer: OpenSeadragon.Viewer;
let renderer: Renderer | undefined;
let cuts: Cuts;
let current: IIIFSelect[] = new Array(3);
let fabricOverlay: FabricOverlay;

let cutY: HTMLInputElement, cutX: HTMLInputElement;
let offsetY: HTMLInputElement, offsetX: HTMLInputElement;

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

  if (renderer !== undefined) {
    cuts.setCallback(renderer.notify.bind(renderer));
  }

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
      const entry = { id: m.image.uri, label: label } as IIIFImageEntry;
      if ("width" in m && "height" in m) {
        entry.height = m.height;
        entry.width = m.width;
      }
      pages.entries.push(entry);
    });
    current[1] = pages;
  } else if (manifest instanceof Image) {
    const image: IIIFSelect = { type: "Image", entries: [], source: url };
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
    const outputViewer: OpenSeadragon.Viewer = OpenSeadragon(options);
    return outputViewer;
  }
}

async function setupCuttingTable() {
  const viewerElement = document.querySelector<HTMLDivElement>("#cutting-table-viewer");
  if (viewerElement !== null) {
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
  renderer = new Renderer();

  //Cutter
  const cY = document.querySelector<HTMLInputElement>("#cut-y"),
    cX = document.querySelector<HTMLInputElement>("#cut-x");
  if (cY !== null && cX !== null) {
    cutY = cY;
    cutX = cX;
  } else {
    return;
  }
  if (cuts === undefined) {
    cutY.disabled = true;
    cutX.disabled = true;
  }

  cutX?.addEventListener("input", (e) => {
    const value = Number((e.target as HTMLInputElement).value);
    const height = Number(cutY.max);

    cuts.update(CutPosition.Right, value);
  });

  cutY?.addEventListener("input", (e) => {
    const value = Number((e.target as HTMLInputElement).value);
    const width = Number(cutX.max);

    cuts.update(CutPosition.Bottom, value);
  });

  //Offsets
  let offsetY: HTMLInputElement, offsetX: HTMLInputElement;
  const oY = document.querySelector<HTMLInputElement>("#offset-y"),
    oX = document.querySelector<HTMLInputElement>("#offset-x");
  if (oY !== null && oX !== null) {
    offsetY = oY;
    offsetX = oX;
  } else {
    return;
  }

  if (cuts === undefined) {
    offsetY.disabled = true;
    offsetX.disabled = true;
  }
  offsetX?.addEventListener("input", (e) => {
    const value = Number((e.target as HTMLInputElement).value);
    const height = Number(offsetY.max);

    cuts.offset(CutPosition.Right, value);
    renderer?.preview();
  });

  offsetY?.addEventListener("input", (e) => {
    const value = Number((e.target as HTMLInputElement).value);
    const width = Number(offsetX.max);

    cuts.offset(CutPosition.Bottom, value);
    renderer?.preview();
  });
}

setupCuttingTable();
