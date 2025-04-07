import OpenSeadragon from "openseadragon";
import { ImageResolutionSelect } from "./components/ImageResolutionSelect";
import { OffscreenCanvasDownload } from "./components/OffscreenCanvasDownload";
import { CutPosition } from "./types";
import type { CutNotification, IIIFImageStub, Translation } from "./types";
import { getLang } from "./util";

export class Renderer {
  static labels: { [key: string]: { [key: string]: Translation } } = {
    links: {
      image: { de: "Bild herunterladen", en: "Download image" }
    },
    select: {
      custom: { de: "Eigene", en: "Custom" }
    }
  };

  element: HTMLElement | null;
  _source: IIIFImageStub | undefined;
  viewer: OpenSeadragon.Viewer | undefined;
  defaultId: string = "#output-viewer";
  clipRect: OpenSeadragon.Rect | undefined;
  _offsets: { [key in CutPosition]?: number } | undefined;
  rows: number = 4;
  columns: number = 4;
  tileSources: object[] = [];
  _loaded: boolean = false;
  resolutionSelect: ImageResolutionSelect;
  downloadButton: OffscreenCanvasDownload;

  constructor(source?: IIIFImageStub, element?: HTMLElement) {
    customElements.define("image-resolution-select", ImageResolutionSelect);
    customElements.define("offscreencanvas-download", OffscreenCanvasDownload);
    if (element === undefined) {
      this.element = document.querySelector<HTMLElement>(this.defaultId);
    } else {
      this.element = element;
    }
    this.viewer = this.setupViewer();
    this.viewer.addHandler("open", () => {
      this.layout();
    });
    if (source !== undefined) {
      this.source = source;
    }
    if (this.element !== null) {
      this.addImageLink(this.element);
    }
  }

  clear() {
    this._source = undefined;
    this.tileSources = [];
    this.clipRect = undefined;
    this._offsets = undefined;
    if (this.viewer !== undefined) {
      this.viewer.close();
      this._loaded = false;
    }
  }

  setupSources() {
    if (this._source !== undefined) {
      for (let i = 0; i < this.columns * this.rows; i++) {
        this.tileSources.push(this._source);
      }
    }
  }

  set source(json: IIIFImageStub) {
    this._source = json;
    this._loaded = false;
    this.tileSources = [];
    this.setupSources();
    this.preview();
  }

  get width(): number | undefined {
    if (this._source !== undefined) {
      return this._source.width;
    }
  }

  get height(): number | undefined {
    if (this._source !== undefined) {
      return this._source.height;
    }
  }

  get loaded(): boolean {
    return this._loaded;
  }

  set offsets(offsets: { [key in CutPosition]?: number }) {
    if (
      CutPosition.Left in offsets &&
      offsets[CutPosition.Left] !== undefined &&
      CutPosition.Right &&
      offsets[CutPosition.Right] !== undefined
    ) {
      if (offsets[CutPosition.Left] != 0 && offsets[CutPosition.Right] != 0) {
        throw new Error("Different offsets for left and right sides");
      }
    }

    if (
      CutPosition.Top in offsets &&
      offsets[CutPosition.Top] !== undefined &&
      CutPosition.Bottom &&
      offsets[CutPosition.Bottom] !== undefined
    ) {
      if (offsets[CutPosition.Top] != 0 && offsets[CutPosition.Bottom] != 0) {
        throw new Error("Different offsets for top and bottom sides");
      }
    }

    this._offsets = offsets;

    /*
    if (CutPosition.Left in offsets && offsets[CutPosition.Left] != undefined) {
      this.offsetX = offsets[CutPosition.Left];
    }
    if (CutPosition.Right in offsets && offsets[CutPosition.Right] != undefined) {
      this.offsetX = offsets[CutPosition.Right];
    }
    if (CutPosition.Top in offsets && offsets[CutPosition.Top] != undefined) {
      this.offsetY = offsets[CutPosition.Top];
    }
    if (CutPosition.Bottom in offsets && offsets[CutPosition.Bottom] != undefined) {
      this.offsetY = offsets[CutPosition.Bottom];
    }
    */
  }

