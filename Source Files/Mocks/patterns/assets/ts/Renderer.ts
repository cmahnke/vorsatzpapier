import OpenSeadragon from "openseadragon";
import { ImageResolutionSelect } from "./components/ImageResolutionSelect";
import { CanvasDownloadButton } from "./components/CanvasDownloadButton";
import { GridSizeSelector } from "./components/GridSizeSelector";
import { CutPosition } from "./types";
import { OffsetRect } from "./openseadragon/OffsetRect";
import type { CutNotification, IIIFImageStub } from "./types";
import { equals } from "./util";

export class Renderer {
  //Element identifiers / classes / selectors
  static defaultSelector: string = ".texture-container";
  static rendererViewerSelector = ".output-viewer";

  element: HTMLElement;
  _source: IIIFImageStub | undefined;
  viewer: OpenSeadragon.Viewer | undefined;
  viewerElement: HTMLElement;
  _gridSelector: boolean;
  _download: boolean;
  _controls: boolean;
  clipRect: OpenSeadragon.Rect | undefined;
  _offsets: { [key in CutPosition]?: number } | undefined;
  _rotations: { [key in CutPosition]?: number } | undefined;
  _rows: number;
  _columns: number;
  _loaded: boolean = false;
  resolutionSelect: ImageResolutionSelect | null | undefined;
  downloadButton: CanvasDownloadButton | null | undefined;
  gridSizeSelect: GridSizeSelector | null | undefined;
  _margins: boolean = true;
  _marginWidth = 1;
  defaultExportDimensions: [number, number] = [1920, 1080];
  _notificationQueue: CutNotification[] = [];
  _debug: boolean = false;
  statusContainer: HTMLDivElement | null;
  _debugOverlays: Map<OpenSeadragon.TiledImage, { element: HTMLElement; location: OpenSeadragon.Rect }[]>;
  renderTimeout: number = 15000;
  //_image

  constructor(
    element: HTMLElement,
    columns: number = 4,
    rows: number = 4,
    gridSelector: boolean = true,
    download: boolean = true,
    controls: boolean = true,
    source?: IIIFImageStub,
    width?: number,
    height?: number
  ) {
    if (element !== undefined) {
      this.element = element;
    } else {
      this.element = document.querySelector<HTMLDivElement>(Renderer.defaultSelector)!;
    }

    this.setSize(columns, rows);
    this._gridSelector = gridSelector;
    this._download = download;
    this._controls = controls;

    Renderer.setupHTML(this.element, controls, width, height);
    this.viewerElement = this.element.querySelector(Renderer.rendererViewerSelector)!;

    this.viewer = this.setupViewer(this.viewerElement);

    if (source !== undefined) {
      this.source = source;
    }

    if (this.element !== null) {
      this.addControls(this.viewerElement, this.defaultExportDimensions[0], this.defaultExportDimensions[1]);
    }
  }

  clear() {
    this._source = undefined;
    this.clipRect = undefined;
    this._offsets = undefined;
    if (this.viewer !== undefined) {
      this._clearTiles();
      this.viewer.close();
      this._loaded = false;
    }
  }

  _clearTiles() {
    if (this.viewer !== undefined) {
      this.viewer.world.removeAll();
      for (let i = 0; i < (this.viewer.world.getItemCount() as number); i++) {
        this.viewer.world.removeItem(this.viewer.world.getItemAt(i));
      }
    }
  }

  static _loadTiles(
    viewer: OpenSeadragon.Viewer,
    source: IIIFImageStub | OpenSeadragon.TiledImage[],
    count: number
  ): Promise<boolean | string> {
    return new Promise((resolve, reject) => {
      let tilesLoaded = 0;
      const sources: (IIIFImageStub | OpenSeadragon.TiledImage)[] = [];
      if (Array.isArray(source)) {
        throw new Error("Handling of TiledImage array not implemented!");
      } else {
        for (let i = 0; i < count; i++) {
          sources.push(source);
        }
      }

      let allTilesLoaded = false;
      const errorHandler: OpenSeadragon.EventHandler<OpenSeadragon.TileLoadFailedEvent> = (error) => {
        reject(`Failed to load TiledImage: ${error.message}`);
      };
      const tileLoadedHandler: OpenSeadragon.EventHandler<OpenSeadragon.TileLoadedEvent> = () => {
        tilesLoaded++;
        checkAllTilesLoaded();
      };

      const checkAllTilesLoaded = () => {
        if (tilesLoaded === sources.length) {
          viewer.removeHandler("tile-load-failed", errorHandler);
          viewer.removeHandler("tile-loaded", tileLoadedHandler);
          allTilesLoaded = true;
          resolve(true); // Resolve the Promise when all tiles are loaded
        }
      };

      viewer.addHandler("tile-loaded", tileLoadedHandler);
      viewer.addHandler("tile-load-failed", errorHandler);
      viewer.open(sources);
    });
  }

