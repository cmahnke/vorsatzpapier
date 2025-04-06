import { IIIF, Collection, Manifest, Canvas, Image } from "@allmaps/iiif-parser";
import { IconDropdownSelect } from "./components/IconDropdownSelect";
import { CuttingTable } from "./CuttingTable";
import type { IIIFSelect, IIIFEntry, IIIFImageEntry, IIIFType, Translation } from "./types";
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
  statusContainerId: string = "#status-container";
  statusContainer: HTMLDivElement;

  current?: IIIFType;
  entries: { [key in IIIFType]?: IIIFSelect } = {};
  initial: { string: string };

  constructor(cuttingTable: CuttingTable, element?: HTMLDivElement) {
    this.cuttingTable = cuttingTable;
    customElements.define("icon-dropdown-select", IconDropdownSelect);
    this.inputField = document.querySelector<HTMLInputElement>(this.inputFieldId)!;
    if (element === undefined) {
      this.selectContainer = document.querySelector<HTMLDivElement>(this.selectContainerId)!;
    } else {
      this.selectContainer = element;
    }
    this.statusContainer = document.querySelector<HTMLDivElement>(this.statusContainerId)!;
    this.button = document.querySelector<HTMLButtonElement>(this.buttonId)!;
    this.setup();
  }

  setup() {
    this.button?.addEventListener("click", () => {
      if (this.inputField !== null) {
        const url = this.inputField?.value;

        if (url !== undefined && url !== "") {
          this.loadUrl(new URL(url)).then((options: IIIFSelect) => {
            this.createForm(options);
          });
        }
      }
    });
  }

  createForm(options: IIIFSelect) {
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
        console.warn("Network or CORS issue:", error);
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
      return;
      //TODO: Display error message
    }
    const manifest = IIIF.parse(json);
    const lang = getLang();

    if (manifest instanceof Collection) {
      const manifests: IIIFSelect = { type: "Collection", entries: [], source: url };

      manifest.items.forEach((m: Manifest) => {
        let label = "";
        if (m.label !== undefined) {
          if (lang in m.label) {
            label = m.label[lang].join(" ");
          } else {
            label = m.label[Object.keys(m.label)[0]].join(" ");
          }
        }
        const entry = { id: m.uri, label: label } as IIIFEntry;
        if ("thumbnail" in m && m.thumbnail !== undefined) {
          entry.thumbnail = new URL(m.thumbnail[0].id);
        }
        manifests.entries.push(entry);
      });
      this.current = "Collection";
      this.entries["Collection"] = manifests;
    } else if (manifest instanceof Manifest) {
      const pages: IIIFSelect = { type: "Manifest", entries: [], source: url };
      manifest.canvases.forEach((m: Canvas) => {
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
        if ("thumbnail" in m && m.thumbnail !== undefined) {
          entry.thumbnail = new URL(m.thumbnail[0].id);
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
    const includeThumb = true;
    //const selectList = document.createElement("select");
    const selectList = document.createElement("icon-dropdown-select");
    //console.log(options)
    selectList.classList.add("select", options.type.toLowerCase());
    const selectName = "select-" + Math.random().toString(16).slice(5);
    const selectId = "select-" + options.type;
    const labelElement = document.createElement("label");
    if (label !== undefined) {
      const existing = document.querySelector<IconDropdownSelect>(`#${selectId}`);
      if (existing !== null) {
        existing.remove();
      }

      labelElement.innerHTML = label;
      labelElement.htmlFor = selectId;
      selectList.appendChild(labelElement);
      if (selectList instanceof HTMLSelectElement) {
        selectList.name = selectName;
      }
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
      if (includeThumb && optionEntry.thumbnail !== undefined) {
        const thumbnail = document.createElement("img");
        thumbnail.src = optionEntry.thumbnail.toString();
        option.innerHTML = thumbnail.outerHTML + optionEntry.label;
      } else {
        option.text = optionEntry.label;
      }
      selectList.appendChild(option);
    });

    if (options.type === "Image") {
      options.element = labelElement;
    } else {
      options.element = selectList as IconDropdownSelect;
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

    if (autoLoadSingle && options.entries.length == 1) {
      if ("element" in options && options.element !== undefined) {
        (options.element as HTMLSelectElement).disabled = true;
      }
      if (options.type === "Manifest" || options.type === "Image") {
        console.warn(`Autoloading ${options.entries[0].id}`);
        this.loadImageAPI(new URL(options.entries[0].id));
      }
    } else {
      options.element?.addEventListener("change", (event: CustomEvent) => {
        if (event.detail !== undefined) {
          const url = new URL(event.detail);
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
    this.cuttingTable.imageService = service;
    this.cuttingTable.imageServiceUrl = imageAPIEndpoint;

    return service;
  }
}