  setupViewer() {
    if (this.element !== null) {
      const options: OpenSeadragon.Options = {
        element: this.element,
        collectionMode: true,
        preserveViewport: true,
        /*
        visibilityRatio: 1,
        minZoomLevel: 0.5,
        defaultZoomLevel: 0.5,
        */
        drawer: "canvas",
        gestureSettingsMouse: { clickToZoom: false },
        showHomeControl: false,
        autoHideControls: false,
        collectionTileMargin: 0,
        collectionRows: this.rows,
        collectionColumns: this.columns,
        crossOriginPolicy: "Anonymous",
        zoomInButton: this.element.querySelector<Element>(".zoomin")!,
        zoomOutButton: this.element.querySelector<Element>(".zoomout")!,
        fullPageButton: this.element.querySelector<Element>(".fullscreen")!
      };
      const fullwidth = this.element.querySelector<HTMLElement>(".fullwidth")!;
      fullwidth.addEventListener("click", () => {
        if (this._loaded) {
          if (this.viewer !== undefined) {
            Renderer.fitToWidth(this.viewer);
          }
        }
      });
      return OpenSeadragon(options);
    } else {
      throw new Error("Result viewer element is null!");
    }
  }

  clip(
    left: number = 0,
    top: number = 0,
    width: number,
    height: number,
    immediately: boolean = true,
    offsets?: { [key in CutPosition]?: number }
  ) {
    let itemCount = 0;
    if (this.viewer !== undefined && this.viewer?.world.getItemCount() !== undefined) {
      itemCount = this.viewer.world.getItemCount();
    }
    for (let i = 0; i < itemCount; i++) {
      const tiledImage: OpenSeadragon.TiledImage | undefined = this.viewer?.world.getItemAt(i);
      if (tiledImage !== undefined) {
        if (this.clipRect === undefined) {
          this.clipRect = new OpenSeadragon.Rect(left, top, width, height);
        } else {
          this.clipRect.x = left;
          this.clipRect.y = top;
          this.clipRect.width = width;
          this.clipRect.height = height;
        }
        tiledImage.setClip(this.clipRect);
      }
    }
    if (offsets !== undefined) {
      this.offsets = offsets;
    }
    this.layout(immediately);
  }

  static createOffsetRect(offsets: { [key in CutPosition]?: number }): OpenSeadragon.Rect | undefined {
    let width, height;
    let rotation = 1;
    if (CutPosition.Left in offsets && offsets[CutPosition.Left] != undefined) {
      width = Math.sign(offsets[CutPosition.Left]) * offsets[CutPosition.Left];
      rotation = -1;
    }
    if (CutPosition.Right in offsets && offsets[CutPosition.Right] != undefined) {
      width = Math.sign(offsets[CutPosition.Right]) * offsets[CutPosition.Right];
    }
    if (CutPosition.Top in offsets && offsets[CutPosition.Top] != undefined) {
      height = Math.sign(offsets[CutPosition.Top]) * offsets[CutPosition.Top];
      rotation = -1;
    }
    if (CutPosition.Bottom in offsets && offsets[CutPosition.Bottom] != undefined) {
      height = Math.sign(offsets[CutPosition.Bottom]) * offsets[CutPosition.Bottom];
    }
    if (width !== undefined && height !== undefined) {
      return new OpenSeadragon.Rect(0, 0, width, height, rotation);
    }
  }