  set source(json: IIIFImageStub) {
    if (this.viewer === undefined) {
      throw new Error("Result viewer element is null!");
    }
    this._source = json;
    this._loaded = false;

    if (this.clipRect === undefined) {
      this.clipRect = new OpenSeadragon.Rect(0, 0, json.width, json.height);
    }

    const columns = this._columns;
    const rows = this._rows;

    this._clearTiles();
    Renderer._loadTiles(this.viewer, this._source, columns * rows).then((result) => {
      if (typeof result === "boolean" && result) {
        this.viewer?.world.arrange({ rows: this._rows, columns: this._columns, tileMargin: 0, immediately: true });
        if (!this._notificationQueue.length) {
          this.layout(true);
        } else {
          this._notificationQueue.forEach((notification: CutNotification) => {
            this.notify(notification);
          });
        }
        this.viewer?.raiseEvent("source-loaded");
        this._loaded = true;
        this.preview();
        this.enableControls();
      } else {
        if (typeof result === "boolean") {
          throw new Error(`Failed to load TiledImage for unknown reasons`);
        } else {
          throw new Error(result);
        }
      }
    });
  }

  get width(): number | undefined {
    if (this._source !== undefined) {
      return this._source.width;
    }
    return undefined;
  }

  get height(): number | undefined {
    if (this._source !== undefined) {
      return this._source.height;
    }
    return undefined;
  }

  get loaded(): boolean {
    return this._loaded;
  }

  set debug(debug: boolean) {
    this._debug = debug;
    if (this._debug) {
      this._debugOverlays = new Map<OpenSeadragon.TiledImage, { element: HTMLElement; location: OpenSeadragon.Rect }[]>();
    }
  }

  set margins(margins: boolean) {
    this._margins = margins;
    this.setSize(this.columns, this.rows);
  }

  set offsets(offsets: { [key in CutPosition]?: number }) {
    if (Renderer.validateSidedVariations(offsets, "rotation")) {
      this._offsets = offsets;
    }
  }

  set rotations(rotations: { [key in CutPosition]?: number }) {
    if (Renderer.validateSidedVariations(rotations, "rotation")) {
      this._rotations = rotations;
    }
  }

  get rows(): number {
    if (this._margins) {
      return this._rows - this._marginWidth * 2;
    }
    return this._rows;
  }
  get columns(): number {
    if (this._margins) {
      return this._columns - this._marginWidth * 2;
    }
    return this._columns;
  }

  setSize(columns: number, rows: number, callback?: () => void): void {
    if (this._margins) {
      /*
      if (columns > rows) {
        this._marginWidth = Math.floor(columns / 2);
      } else {
        this._marginWidth = Math.floor(rows / 2);
      }
      */
      columns = columns + this._marginWidth * 2;
      rows = rows + this._marginWidth * 2;
    }
    if (this.viewer !== undefined && callback !== undefined) {
      this.viewer.addOnceHandler("source-loaded", callback);
      this.viewer.raiseEvent("grid-size-changed");
    }

    if (this._columns != columns || this._rows != rows) {
      this._columns = columns;
      this._rows = rows;

      //This triggers reinitialization
      if (this._source !== undefined) {
        this.source = this._source;
      }
    }
  }

  enableControls() {
    if (this.gridSizeSelect !== undefined && this.gridSizeSelect !== null) {
      this.gridSizeSelect.removeAttribute("disabled");
    }
    if (this.resolutionSelect !== undefined && this.resolutionSelect !== null) {
      this.resolutionSelect.removeAttribute("disabled");
    }
    if (this.downloadButton !== undefined && this.downloadButton !== null) {
      this.downloadButton.removeAttribute("disabled");
    }

    this.viewerElement.querySelector<Element>(".zoomin")?.classList.remove("disabled");
    this.viewerElement.querySelector<Element>(".zoomout")?.classList.remove("disabled");
    this.viewerElement.querySelector<Element>(".fullscreen")?.classList.remove("disabled");
    this.viewerElement.querySelector<HTMLElement>(".fullwidth")?.classList.remove("disabled");
  }

