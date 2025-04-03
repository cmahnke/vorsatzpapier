import OpenSeadragon from "openseadragon";
import { CutPosition } from "./types";
import type { CutNotifyFunction,  CutNotification, IIIFImageStub } from "./types";

export class Renderer {
  element: HTMLElement | null;
  _source: IIIFImageStub;
  viewer: OpenSeadragon.Viewer | undefined;
  defaultId: string = "#output-viewer";
  clipRect: OpenSeadragon.Rect;
  rows: number = 3;
  columns: number = 3;
  tileSources: object[] = [];
  width: number;
  height: number;
  _loaded: boolean = false;

  constructor(source?: IIIFImageStub, element?: HTMLElement) {
    if (element === undefined) {
      this.element = document.querySelector<HTMLElement>(this.defaultId);
    } else {
      this.element = element;
    }
    this.viewer = this.setupViewer();
    this.viewer.addHandler('open', (target ) => {
      this.layout();
    })
    if (source !== undefined) {
      this.source = source;
    }
  }

  setupSources() {
    for (let i = 0; i < this.columns * this.rows; i++) {
      this.tileSources.push(this._source);
    }
  }

  set source(json: IIIFImageStub) {
    this._source = json;
    this._loaded = false;
    this.height = this._source.height;
    this.width = this._source.width;
    this.tileSources = [];
    this.setupSources();
    this.preview();
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
        gestureSettingsMouse: { clickToZoom: false },
        showFullPageControl: false,
        showHomeControl: false,
        autoHideControls: false,
        collectionTileMargin: 0,
        collectionRows: this.rows,
        collectionColumns: this.columns
      };
      return OpenSeadragon(options);
    } else {
      throw new Error("Result viewer element is null!");
    }
  }

  clip(left: number = 0, top: number = 0, width: number, height: number, immediately: boolean = true) {
    for (let i = 0; i < this.viewer?.world.getItemCount(); i++) {
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
    this.layout(immediately);
  }

  /*
  TODO: layout

  See also:
  * https://codepen.io/iangilman/pen/beJaGQ
  * https://codepen.io/iangilman/pen/PqxvgN
  */
  layout(immediately: boolean = true) {
    //this.viewer?.world.arrange({ rows: this.rows, columns: this.columns, tileMargin: 0, immediately: true });
    let pos = 0;
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        const tiledImage: OpenSeadragon.TiledImage | undefined = this.viewer?.world.getItemAt(pos);

        let x = 0;
        let y = 0;

        if (pos > 0 && c > 0) {
          const previousImage: OpenSeadragon.TiledImage | undefined = this.viewer?.world.getItemAt(pos - 1);
          if (previousImage !== undefined) {

            let width;
            if (this.clipRect !== undefined && previousImage !== undefined) {
              width = previousImage.imageToViewportCoordinates(this.clipRect.width, this.clipRect.height)
              console.log(previousImage.getBounds().width, width, previousImage.getClippedBounds())
            } else {
              width = previousImage.getBounds().width
            }

            //x = previousImage.getBounds().x + width
            console.log(previousImage.getBounds().x, previousImage.getBounds().width, width) //previousImage.imageToViewerElementCoordinates(width) )
            x = previousImage.getBounds().x + previousImage.getBounds().width // - (this._source.width - this.clipRect.width);
          }
        }
        if (r > 0) {
          const previousImage: OpenSeadragon.TiledImage | undefined = this.viewer?.world.getItemAt(pos - this.columns);
          if (previousImage !== undefined) {

            let height;
            if (this.clipRect !== undefined && previousImage !== undefined) {
              height = this.clipRect.height
            } else {

              height = previousImage.getBounds().height
            }
            /*
            y = previousImage.getBounds().y + height
            */
            y = previousImage.getBounds().y + previousImage.getBounds().height // - (this._source.height - this.clipRect.height);
          }
        }
        pos++;
        if (tiledImage !== undefined) {
          tiledImage.setPosition({x:x , y:y} as OpenSeadragon.Point, immediately)
        }
      }
    }
  }

  changeSize(columns: number, rows: number): void {
    if (this.columns != columns || this.rows != rows) {
      this.columns = columns;
      this.rows = rows;
      this.source = this._source;
    }
  }

  /*
  fullSize() {
    let tiledImage = this.viewer?.world.getItemAt(0);
    let targetZoom = tiledImage.source.dimensions.x / viewer.viewport.getContainerSize().x;
    this.viewer?.viewport.zoomTo(targetZoom, null, true);
  }
  */

  notify(cuts: CutNotification): void {
    this.preview(cuts[0][CutPosition.Left], cuts[0][CutPosition.Top], cuts[0][CutPosition.Right], cuts[0][CutPosition.Bottom], false);
  }

  preview(left: number = 0, top: number = 0, width?: number, height?: number, immediately: boolean = true) {
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
    this.clip(left, top, width, height, immediately);

  }

}
