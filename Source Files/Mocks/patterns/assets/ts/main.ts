import { IIIF, Collection, Manifest, Canvas, Image } from "@allmaps/iiif-parser";
import OpenSeadragon from "openseadragon";
import { Canvas as FabricCanvas, Line } from "fabric";
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

const patternCollection: URL = new URL("https://vorsatzpapier.projektemacher.org/patterns/collection.json");
let viewer: OpenSeadragon.Viewer;
let horizontalLine: Line;
let verticalLine: Line;
let current: IIIFSelect[] = new Array(3);

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

async function loadImageAPIOSD(imageAPIEndpoint: URL) {

  let service;
  try {
    service = await loadInfoJson(imageAPIEndpoint);
    console.log(`Loaded service`, service);
  } catch {
    console.warn(`Failed to get ${imageAPIEndpoint}`);
  }
  const parsed = IIIF.parse(service);

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
    if (parsed.type === "image") {
      updateLines(parsed.height, parsed.width);
    }
  } else {
    console.log("Viewer not initialized")
  }
}

function updateLines(height: number, width:number) {
  horizontalLine.set({
    x1: 0,
    y1: 0,
    x2: width,
    y2: height,
  })
  verticalLine.set({
    x1: width,
    y1: height,
    x2: 0,
    y2: 0,
  })
}

function createLineFabric(dimensions: Array<Array<number>>, fabricOverlay: FabricOverlay): Line {
  var line = new Line(
    [dimensions[0][0], dimensions[0][1], dimensions[1][0], dimensions[1][1]],
    {
    	strokeWidth: 2,
    	stroke: "red",
    	hasControls: false
    }
  );
  fabricOverlay.fabricCanvas().add(line);
  return line;
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
    gestureSettingsMouse: { clickToZoom: false }
    //tileSources: [service],
  };
  viewer = OpenSeadragon(options);
  const fabricOverlay = viewer.fabricOverlay({ fabricCanvasOptions: { selection: false } });

  const horizontalDimensions = [
    [-1000000, 0],
    [1000000, 0]
  ];
  const verticalDimensions = [
    [0, -1000000],
    [0, 1000000]
  ];

  horizontalLine = createLineFabric(horizontalDimensions, fabricOverlay);
  verticalLine = createLineFabric(verticalDimensions, fabricOverlay);
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
    selectList.id = selectId
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
      //loadImageAPI(new URL(options.entries[0].id))
      loadImageAPIOSD(new URL(options.entries[0].id))
    }
    console.log(options.entries[0]);
  } else {
    options.element?.addEventListener("change", (e) => {
      console.log("Got select change", e.target);
      if (e.target instanceof HTMLSelectElement) {
        const url = new URL(e.target.value);
        console.log(`Got select change to ${url} for ${options.type}`);
        //loadCanvas(e.target.value)
        loadUrl(url)
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
    current.push(manifests);
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
        //<IIIFImageEntry>
        entry.height = m.height;
        //<IIIFImageEntry>
        entry.width = m.width;
      }
      pages.entries.push(entry);
    });
    current.push(pages);
  } else if (manifest instanceof Image) {
    const image: IIIFSelect = { type: "Image", entries: [], source: url};
    console.log(manifest);
    image.entries.push({ id: manifest.uri, label: "" });
    current.push(image);
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
      visibilityRatio: 1,
      minZoomLevel: 0.5,
      defaultZoomLevel: 0.5,
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
  //Cutter
  const cutX = document.querySelector<HTMLInputElement>("#cut-y");
  cutX?.addEventListener("change", (e) => {
    const value = Number((e.target as HTMLInputElement).value);
    console.log(value, horizontalLine);
    horizontalLine.y1 = value;
    horizontalLine.y2 = value;
  });

  const cutY = document.querySelector<HTMLInputElement>("#cut-x");



}

setupCuttingTable();