  static validateSidedVariations(variation: { [key in CutPosition]?: number }, type: string): boolean {
    if (variation === undefined) {
      return false;
    }

    if (
      CutPosition.Left in variation &&
      variation[CutPosition.Left] !== undefined &&
      CutPosition.Right &&
      variation[CutPosition.Right] !== undefined
    ) {
      if (variation[CutPosition.Left] != 0 && variation[CutPosition.Right] != 0) {
        console.error(`Different ${type} for left (${variation[CutPosition.Left]}) and right (${variation[CutPosition.Right]}) sides`);
      }
    }

    if (
      CutPosition.Top in variation &&
      variation[CutPosition.Top] !== undefined &&
      CutPosition.Bottom &&
      variation[CutPosition.Bottom] !== undefined
    ) {
      if (variation[CutPosition.Top] != 0 && variation[CutPosition.Bottom] != 0) {
        console.error(`Different ${type} for top (${variation[CutPosition.Top]}) and bottom (${variation[CutPosition.Bottom]}) sides`);
        return false;
      }
    }
    return true;
  }

  static setupHTML(element: HTMLElement, controls: boolean = true, width?: number, height?: number): void {
    let controlsHTML = `
        <i class="controls button zoomin disabled"></i>
        <i class="controls button zoomout disabled"></i>
        <i class="controls button fullscreen disabled"></i>
        <i class="controls button fullwidth disabled"></i>`;
    if (!controls) {
      controlsHTML = "";
    }
    let style = "";
    if (width !== undefined && height !== undefined) {
      style = `width: ${width}px; height: ${height}px`;
    }
    element.innerHTML = `
      <div class="output-viewer" style="${style}">
        ${controlsHTML}
      </div>
    `;
  }

  setupViewer(element?: HTMLElement) {
    if (element !== undefined) {
      element = this.viewerElement;
    }

    if (element !== null && element !== undefined) {
      let options: OpenSeadragon.Options = {
        element: element,
        collectionMode: true,
        preserveViewport: true,
        /*
        visibilityRatio: 1,
        minZoomLevel: 0.5,
        defaultZoomLevel: 0.5,
        */
        gestureSettingsMouse: { clickToZoom: false },
        showHomeControl: false,
        autoHideControls: false,
        collectionTileMargin: 0,
        collectionRows: this._rows,
        collectionColumns: this._columns,
        crossOriginPolicy: "Anonymous",
        drawer: "canvas",
        debug: this._debug
      };

      if (this._controls) {
        options = {
          ...options,
          zoomInButton: this.element.querySelector<Element>(".zoomin")!,
          zoomOutButton: this.element.querySelector<Element>(".zoomout")!,
          fullPageButton: this.element.querySelector<Element>(".fullscreen")!
        };
      } else {
        options = {
          ...options,
          showNavigationControl: false,
          showZoomControl: false,
          showHomeControl: false,
          showFullPageControl: false,
          showSequenceControl: false
        };
      }

      const fullwidthButton = this.element.querySelector<HTMLElement>(".fullwidth")!;
      if (fullwidthButton !== undefined && fullwidthButton !== null) {
        fullwidthButton.addEventListener("click", () => {
          if (this._loaded) {
            if (this.viewer !== undefined) {
              Renderer.fitToWidth(this.viewer, false);
            }
          }
        });
      }
      return OpenSeadragon(options);
    } else {
      throw new Error("Result viewer element is null!");
    }
  }

  preview(
    left: number = 0,
    top: number = 0,
    width?: number,
    height?: number,
    immediately: boolean = true,
    offsets?: { [key in CutPosition]?: number },
    rotations?: { [key in CutPosition]?: number }
  ) {
    if (this.viewer === undefined) {
      throw new Error("Result viewer not initialized");
    }

    if (width === undefined && height === undefined) {
      width = this.width;
      height = this.height;
    }
    if (
      left === undefined ||
      top === undefined ||
      width == undefined ||
      height === undefined ||
      this.viewer.world.getItemCount() === undefined
    ) {
      throw new Error("Can't clip image, some dimensions aren't defined");
    }

    const itemCount = this.viewer.world.getItemCount();
    for (let i = 0; i < itemCount; i++) {
      const tiledImage: OpenSeadragon.TiledImage | undefined = this.viewer.world.getItemAt(i);
      if (tiledImage !== undefined) {
        if (this.clipRect === undefined) {
          throw new Error("Clip rect is empty!");
        } else {
          this.clipRect.x = left;
          this.clipRect.y = top;
          this.clipRect.width = width;
          this.clipRect.height = height;
        }
        tiledImage.setClip(this.clipRect);
      } else {
        throw new Error("Couldn't generate clip mask, no images found!");
      }
    }
    if (offsets !== undefined) {
      this.offsets = offsets;
    }
    if (rotations !== undefined) {
      this.rotations = rotations;
    }
    this.layout(immediately);
    if (this.downloadButton !== undefined && this.downloadButton !== null) {
      this.downloadButton.disabled = false;
    }
  }