  /*
  TODO:
    * Offsets
    * Cuts at top and left
    * Alternated rotations

  See also:
  * https://codepen.io/iangilman/pen/beJaGQ
  * https://codepen.io/iangilman/pen/PqxvgN
  */
  layout(immediately: boolean = true) {
    //this.viewer?.world.arrange({ rows: this.rows, columns: this.columns, tileMargin: 0, immediately: true });
    let pos = 0;
    const firstImage: OpenSeadragon.TiledImage | undefined = this.viewer?.world.getItemAt(0);
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        const tiledImage: OpenSeadragon.TiledImage | undefined = this.viewer?.world.getItemAt(pos);
        let offsetRect;
        if (this._offsets !== undefined) {
          offsetRect = Renderer.createOffsetRect(this._offsets);
        }

        // Offset Rect
        /*
        if (this.offsetX != 0 || this.offsetY != 0) {
          offsetRect = new OpenSeadragon.Rect(0, 0, this.offsetX, this.offsetY);
          console.log(offsetRect);
        }
        */
        if (this._offsets !== undefined && Object.keys(this._offsets).length) {
        }

        let x = 0;
        let y = 0;

        if (pos > 0 && c > 0) {
          const previousImage: OpenSeadragon.TiledImage | undefined = this.viewer?.world.getItemAt(pos - 1);
          if (previousImage !== undefined) {
            let width;
            if (this.clipRect !== undefined && previousImage !== undefined) {
              width = previousImage.imageToViewportRectangle(this.clipRect).width;
            } else {
              width = previousImage.getBounds().width;
            }
            x = previousImage.getBounds().x + width;
          }
        }
        if (offsetRect !== undefined && c > 0) {
          x = r * firstImage.imageToViewportRectangle(offsetRect).width * offsetRect.degrees;
        }
        /*
        if (this.offsetX != 0 && c >0) {
          x = r * firstImage.imageToViewportRectangle(offsetRect).width;
          //width = width +  previousImage.imageToViewportRectangle(offsetRect).width;
        }
        */
        if (r > 0) {
          const previousImage: OpenSeadragon.TiledImage | undefined = this.viewer?.world.getItemAt(pos - this.columns);
          if (previousImage !== undefined) {
            let height;
            if (this.clipRect !== undefined && previousImage !== undefined) {
              height = previousImage.imageToViewportRectangle(this.clipRect).height;
            } else {
              height = previousImage.getBounds().height;
            }
            y = previousImage.getBounds().y + height;
          }
        }
        if (offsetRect !== undefined && r == 1) {
          y = y + firstImage.imageToViewportRectangle(offsetRect).height * offsetRect.degrees;
        }
        /*
        if (this.offsetY != 0 && r == 1) {
          y = y + firstImage.imageToViewportRectangle(offsetRect).height;
          //height = height + previousImage.imageToViewportRectangle(offsetRect).height;
        }
        */
        pos++;
        if (tiledImage !== undefined) {
          tiledImage.setPosition({ x: x, y: y } as OpenSeadragon.Point, immediately);
        }
      }
    }
  }

  static fitToWidth(viewer: OpenSeadragon.Viewer) {
    if (viewer.world.getItemCount() > 0) {
      let minX = Infinity;
      let maxX = -Infinity;
      let minY = Infinity;
      let maxY = -Infinity;

      for (let i = 0; i < viewer.world.getItemCount(); i++) {
        const tiledImage = viewer.world.getItemAt(i);
        const bounds = tiledImage.getBounds();
        minX = Math.min(minX, bounds.x);
        maxX = Math.max(maxX, bounds.x + bounds.width);
        minY = Math.min(minY, bounds.y);
        maxY = Math.max(maxY, bounds.y + bounds.height);
      }

      const combinedWidth = maxX - minX;
      const combinedHeight = maxY - minY;
      const combinedBounds = new OpenSeadragon.Rect(minX, minY, combinedWidth, combinedHeight);

      if (combinedWidth > 0) {
        const targetZoom = 1.0 / combinedWidth;
        viewer.viewport.zoomTo(targetZoom, undefined, true);

        const combinedCenterX = minX + combinedWidth / 2;

        viewer.viewport.panTo(new OpenSeadragon.Point(combinedCenterX, viewer.viewport.getCenter().y), true);

        const currentViewportBounds = viewer.viewport.getBounds();
        if (currentViewportBounds.y < 0) {
          viewer.viewport.panBy(new OpenSeadragon.Point(0, -currentViewportBounds.y), true);
        }
      }
    }
  }

  changeSize(columns: number, rows: number): void {
    if (this.columns != columns || this.rows != rows) {
      this.columns = columns;
      this.rows = rows;
      //This triggers reinitialization
      if (this._source !== undefined) {
        this.source = this._source;
      }
    }
  }

  notify(cuts: CutNotification): void {
    this.preview(
      cuts[0][CutPosition.Left],
      cuts[0][CutPosition.Top],
      cuts[0][CutPosition.Right],
      cuts[0][CutPosition.Bottom],
      false,
      cuts[1]
    );
  }

  preview(
    left: number = 0,
    top: number = 0,
    width?: number,
    height?: number,
    immediately: boolean = true,
    offsets?: { [key in CutPosition]?: number }
  ) {
    if (this.viewer === undefined) {
      throw new Error("Result viewer not initialized");
    }
    if (width === undefined && height === undefined) {
      width = this.width;
      height = this.height;
    }
    if (!this._loaded) {
      this.viewer.open(this.tileSources);
      this._loaded = true;
    }
    this.clip(left, top, width, height, immediately, offsets);
    if (this.downloadButton !== undefined) {
      this.downloadButton.disabled = false;
    }
  }

  /*
  fullSize() {
    let tiledImage = this.viewer?.world.getItemAt(0);
    let targetZoom = tiledImage.source.dimensions.x / viewer.viewport.getContainerSize().x;
    this.viewer?.viewport.zoomTo(targetZoom, null, true);
  }
  */

  renderImage(width: number = 1920, height: number = 1080): OffscreenCanvas | undefined {
    //TODO: Fit to width: https://github.com/openseadragon/openseadragon/issues/839
    const offscreen = new OffscreenCanvas(width, height);
    const drawer: OpenSeadragon.Drawer | undefined = this.viewer?.drawer;
    if (drawer !== undefined && drawer?.context !== null) {
      const context: CanvasRenderingContext2D | null = drawer?.context;
      const initialContext = context;
      const offscreenContext = offscreen.getContext("2d") as unknown as CanvasRenderingContext2D;

      const viewportBounds = this.viewer?.viewport.getBounds();
      const contentSize = this.viewer?.viewport.getContainerSize;
      const minLevel = this.viewer?.viewport.getMinZoom();
      const maxLevel = this.viewer?.viewport.getMaxZoom();

      this.viewer?.drawer.draw(offscreenContext, viewportBounds, contentSize, minLevel, maxLevel);
      //drawer.context = offscreenContext;
      //this.viewer?.forceRedraw();
      //drawer.context = initialContext;
      return offscreen;
    }
  }

  addImageLink(element: HTMLElement, width: number = 1920, height: number = 1080, type: string = "image/png") {
    this.downloadButton = document.createElement("offscreencanvas-download") as OffscreenCanvasDownload;

    const suffix = type.split("/")[1];
    this.downloadButton.format = suffix;
    this.downloadButton.buttonText = Renderer.labels.links.image[getLang()]; //`${suffix.toUpperCase()} Herunterladen`;
    this.downloadButton.renderCallback = this.renderImage.bind(this);
    this.downloadButton.fileName = `wallpaper.${suffix}`;
    this.downloadButton.width = width;
    this.downloadButton.height = height;

    this.resolutionSelect = document.createElement("image-resolution-select") as ImageResolutionSelect;
    const options = this.resolutionSelect.options;
    options[0].label = Renderer.labels.select.custom[getLang()];
    this.resolutionSelect.setAttribute("confirm-button", "true");
    this.resolutionSelect.addEventListener("change", (event: CustomEvent) => {
      if (event.detail !== undefined) {
        this.downloadButton.width = event.detail[0];
        this.downloadButton.height = event.detail[1];
        this.downloadButton.disabled = false;
      }
    });

    element.appendChild(this.resolutionSelect);
    element.appendChild(this.downloadButton);
  }
}
