import { IIIF, Collection, Manifest, Image } from "@allmaps/iiif-parser";
import { CuttingTable } from "./CuttingTable";
import type { IIIFSelect, IIIFImageEntry, IIIFType, Translation } from "./types";
import { getLang, loadInfoJson } from "./util";

export class IIIFForm {
  static labels: { [key: string]: { [key: string]: Translation } } = {
    collection: {
      choose: { de: "Manifest aus der Sammlung auswählen", en: "Select manifest from the collection" },
      button: { de: "Auswählen", en: "Select" }
    },
    manifest: {
      choose: { de: "Seite als Vorlage auswählen", en: "Select page as template" },
      button: { de: "Auswählen", en: "Select" }
    },
    image: {
      choose: { de: "Bild auswählen", en: "Select image" },
      button: { de: "Anzeigen", en: "Show" }
    }
  };

  cuttingTable: CuttingTable;
  buttonId: string = "#load-url";
  button: HTMLButtonElement;
  inputFieldId: string = "#collection-url";
  inputField: HTMLInputElement;
  selectContainerId: string = "#select-container";
  selectContainer: HTMLDivElement;

  current?: IIIFType;
  entries: { [key in IIIFType]?: IIIFSelect } = {};
  initial: { string: string };

  constructor(cuttingTable: CuttingTable, element?: HTMLElement) {
    this.cuttingTable = cuttingTable;
    this.inputField = document.querySelector<HTMLInputElement>(this.inputFieldId)!;
    this.selectContainer = document.querySelector<HTMLDivElement>(this.selectContainerId)!;
    this.button = document.querySelector<HTMLButtonElement>(this.buttonId)!;
    this.setup();
  }

  setup() {
    this.button?.addEventListener("click", () => {
      if (this.inputField !== null) {
        const url = this.inputField?.value;

        if (url !== undefined && url !== "") {
          console.log(`Loading ${url}`);
          this.loadUrl(new URL(url)).then((options: IIIFSelect) => {
            this.createForm(options);
          });
        }
      }
    });
  }

  createForm(options: IIIFSelect) {
    console.log(options);
    if (options.type in this.entries) {
      this.entries[options.type] = this.addSelect(options);
      this.current = options.type;
    } else if (!Object.keys(this.entries).length) {
      this.entries[options.type] = this.addSelect(options);
      this.current = options.type;
    } else {
    }
  }

  updateForm(url: URL) {
    console.log(url);
    this.loadUrl(new URL(url)).then((options: IIIFSelect) => {
      this.createForm(options);
    });
  }

  async safeLoadIIIF(url: URL, trySuffix: boolean = false) {
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .catch((error) => {
        console.log("Network or CORS issue:", error);
        if (trySuffix) {
          let u = url.toString();
          if (!u.endsWith("/")) {
            u = u + "/info.json";
          } else {
            u = u + "info.json";
          }
          this.safeLoadIIIF(new URL(u));
        }
      });
  }

  async loadUrl(url: URL) {
    const json = await this.safeLoadIIIF(url, true);

    if (json === undefined) {
      console.log(json);
      return;
      //TODO: Display error message
    }
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
      this.current = "Collection";
      this.entries["Collection"] = manifests;
    } else if (manifest instanceof Manifest) {
      const pages: IIIFSelect = { type: "Manifest", entries: [], source: url };
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
      this.current = "Manifest";
      this.entries["Manifest"] = pages;
    } else if (manifest instanceof Image) {
      const image: IIIFSelect = { type: "Image", entries: [], source: url };
      image.entries.push({ id: manifest.uri, label: "" });
      this.current = "Image";
      this.entries["Image"] = image;
    }

    return this.entries[this.current!];
  }

  static createSelect(options: IIIFSelect, clz?: string, id?: string, element?: HTMLDivElement, label?: string): IIIFSelect {
    const selectList = document.createElement("select");
    const selectName = "select-" + Math.random().toString(16).slice(5);
    const selectId = "select-" + options.type;
    const labelElement = document.createElement("label");
    if (label !== undefined) {
      const existing = document.querySelector<HTMLSelectElement>(`#${selectId}`);
      if (existing !== null) {
        existing.remove();
      }

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

    if (options.type === "Image") {
      options.element = labelElement;
    } else {
      options.element = selectList;
    }
    if (element !== undefined) {
      element.appendChild(selectList);
    }
    return options;
  }

  addSelect(options: IIIFSelect, autoLoadSingle: boolean = true): IIIFSelect {
    if (this.selectContainer !== null) {
      const label = IIIFForm.labels[options.type.toLowerCase()]["choose"][getLang()];
      const id = "";
      options = IIIFForm.createSelect(options, id, `select-${options.type}`, this.selectContainer, label);
    }

    //if (autoLoadSingle)
    if (options.entries.length == 1) {
      if ("element" in options && options.element !== undefined) {
        (options.element as HTMLSelectElement).disabled = true;
      }
      if (options.type === "Manifest") {
        console.log(`Autoloading ${options.entries[0].id}`);
        this.loadImageAPI(new URL(options.entries[0].id));
      }
      if (options.type === "Image") {
        console.log(`Autoloading ${options.entries[0].id}`);
        this.loadImageAPI(new URL(options.entries[0].id));
      }
    } else {
      options.element?.addEventListener("change", (e) => {
        console.log("Got select change", e.target);
        if (e.target instanceof HTMLSelectElement) {
          const url = new URL(e.target.value);
          console.log(`Got select change to ${url} for ${options.type}`);
          this.updateForm(url);
        }
      });
    }

    return options;
  }

  async loadImageAPI(imageAPIEndpoint: URL) {
    let service;
    try {
      service = await loadInfoJson(imageAPIEndpoint);
    } catch {
      console.warn(`Failed to get ${imageAPIEndpoint}`);
    }
    console.log("setting", imageAPIEndpoint);
    this.cuttingTable.imageService = service;
    this.cuttingTable.imageServiceUrl = imageAPIEndpoint;

    return service;
  }
}