  static createOffsetRect(offsets: { [key in CutPosition]?: number }, reference: OpenSeadragon.TiledImage): OffsetRect | undefined {
    let width = 0,
      height = 0,
      horizontal: CutPosition | undefined,
      vertical: CutPosition | undefined;
    if (CutPosition.Left in offsets && offsets[CutPosition.Left] != undefined) {
      width = offsets[CutPosition.Left];
      horizontal = CutPosition.Left;
    }
    if (CutPosition.Right in offsets && offsets[CutPosition.Right] != undefined) {
      width = offsets[CutPosition.Right];
      horizontal = CutPosition.Right;
    }
    if (CutPosition.Top in offsets && offsets[CutPosition.Top] != undefined) {
      height = offsets[CutPosition.Top];
      vertical = CutPosition.Top;
    }
    if (CutPosition.Bottom in offsets && offsets[CutPosition.Bottom] != undefined) {
      height = offsets[CutPosition.Bottom];
      vertical = CutPosition.Bottom;
    }
    if (width != 0 || height != 0) {
      const offsetRect = new OffsetRect(0, 0, width, height, undefined, horizontal, vertical);
      offsetRect.reference = reference;
      return offsetRect;
    }
    return undefined;
  }

  layout(immediately: boolean = true) {
    // Inline functions
    const raiseFinished: () => void = () => {
      this.viewer?.raiseEvent("layout-finish", { eventSource: this.viewer });
    };

    //Variables
    const columns = this._columns;
    const rows = this._rows;
    const margins = this._margins;
    const marginWidth = this._marginWidth;
    let visibleColumns = columns;
    let visibleRows = rows;

    if (margins) {
      visibleColumns = columns - this._marginWidth * 2;
      visibleRows = rows - this._marginWidth * 2;
    }
    if (!immediately) {
      this.viewer?.addHandler("animation-finish", raiseFinished.bind(this));
    }
    this.viewer?.raiseEvent("start-layout", { eventSource: this.viewer });
    let pos = -1;
    let expectedSize: OpenSeadragon.Rect;
    if (this.clipRect === undefined || this.viewer === undefined) {
      throw new Error("Clip rect or viewer is not defined");
    }
    this.viewer.world.arrange({ rows: rows, columns: columns, tileMargin: 0, immediately: true });
    const referenceImage: OpenSeadragon.TiledImage | undefined = this.viewer.world.getItemAt(0);
    referenceImage.setPosition(new OpenSeadragon.Point(0, 0), immediately);
    const transformedClipRect = referenceImage.imageToViewportRectangle(this.clipRect);

    if (referenceImage === undefined) {
      throw new Error("Couldn't get first tiled image!");
    }

    //this.debugOverlay(`Reference `, referenceImage, false);

    //this.viewer.world.setAutoRefigureSizes(false);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        //Variables
        pos++;

        let row = r;
        let column = c;
        let x = 0,
          y = 0;
        let width = 0,
          height = 0;
        const tiledImage: OpenSeadragon.TiledImage | undefined = this.viewer.world.getItemAt(pos);

        //Sanity checks
        if (tiledImage === undefined || referenceImage === undefined) {
          console.warn(tiledImage, referenceImage);
          throw new Error("Required variables are not defined");
        }

        expectedSize = new OpenSeadragon.Rect(0, 0, transformedClipRect.width * visibleColumns, transformedClipRect.height * visibleRows);
        let offsetRect;
        if (this._offsets != undefined) {
          offsetRect = Renderer.createOffsetRect(this._offsets, tiledImage);
        }

        //initial position
        width = transformedClipRect.width;
        height = transformedClipRect.height;

        if (transformedClipRect.x > 0) {
          width = width - transformedClipRect.x;
        }
        if (transformedClipRect.y > 0) {
          height = height - transformedClipRect.y;
        }
        /*
         * Margins might be more then 1 tile in with or height see `marginWidth`
         * c < marginWidth or r < marginWidth are the first margin rows or columns
         * c >= columns - marginWidth or r >= rows - marginWidth are the last margin rows or columns
         */
        if (margins) {
          const hideRect = new OpenSeadragon.Rect(
            tiledImage.getContentSize().x,
            tiledImage.getContentSize().y,
            0,
            0,
            tiledImage.getRotation()
          );

          if (c < marginWidth || c >= columns - marginWidth || r < marginWidth || r >= rows - marginWidth) {
            tiledImage.setClip(Renderer.cloneRect(hideRect));
          }
          column = c - marginWidth;
          row = r - marginWidth;
        }
        x = (c - marginWidth) * width;
        y = (r - marginWidth) * height;

        // Rotations
        if (this._rotations !== undefined && Object.keys(this._rotations).length) {
          let rowEven = false,
            columnEven = false;
          if (r % 2 == 0 && !margins) {
            rowEven = true;
          } else if (r % 2 == 1 && margins) {
            rowEven = true;
          }
          if (c % 2 == 0 && !margins) {
            columnEven = true;
          } else if (c % 2 == 1 && margins) {
            columnEven = true;
          }
          if (CutPosition.Right in this._rotations && this._rotations[CutPosition.Right] !== undefined && rowEven && !columnEven) {
            const rotate = this._rotations[CutPosition.Right];
            //tiledImage.getClip()!.rotate(rotate)
            tiledImage.setRotationPointImageCoordinates(this.clipRect.getCenter());
            tiledImage.setRotation(rotate, immediately);
          }
          if (CutPosition.Bottom in this._rotations && this._rotations[CutPosition.Bottom] !== undefined && columnEven && !rowEven) {
            const rotate = this._rotations[CutPosition.Bottom];
            //tiledImage.getClip()!.rotate(rotate)
            tiledImage.setRotationPointImageCoordinates(this.clipRect.getCenter());
            tiledImage.setRotation(rotate, immediately);
          }
          if (
            CutPosition.Right in this._rotations &&
            this._rotations[CutPosition.Right] !== undefined &&
            CutPosition.Bottom in this._rotations &&
            this._rotations[CutPosition.Bottom] !== undefined
          ) {
            if (rowEven && !columnEven && columnEven && !rowEven) {
              const rotate = this._rotations[CutPosition.Right] + this._rotations[CutPosition.Bottom];
              //tiledImage.getClip()!.rotate(rotate)
              tiledImage.setRotationPointImageCoordinates(this.clipRect.getCenter());
              tiledImage.setRotation(rotate, immediately);
            }
          }
          console.log(tiledImage.getBoundsNoRotate());
        }

        if (offsetRect !== undefined) {
          //Vertical shifts
          if (offsetRect.height > 0) {
            const shift = offsetRect.calculateY(referenceImage) * column;
            y = y + shift;
          } else if (offsetRect.height < 0) {
            const shift = offsetRect.calculateY(referenceImage) * column;
            y = y - shift;
          }
          //Vertical overlaps
          if (column == 0 && offsetRect.width < 0) {
            const borderClip = Renderer.cloneRect(tiledImage.getClip()!);
            const imageCoordShift = offsetRect.width * row * -1;
            borderClip.width = borderClip.width - imageCoordShift;
            borderClip.x = borderClip.x + imageCoordShift;
            tiledImage.setClip(borderClip);
          }
          if (column == visibleColumns - 1 && offsetRect.width > 0) {
            const borderClip = Renderer.cloneRect(tiledImage.getClip()!);
            const imageCoordShift = offsetRect.width * row;
            borderClip.width = borderClip.width - imageCoordShift;
            tiledImage.setClip(borderClip);
          }
          // Horizontal shifts
          if (offsetRect.width > 0) {
            const shift = offsetRect.calculateX(referenceImage) * row;
            x = x + shift;
          } else if (offsetRect.width < 0) {
            const shift = offsetRect.calculateX(referenceImage) * row;
            x = x - shift;
          }
          // Horizontal overlaps
          if (row == 0 && offsetRect.height < 0) {
            //column > 0 &&
            const borderClip = Renderer.cloneRect(tiledImage.getClip()!);
            const imageCoordShift = offsetRect.height * column * -1;
            borderClip.height = borderClip.height - imageCoordShift;
            borderClip.y = borderClip.y + imageCoordShift;
            tiledImage.setClip(borderClip);
          }
          if (row == visibleRows - 1 && offsetRect.height > 0) {
            const borderClip = Renderer.cloneRect(tiledImage.getClip()!);
            const imageCoordShift = offsetRect.height * column;
            borderClip.height = borderClip.height - imageCoordShift;
            tiledImage.setClip(borderClip);
          }

          if (margins) {
            if (marginWidth > 1) {
              console.warn("Larger margin size are known to break");
            }
            const checkModifiedClip: (tiledImage: OpenSeadragon.TiledImage) => OpenSeadragon.Rect = (
              tiledImage: OpenSeadragon.TiledImage
            ) => {
              if (
                tiledImage.getClip() !== null &&
                tiledImage.getContentSize().x == tiledImage.getClip()!.x &&
                tiledImage.getContentSize().y == tiledImage.getClip()!.y &&
                this.clipRect !== undefined
              ) {
                //const clip =
                return Renderer.cloneRect(this.clipRect);
                //TODO: Remove Rotation Point: tiledImage.setRotationPoint(undefined);
              } else {
                return tiledImage.getClip()!;
              }
            };

            if (c < marginWidth && offsetRect.width > 0) {
              const borderClip = checkModifiedClip(tiledImage);
              const imageCoordShift = offsetRect.width * row;
              borderClip.x = borderClip.width - imageCoordShift;
              borderClip.width = borderClip.width + imageCoordShift;
              //if (Math.floor(offsetRect.width*marginWidth /))
              //for (let i = 0; i < marginWidth; i++) {

              //}
              tiledImage.setClip(borderClip);
            }

            if (r < marginWidth && offsetRect.height > 0) {
              const borderClip = checkModifiedClip(tiledImage);
              const imageCoordShift = offsetRect.height * column;
              borderClip.y = borderClip.height - imageCoordShift;
              borderClip.height = imageCoordShift;
              tiledImage.setClip(borderClip);
            }

            if (c >= columns - marginWidth && offsetRect.width < 0) {
              const borderClip = checkModifiedClip(tiledImage);
              const imageCoordShift = offsetRect.width * row;
              borderClip.width = imageCoordShift * -1;
              tiledImage.setClip(borderClip);
            }

            if (r >= rows - marginWidth && offsetRect.height < 0) {
              const borderClip = checkModifiedClip(tiledImage);
              const imageCoordShift = offsetRect.height * column;
              borderClip.height = imageCoordShift * -1;
              tiledImage.setClip(borderClip);
            }
          }
        }

        tiledImage.setPosition(new OpenSeadragon.Point(x, y), immediately);

        let debugText = `${c}, ${r} (${column}, ${row})`;
        if (tiledImage === referenceImage) {
          debugText = "Reference " + debugText;
        }
        this.debugOverlay(debugText, tiledImage, true);
      }
    }

    this.viewer.world.setAutoRefigureSizes(true);
    if (immediately) {
      raiseFinished.bind(this)();
    }
  }

  static layout(
    viewer: OpenSeadragon.Viewer,
    columns: number,
    rows: number,
    clipRect: OpenSeadragon.Rect,
    margins?: boolean,
    offsets?: { [key in CutPosition]?: number },
    rotations?: { [key in CutPosition]?: number },
    immediately: boolean = true
  ) {
    if (margins === undefined) {
      margins = false;
    }
    if (margins) {
      columns = columns + 2;
      rows = rows + 2;
    }
  }

  private debugOverlay(content: string, image: OpenSeadragon.TiledImage, clip: boolean = false): void {
    if (!this._debug || this._debugOverlays === undefined) {
      return;
    }

    if (this._debugOverlays.has(image)) {
      const overlays = this._debugOverlays.get(image)!;
      //const existingContent =overlays[0].element.innerHTML
      overlays[0].element.innerHTML = content;
      this.viewer?.getOverlayById(overlays[0].element).update(image.getBounds(true), undefined);
      if (overlays[1] !== undefined && clip && image.getClip() !== null) {
        this.viewer?.getOverlayById(overlays[1].element).update(image.imageToViewportRectangle(image.getClip()!), undefined);
      }
    } else {
      const position = image.getBounds(true);
      const labelElem = document.createElement("div");
      labelElem.id = "debug-overlay" + Math.random().toString(16).slice(2);
      labelElem.className = "debug-overlay";
      labelElem.innerHTML = content;
      labelElem.style.fontSize = "2em";
      labelElem.style.color = "red";
      labelElem.style.alignItems = "center";
      labelElem.style.justifyContent = "canter";
      labelElem.style.display = "flex";
      labelElem.style.textAlign = "center";
      labelElem.style.border = "2px solid red";
      const overlay: { element: HTMLElement; location: OpenSeadragon.Rect } = {
        element: labelElem,
        location: image.getBounds(true)
      };
      this.viewer?.addOverlay(overlay.element, overlay.location);

      let clipOverlay: { element: HTMLElement; location: OpenSeadragon.Rect };
      if (clip && image.getClip() !== null) {
        const clipElem = document.createElement("div");
        clipElem.id = "debug-overlay" + Math.random().toString(16).slice(2);
        clipElem.className = "debug-overlay";
        clipElem.style.border = "1px dashed green";
        clipOverlay = {
          element: clipElem,
          location: image.imageToViewportRectangle(image.getClip()!)
        };
        this.viewer?.addOverlay(clipOverlay.element, clipOverlay.location);
        this._debugOverlays.set(image, [overlay, clipOverlay]);
      } else {
        this._debugOverlays.set(image, [overlay]);
      }
    }
  }

  static fitToWidth(viewer: OpenSeadragon.Viewer, immediately: boolean = true, clipRect?: OffsetRect, fitTop: boolean = false) {
    if (viewer !== undefined && viewer.world.getItemCount() > 0) {
      let minX = Infinity;
      let maxX = -Infinity;
      let minY = Infinity;
      let maxY = -Infinity;

      for (let i = 0; i < viewer.world.getItemCount(); i++) {
        const tiledImage = viewer.world.getItemAt(i);
        const bounds = tiledImage.getBounds();

        if (tiledImage.getClip() !== null) {
          console.log(
            bounds.x,
            tiledImage.imageToViewportRectangle(tiledImage.getClip()!).x,
            tiledImage.imageToViewportRectangle(tiledImage.getClip()!).width
          );
          minX = Math.min(minX, tiledImage.imageToViewportRectangle(tiledImage.getClip()!).x);
          maxX = Math.max(maxX, bounds.x + tiledImage.imageToViewportRectangle(tiledImage.getClip()!).width);
          maxY = Math.max(maxY, bounds.y + tiledImage.imageToViewportRectangle(tiledImage.getClip()!).height);
          minY = Math.min(minY, tiledImage.imageToViewportRectangle(tiledImage.getClip()!).y);
        } else {
          minX = Math.min(minX, bounds.x);
          maxX = Math.max(maxX, bounds.x + bounds.width);
          maxY = Math.max(maxY, bounds.y + bounds.height);
          minY = Math.min(minY, bounds.y);
        }
      }

      const combinedWidth = maxX - minX;
      if (combinedWidth > 0) {
        const targetZoom = 1.0 / combinedWidth;
        viewer.viewport.zoomTo(targetZoom, undefined, immediately);

        const combinedCenterX = minX + combinedWidth / 2;

        viewer.viewport.panTo(new OpenSeadragon.Point(combinedCenterX, viewer.viewport.getCenter().y), immediately);

        const currentViewportBounds = viewer.viewport.getBounds();
        if (currentViewportBounds.y < 0) {
          viewer.viewport.panBy(new OpenSeadragon.Point(0, -currentViewportBounds.y), immediately);
        }
        if (currentViewportBounds.y > 0 && fitTop) {
          viewer.viewport.panBy(new OpenSeadragon.Point(0, -currentViewportBounds.y), immediately);
        }
        viewer.raiseEvent("full-width", {});
      }
    } else {
      throw new Error("Not a valid viewer");
    }
  }

  appendNotification(cuts: CutNotification): void {
    const last: CutNotification = this._notificationQueue[this._notificationQueue.length - 1];
    if (last === undefined || !equals(last, cuts)) {
      this._notificationQueue.push(cuts);
    }
  }

  notify(cuts: CutNotification, immediately: boolean = true): void {
    if (!this._loaded || this.viewer === undefined) {
      this.appendNotification(cuts);
    } else {
      this.preview(
        cuts[0][CutPosition.Left],
        cuts[0][CutPosition.Top],
        cuts[0][CutPosition.Right],
        cuts[0][CutPosition.Bottom],
        immediately, // Check if false looks better
        cuts[1],
        cuts[2]
      );
    }
  }

  renderImage(width: number = 1920, height: number = 1080, type = "image/png"): Promise<HTMLCanvasElement | string> {
    /*
    const type = format === "png" ? "image/png" : "image/jpeg";
    let quality: number | undefined;

    if (format === "jpeg") {
      quality = 0.9;
    } else {
      quality = undefined;
    }
    */

    return new Promise<HTMLCanvasElement | string>((resolve, reject) => {
      const container = document.createElement("div");

      if (this._debug !== undefined && this._debug) {
        let debugElement = document.querySelector<HTMLElement>("#debug");
        if (debugElement === null) {
          debugElement = document.querySelector<HTMLElement>("body");
        }
        debugElement!.insertAdjacentElement("beforeend", container);
      }

      const timer = setTimeout(() => {
        reject(new Error(`Render not finished after ${this.renderTimeout}ms`));
      }, this.renderTimeout);

      const renderer: Renderer = new Renderer(container, this.columns, this.rows, false, false, false, undefined, width, height);

      const childViewer = renderer.viewer;
      if (childViewer === undefined) {
        clearTimeout(timer);
        reject("Child Renderer has no viewer!");
      }

      //const viewportRect = this.viewer?.viewport.getBounds(true);
      if (this._source === undefined) {
        clearTimeout(timer);
        reject("Parent viewer has no source!");
      }
      renderer.source = this._source!;

      const clip: { [key in CutPosition]?: number | undefined } = {};
      const offsets: { [key in CutPosition]?: number } | undefined = this._offsets;
      const rotations: { [key in CutPosition]?: number } | undefined = this._rotations;

      if (this.clipRect !== undefined) {
        clip[CutPosition.Top] = this.clipRect.y;
        clip[CutPosition.Left] = this.clipRect.x;
        clip[CutPosition.Right] = this.clipRect.width;
        clip[CutPosition.Bottom] = this.clipRect.height;
      } else {
        clip[CutPosition.Top] = 0;
        clip[CutPosition.Left] = 0;
        clip[CutPosition.Right] = this._source!.width;
        clip[CutPosition.Bottom] = this._source!.height;
      }

      childViewer!.addOnceHandler(
        "source-loaded",
        (() => {
          childViewer!.addOnceHandler(
            "layout-finish",
            (() => {
              childViewer!.addOnceHandler(
                "full-width",
                (() => {
                  console.log("Output canvas resized");
                  const canvas: HTMLCanvasElement = childViewer!.drawer.canvas as HTMLCanvasElement;

                  const context = canvas.getContext("2d");
                  if (!context) {
                    clearTimeout(timer);
                    reject(new Error("Could not get 2D rendering context for the canvas."));
                  }
                  /*
                  canvas.toBlob(
                    (blob) => {
                      // Callback function
                      resolve(blob); // Resolve with the blob (or null if failed)
                    },
                    type, // Mime type
                    quality // Quality argument (for JPEG)
                  );
                  const url = URL.createObjectURL(blob);
                  */

                  clearTimeout(timer);
                  resolve(canvas);
                }).bind(this)
              );
              console.log("render finished");
              Renderer.fitToWidth(childViewer!, true, undefined, true);
            }).bind(this)
          );
          console.log("Source loaded");
          renderer.notify([clip, offsets, rotations] as CutNotification, true);
        }).bind(this)
      );
    });
  }

  addControls(element: HTMLElement, width: number = 1920, height: number = 1080, type: string = "image/png") {
    const renderCallback = async (width: number = 1920, height: number = 1080): Promise<HTMLCanvasElement | undefined> => {
      try {
        const canvas: HTMLCanvasElement = await this.renderImage(width, height);
        console.log("returning canvas to download");
        return canvas;
      } catch (e) {
        if (this.statusContainer !== null) {
          this.statusContainer.innerHTML = e as string;
        }
        return undefined;
      }
      /*
      return new Promise<HTMLCanvasElement | undefined>((resolve, reject) => {
        this.renderImage(width, height).then(
          (canvas: HTMLCanvasElement) => {
            resolve(canvas);
          },
          (msg: string) => {
            if (this.statusContainer !== null) {
              this.statusContainer.innerHTML = msg;
            }
            reject(undefined);
          }
        );
      });
      */
    };

    if (this._download) {
      customElements.define("offscreencanvas-download", CanvasDownloadButton);
      this.downloadButton = document.createElement("offscreencanvas-download") as CanvasDownloadButton;
      const suffix = type.split("/")[1];
      this.downloadButton.format = suffix;
      this.downloadButton.renderCallback = renderCallback.bind(this); //this.renderImage.bind(this);
      this.downloadButton.fileName = `wallpaper`;
      this.downloadButton.width = width;
      this.downloadButton.height = height;
      this.downloadButton.setAttribute("disabled", "true");
      this.downloadButton.classList.add("download-button");
      customElements.define("image-resolution-select", ImageResolutionSelect);
      this.resolutionSelect = document.createElement("image-resolution-select") as ImageResolutionSelect;
      //const options = this.resolutionSelect.optionsData;
      this.resolutionSelect.setAttribute("confirm-button", "true");
      this.resolutionSelect.customHeight = height;
      this.resolutionSelect.customWidth = width;
      this.resolutionSelect.setAttribute("disabled", "true");
      this.resolutionSelect.addEventListener("change", (event: CustomEvent) => {
        if (event.detail !== undefined) {
          this.downloadButton!.width = event.detail[0];
          this.downloadButton!.height = event.detail[1];
          this.downloadButton!.disabled = false;
        }
      });
      this.resolutionSelect.classList.add("resolution-select");
      element.appendChild(this.resolutionSelect);
      element.appendChild(this.downloadButton);
    }

    if (this._gridSelector) {
      customElements.define("grid-size-selector", GridSizeSelector);
      this.gridSizeSelect = document.createElement("grid-size-selector") as GridSizeSelector;
      this.gridSizeSelect.setAttribute("disabled", "true");
      this.gridSizeSelect.setAttribute("width", String(this.columns));
      this.gridSizeSelect.setAttribute("height", String(this.rows));
      this.gridSizeSelect.classList.add("grid-select");
      const sizeChangeHandler = (event: CustomEvent) => {
        const columns = event.detail.width;
        const rows = event.detail.height;
        const fitCallback = () => {
          if (this.viewer !== undefined) {
            Renderer.fitToWidth(this.viewer, true);
          }
        };
        this.viewer?.addOnceHandler("source-loaded", fitCallback.bind(this));
        this.setSize(columns, rows); //, fitCallback.bind(this)
      };
      this.gridSizeSelect.addEventListener("size-changed", sizeChangeHandler.bind(this));
      element.appendChild(this.gridSizeSelect);
    }
  }

  static cloneRect(rect: OpenSeadragon.Rect): OpenSeadragon.Rect {
    return new OpenSeadragon.Rect(rect.x, rect.y, rect.width, rect.height);
  }
}
