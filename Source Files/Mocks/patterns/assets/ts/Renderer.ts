import OpenSeadragon from "openseadragon";
import { ImageResolutionSelect } from "./components/ImageResolutionSelect";
import { CanvasDownloadButton } from "./components/CanvasDownloadButton";
import { GridSizeSelector } from "./components/GridSizeSelector";
import { CutPosition } from "./types";
import { OffsetRect } from "./openseadragon/OffsetRect";
import type { CutNotification, IIIFImageStub, Translation } from "./types";
import { equals, getLang } from "./util";

export class Renderer {
  static labels: { [key: string]: { [key: string]: Translation } } = {
    links: {
      image: { de: "Bild herunterladen", en: "Download image" }
    },
    select: {
      custom: { de: "Eigene Auflösung", en: "Custom resolution" }
    }
  };

  //Element identifiers / classes / selectors
  static defaultSelector: string = ".texture-container";
  static rendererViewerSelector = ".output-viewer";

  element: HTMLElement;
  _source: IIIFImageStub | undefined;
  viewer: OpenSeadragon.Viewer | undefined;
  viewerElement: HTMLElement;

  _gridSelector: boolean;
  clipRect: OpenSeadragon.Rect | undefined;
  _offsets: { [key in CutPosition]?: number } | undefined;
  _rotations: { [key in CutPosition]?: number } | undefined;
  _rows: number;
  _columns: number;
  tileSources: object[] = [];
  _loaded: boolean = false;
  resolutionSelect: ImageResolutionSelect;
  downloadButton: CanvasDownloadButton;
  gridSizeSelect: GridSizeSelector;
  _margins: boolean = false;
  defaultExportDimensions: [number, number] = [1920, 1080];
  _notificationQueue: CutNotification[] = [];

  constructor(element: HTMLElement, columns: number = 4, rows: number = 4, gridSelector: boolean = true, source?: IIIFImageStub) {
    if (element !== undefined) {
      this.element = element;
    } else {
      this.element = document.querySelector<HTMLDivElement>(Renderer.defaultSelector)!;
    }

    this._columns = columns;
    this._rows = rows;
    this._gridSelector = gridSelector;
    customElements.define("image-resolution-select", ImageResolutionSelect);
    customElements.define("offscreencanvas-download", CanvasDownloadButton);
    customElements.define("grid-size-selector", GridSizeSelector);
    this.setupHTML();
    this.viewerElement = this.element.querySelector(Renderer.rendererViewerSelector)!;
    this.viewer = this.setupViewer(this.viewerElement);

    if (source !== undefined) {
      this.source = source;
    }

    let width = this.defaultExportDimensions[0];
    let height = this.defaultExportDimensions[1];
    if (this.viewer !== undefined) {
      width = this.viewer.container.clientWidth;
      height = this.viewer.container.clientHeight;
    }
    if (this.element !== null) {
      this.addControls(this.viewerElement, width, height);
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
    let columns = this._columns;
    let rows = this._rows;
    if (this._margins) {
      columns = columns + 2;
      rows = rows + 2;
    }
    if (this._source !== undefined) {
      for (let i = 0; i < columns * rows; i++) {
        this.tileSources.push(this._source);
      }
    }
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
    this.tileSources = [];
    let loadCounter: number = 0;
    this.viewer.world.addHandler("add-item", () => {
      loadCounter++;
      if (loadCounter == this.tileSources.length) {
        this._loaded = true;
        if (!this._notificationQueue.length) {
          //this.preview();
          this.layout(true);
        } else {
          this._notificationQueue.forEach((notification: CutNotification) => {
            this.notify(notification);
          });
        }
      }
    });
    this.setupSources();
    this.viewer.open(this.tileSources);
    this.enableControls();
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

  set margins(margins: boolean) {
    this._margins = margins;
    this.setSize(this.columns, this.rows);
    //This triggers reinitialization
    if (this._source !== undefined) {
      this.source = this._source;
    }
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
      return this._rows - 2;
    }
    return this._rows;
  }
  get columns(): number {
    if (this._margins) {
      return this._columns - 2;
    }
    return this._columns;
  }

  setSize(columns: number, rows: number): void {
    if (this._margins) {
      columns = columns + 2;
      rows = rows + 2;
    }
    if (this._columns != columns || this._rows != rows) {
      this._columns = columns;
      this._rows = rows;
      this.viewer?.world.arrange({ rows: this._rows, columns: this._columns, tileMargin: 0, immediately: true });

      //This triggers reinitialization
      if (this._source !== undefined) {
        this.source = this._source;
      }
    }
  }

  enableControls() {
    this.gridSizeSelect.removeAttribute("disabled");
    this.resolutionSelect.removeAttribute("disabled");
    this.downloadButton.removeAttribute("disabled");
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

  setupHTML() {
    this.element.innerHTML = `
      <div class="output-viewer">
        <i class="controls button zoomin"></i>
        <i class="controls button zoomout"></i>
        <i class="controls button fullscreen"></i>
        <i class="controls button fullwidth"></i>
      </div>
    `;
  }

  setupViewer(element?: HTMLElement) {
    if (element !== undefined) {
      element = this.viewerElement;
    }
    if (element !== null && element !== undefined) {
      const options: OpenSeadragon.Options = {
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
    if (this.downloadButton !== undefined) {
      this.downloadButton.disabled = false;
    }
  }

  /*
  clip(
    left: number = 0,
    top: number = 0,
    width: number,
    height: number,
    immediately: boolean = true,
    offsets?: { [key in CutPosition]?: number },
    rotations?: { [key in CutPosition]?: number }
  ) {
    let itemCount = 0;
    if (this.viewer !== undefined && this.viewer?.world.getItemCount() !== undefined) {
      itemCount = this.viewer.world.getItemCount();
    }
    for (let i = 0; i < itemCount; i++) {
      const tiledImage: OpenSeadragon.TiledImage | undefined = this.viewer?.world.getItemAt(i);
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
  }
  */

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

  /*
  TODO:
    * Offsets includin wrap arounds and margins
    * Check this https://github.com/openseadragon/openseadragon/pull/2616
  */

  layout(immediately: boolean = true) {
    let columns = this._columns;
    let rows = this._rows;
    let initial = false;
    this.viewer?.world.setAutoRefigureSizes(true);
    if (this._margins) {
      columns = columns + 2;
      rows = rows + 2;
    }
    let pos = 0;
    let expectedSize: OpenSeadragon.Rect;
    if (this.clipRect === undefined) {
      throw new Error("Clip rect is not defined");
    }
    let firstImage: OpenSeadragon.TiledImage | undefined = this.viewer?.world.getItemAt(0);
    if (this._margins) {
      firstImage = this.viewer?.world.getItemAt(this._rows + 2);
    }
    if (firstImage === undefined) {
      throw new Error("Couldn't get first tiled image!");
    }
    //firstImage.setPosition({ x: 0, y: 0 } as OpenSeadragon.Point, immediately);

    if (firstImage.getBounds().width == 1) {
      initial = true;
      //This is needed for the size calculation based on reference images
      this.viewer?.world.arrange({ rows: this._rows, columns: this._columns, tileMargin: 0, immediately: true });
    }

    const referenceImage = firstImage;

    //const initialSizes = this.viewer?.viewport.imageToViewportRectangle(this.clipRect);

    //console.log("First check ", firstImage.imageToViewportRectangle(this.clipRect));

    //const initialSizes = firstImage.imageToViewportRectangle(this.clipRect);
    this.viewer?.world.setAutoRefigureSizes(false);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        //Variables
        let row = r;
        let column = c;
        let x = 0,
          y = 0;
        let width = 0,
          height = 0;
        const tiledImage: OpenSeadragon.TiledImage | undefined = this.viewer?.world.getItemAt(pos);

        //Sanity checks
        if (tiledImage === undefined || firstImage === undefined) {
          console.warn(tiledImage, firstImage);
          throw new Error("Required variables are not defined");
        }

        const transformedClipRect = referenceImage.imageToViewportRectangle(this.clipRect);
        expectedSize = new OpenSeadragon.Rect(0, 0, transformedClipRect.width * this._columns, transformedClipRect.height * this._rows);

        let offsetRect;

        if (this._offsets != undefined) {
          offsetRect = Renderer.createOffsetRect(this._offsets, tiledImage);
        }
        //TODO: Parts need to be moved to the bottom
        if (this._margins) {
          const hideRect = new OpenSeadragon.Rect(
            0,
            0,
            tiledImage.getBounds().width,
            tiledImage.getBounds().height,
            tiledImage.getRotation()
          );
          //First and last column (margin)
          if (c == 0 || c == this._columns + 1) {
            column = c - 1;
            if (offsetRect !== undefined && r > 1 && r % 2 == 0) {
              hideRect.height = firstImage.imageToViewportRectangle(offsetRect).height * (r / 2) * offsetRect.degrees;
            }
          }
          //First and last row (margin)
          if (r == 0 || r == this._rows + 1) {
            row = r - 1;
            if (offsetRect !== undefined && c > 1 && c % 2 == 0) {
              if (offsetRect.degrees > 0 && r == 0) {
                hideRect.width = firstImage.imageToViewportRectangle(offsetRect).width * (c / 2);
              } else if (offsetRect.degrees < 0 && r == 0) {
                hideRect.width = firstImage.imageToViewportRectangle(offsetRect).width * (c / 2) * offsetRect.degrees;
              }
            }
          }
          tiledImage.setClip(hideRect);
          tiledImage.setPosition({ x: x, y: y } as OpenSeadragon.Point, immediately);

          continue;
        }

        // Rotations
        if (this._rotations !== undefined && Object.keys(this._rotations).length) {
          if (CutPosition.Right in this._rotations && this._rotations[CutPosition.Right] !== undefined && row % 2 == 0 && column % 2 == 1) {
            const rotate = this._rotations[CutPosition.Right];
            tiledImage.setRotation(rotate, immediately);
          }
          if (
            CutPosition.Bottom in this._rotations &&
            this._rotations[CutPosition.Bottom] !== undefined &&
            column % 2 == 0 &&
            row % 2 == 1
          ) {
            const rotate = this._rotations[CutPosition.Bottom];
            tiledImage.setRotation(rotate, immediately);
          }
          if (
            CutPosition.Right in this._rotations &&
            this._rotations[CutPosition.Right] !== undefined &&
            CutPosition.Bottom in this._rotations &&
            this._rotations[CutPosition.Bottom] !== undefined
          ) {
            if (row % 2 == 0 && column % 2 == 1 && column % 2 == 0 && row % 2 == 1) {
              const rotate = this._rotations[CutPosition.Right] + this._rotations[CutPosition.Bottom];
              tiledImage.setRotation(rotate, immediately);
            }
          }
        }

        /*
        //Only every column, starting at the first
        if (column % 2 == 0) {
        }
        //Only every column, starting at the second
        if (column % 2 == 1) {
        }
        */

        //initial position
        width = transformedClipRect.width;
        height = transformedClipRect.height;
        if (transformedClipRect.x > 0) {
          width = width - transformedClipRect.x;
        }
        if (transformedClipRect.y > 0) {
          height = height - transformedClipRect.y;
        }

        x = width * column;
        y = height * row;

        if (offsetRect !== undefined) {
          if (column > 0 && offsetRect.height > 0) {
            const shift = offsetRect.calculateY(referenceImage) * column;
            y = y + shift;
          } else if (column > 0 && offsetRect.height < 0) {
            const shift = offsetRect.calculateY(referenceImage) * column;
            y = y - shift;
          }
          if (column == this.columns - 1 && offsetRect.width > 0) {
            const borderClip = Renderer.cloneRect(tiledImage.getClip());
            const imageCoordShift = offsetRect.width * row;
            borderClip.width = borderClip.width - imageCoordShift;
            tiledImage.setClip(borderClip);
          }
          if (column == 0 && row > 0 && offsetRect.width < 0) {
            const borderClip = Renderer.cloneRect(tiledImage.getClip());
            const imageCoordShift = offsetRect.width * row * -1;
            borderClip.width = borderClip.width - imageCoordShift;
            borderClip.x = borderClip.x + imageCoordShift;
            tiledImage.setClip(borderClip);
          }
          if (row > 0 && offsetRect.width > 0) {
            const shift = offsetRect.calculateX(referenceImage) * row;
            x = x + shift;
          } else if (row > 0 && offsetRect.width < 0) {
            const shift = offsetRect.calculateX(referenceImage) * row;
            x = x - shift;
          }

          if (row == this.rows - 1 && offsetRect.height > 0) {
            const borderClip = Renderer.cloneRect(tiledImage.getClip());
            const imageCoordShift = offsetRect.height * column;
            borderClip.height = borderClip.height - imageCoordShift;
            tiledImage.setClip(borderClip);
          }
          if (row == 0 && column > 0 && offsetRect.height < 0) {
            const borderClip = Renderer.cloneRect(tiledImage.getClip());
            const imageCoordShift = offsetRect.height * column * -1;
            borderClip.height = borderClip.height - imageCoordShift;
            borderClip.y = borderClip.y + imageCoordShift;
            tiledImage.setClip(borderClip);
          }

          console.log("offsets", offsetRect, offsetRect.calculateX(referenceImage), offsetRect.calculateY(referenceImage), x, y);
        }

        pos++;
        if (tiledImage !== undefined) {
          tiledImage.setPosition(new OpenSeadragon.Point(x, y), immediately);
          //‚tiledImage.setWidth(width, immediately);
        }
        //console.log("clip rect x", this.clipRect);
        //console.log(`${column}:${row} x`, tiledImage.getBounds(), this.clipRect.x, x, " y ", this.clipRect.y, y);
      }
    }

    if (initial) {
      this.viewer?.viewport.fitBounds(expectedSize, true);
    }
    this.viewer?.world.setAutoRefigureSizes(true);
    //this.viewer?.forceRedraw()
  }

  static fitToWidth(viewer: OpenSeadragon.Viewer, immediately: boolean = false) {
    if (viewer !== undefined && viewer.world.getItemCount() > 0) {
      console.warn("Margins are enabled, expect this to return strnage results!");

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
        viewer.viewport.zoomTo(targetZoom, undefined, immediately);

        const combinedCenterX = minX + combinedWidth / 2;

        viewer.viewport.panTo(new OpenSeadragon.Point(combinedCenterX, viewer.viewport.getCenter().y), immediately);

        const currentViewportBounds = viewer.viewport.getBounds();
        if (currentViewportBounds.y < 0) {
          viewer.viewport.panBy(new OpenSeadragon.Point(0, -currentViewportBounds.y), immediately);
        }
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

  notify(cuts: CutNotification): void {
    if (!this._loaded || this.viewer === undefined) {
      this.appendNotification(cuts);
    } else {
      this.preview(
        cuts[0][CutPosition.Left],
        cuts[0][CutPosition.Top],
        cuts[0][CutPosition.Right],
        cuts[0][CutPosition.Bottom],
        true, // Check if flse looks better
        cuts[1],
        cuts[2]
      );
    }
  }
  /*
  cloneViewerToCanvas(originalViewer: OpenSeadragon.Viewer, targetCanvas: HTMLCanvasElement): Promise<OpenSeadragon.Viewer> {
    // Note: Changed return type to Promise<Viewer>
    return new Promise((resolve, reject) => {
      // Check if the original viewer has tile sources. If not, reject the promise.
      const originalTileSources = originalViewer.tileSources;
      if (!originalTileSources || (Array.isArray(originalTileSources) && originalTileSources.length === 0)) {
        console.error("Original viewer has no tile sources. Rejecting promise.");
        // Reject instead of resolving with null
        reject(new Error("Original viewer has no tile sources. Cannot create clone."));
        return;
      }

      // Get the size of the target canvas.
      const canvasWidth = targetCanvas.width;
      const canvasHeight = targetCanvas.height;

      // Create a new OpenSeadragon viewer.
      let clonedViewer: OpenSeadragon.Viewer;
      try {
        clonedViewer = new OpenSeadragon.Viewer({
          element: targetCanvas,
          tileSources: [], // Start empty, add sources manually to attach handlers
          showNavigator: false,
          showHomeControl: false,
          showFullPageControl: false,
          showZoomControl: false,
          showRotationControl: false,
          showFlipControl: false,
          showSequenceControl: false
          // immediateRender: true, // Consider if needed; drawing happens after load anyway
        });
      } catch (error) {
        console.error("Error creating OpenSeadragon viewer:", error);
        reject(error); // Reject promise if viewer creation fails
        return;
      }

      // --- Tile Source Loading Logic ---
      let sourcesToAdd: OpenSeadragon.TileSource[] = [];
      if (Array.isArray(originalTileSources)) {
        sourcesToAdd = originalTileSources;
      } else {
        sourcesToAdd = [originalTileSources]; // Treat single source as an array
      }

      let openedCount = 0; // Counter for sources that triggered 'open'
      const totalSources = sourcesToAdd.length;
      const tiledImages: OpenSeadragon.TiledImage[] = []; // Keep track of added TiledImage objects for cleanup

      // Function to call when all sources are opened
      const onAllSourcesOpened = () => {
        try {
          // Copy viewport settings *after* sources are opened
          const originalViewport: OpenSeadragon.Viewport = originalViewer.viewport;
          clonedViewer.viewport.zoomTo(originalViewport.getZoom(true), undefined, true); // Use immediate=true
          const originalCenter: OpenSeadragon.Point = originalViewport.getCenter(true);
          clonedViewer.viewport.panTo(originalCenter, true); // Use immediate=true
          clonedViewer.viewport.setRotation(originalViewport.getRotation(), true); // Use immediate=true

          // Set the size of the cloned viewer's container.
          clonedViewer.container.style.width = `${canvasWidth}px`;
          clonedViewer.container.style.height = `${canvasHeight}px`;

          // Force a resize and redraw now that content is loaded.
          clonedViewer.resize();
          clonedViewer.world.update(); // Ensure world is updated
          clonedViewer.viewport.update(); // Ensure viewport is updated
          clonedViewer.forceRedraw(); // Force redraw

          console.log("All tile sources opened in cloned viewer.");
          resolve(clonedViewer); // Resolve the promise with the fully loaded viewer
        } catch (error) {
          console.error("Error configuring viewer state after sources opened:", error);
          reject(error); // Reject if configuration fails
        }
      };

      // Handler for successful tile source open
      const onSourceOpen = (event: { eventSource: OpenSeadragon.TiledImage }) => {
        openedCount++;
        console.log(`Tile source ${openedCount}/${totalSources} opened.`);
        // Clean up handlers for this specific TiledImage
        event.eventSource.removeHandler("open", onSourceOpen);
        event.eventSource.removeHandler("open-failed", onSourceOpenFailed);
        if (openedCount === totalSources) {
          onAllSourcesOpened();
        }
      };

      // Handler for failed tile source open
      const onSourceOpenFailed = (event: { eventSource: OpenSeadragon.TiledImage; message: string }) => {
        console.error("Failed to open a tile source in cloned viewer:", event.message);
        // Clean up handlers for this specific TiledImage
        event.eventSource.removeHandler("open", onSourceOpen);
        event.eventSource.removeHandler("open-failed", onSourceOpenFailed);

        // Clean up all other handlers and destroy viewer
        tiledImages.forEach((img) => {
          // Check if the img object exists before trying to remove handlers
          if (img) {
            img.removeHandler("open", onSourceOpen);
            img.removeHandler("open-failed", onSourceOpenFailed);
          }
        });
        clonedViewer.destroy(); // Clean up the partially created viewer
        reject(new Error(`Failed to open tile source: ${event.message}`));
      };

      // Add tile sources and attach event handlers
      if (totalSources === 0) {
        // This case should now be caught by the initial check, but as a safeguard:
        console.error("No valid sources to add, but initial check failed? Rejecting.");
        reject(new Error("No tile sources found to add to the viewer."));
        return;
      }

      sourcesToAdd.forEach((source: OpenSeadragon.TileSource, index: number) => {
        try {
          clonedViewer.addTiledImage({
            tileSource: source,
            index: index, // Maintain original order if needed
            success: (tiledImage: OpenSeadragon.TiledImage) => {
              // Store the TiledImage object
              tiledImages[index] = tiledImage;
              // Attach handlers *after* the TiledImage object is created and added
              // Check if already open (might happen with cached/fast sources)
              if (tiledImage.getFullyLoaded()) {
                // If already loaded/open by the time we attach handler, count it immediately
                openedCount++;
                console.log(`Tile source ${openedCount}/${totalSources} was already open.`);
                if (openedCount === totalSources) {
                  onAllSourcesOpened();
                }
              } else {
                // Otherwise, attach handlers to wait for events
                tiledImage.addHandler("open", onSourceOpen);
                tiledImage.addHandler("open-failed", onSourceOpenFailed);
              }
            },
            error: (error: Error) => {
              // This error callback in addTiledImage catches errors during the *add* process
              console.error(`Error adding tiled image at index ${index}:`, error);
              // Clean up existing handlers/viewer
              tiledImages.forEach((img) => {
                if (img) {
                  // Check if image object exists
                  img.removeHandler("open", onSourceOpen);
                  img.removeHandler("open-failed", onSourceOpenFailed);
                }
              });
              clonedViewer.destroy();
              reject(error); // Reject the main promise
            }
          });
        } catch (error) {
          console.error(`Synchronous error calling addTiledImage at index ${index}:`, error);
          // Clean up existing handlers/viewer
          tiledImages.forEach((img) => {
            if (img) {
              img.removeHandler("open", onSourceOpen);
              img.removeHandler("open-failed", onSourceOpenFailed);
            }
          });
          clonedViewer.destroy();
          reject(error); // Reject the main promise
          return; // Stop adding more sources if one fails synchronously
        }
      });
    });
  }
*/
  /*
  cloneViewerToCanvas(sourceViewer: OpenSeadragon.Viewer, canvas: OffscreenCanvas): OpenSeadragon.Viewer {
    const viewportSize = sourceViewer.viewport.getContainerSize();
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      const error = new Error('Failed to get 2D rendering context for OffscreenCanvas');
      console.error('Error:', error);
      throw error;
    }

    const clonedViewer = new OpenSeadragon.Viewer({
      element: document.createElement('div'),
      showNavigator: false,
      showZoomControl: false,
      showFullPageControl: false,
      showRotationControl: false,
      showSequenceControl: false,
      immediateRender: true,
      crossOriginPolicy: "Anonymous",
      tileSources: sourceViewer.tileSources,
      viewport: {
          ...sourceViewer.viewport.options,
      },
      drawer: 'canvas',
    });

    clonedViewer.element.style.width = `${canvas.width}px`;
    clonedViewer.element.style.height = `${canvas.height}px`;
      let isClonedViewerOpen = false;
      let sourceImages: TiledImage[] = [];

      const drawCanvas = () => {
          if (!isClonedViewerOpen) return;
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const tiledImages: OpenSeadragon.TiledImage[] = [];
          for (let i = 0; i < clonedViewer.world.getItemCount(); i++) {
              const item = clonedViewer.world.getItemAt(i);
              if (item instanceof OpenSeadragon.TiledImage) {
                  tiledImages.push(item);
              }
          }

          const sourceViewport = sourceViewer.viewport.getBounds();
          const sourceViewportSize = sourceViewer.viewport.getContainerSize();

          tiledImages.forEach((tileImage) => {
              if (!tileImage.source || !tileImage.source.dimensions) return;
              const imageBounds = tileImage.getBounds();
              const imageDimensions = tileImage.source.dimensions;

              const topLeft = tileImage.imageToViewportCoordinates(new OpenSeadragon.Point(0, 0));
              const bottomRight = tileImage.imageToViewportCoordinates(new OpenSeadragon.Point(imageDimensions.x, imageDimensions.y));
              const viewportRect = new OpenSeadragon.Rect(
                topLeft.x,
                topLeft.y,
                bottomRight.x - topLeft.x,
                bottomRight.y - topLeft.y
              );

              const sourceRect = new OpenSeadragon.Rect(
                Math.max(0, (sourceViewport.x - imageBounds.x) / sourceViewport.width),
                Math.max(0, (sourceViewport.y - imageBounds.y) / sourceViewport.height),
                Math.min(1, (sourceViewport.x + sourceViewport.width - imageBounds.x) / sourceViewport.width),
                Math.min(1, (sourceViewport.y + sourceViewport.height - imageBounds.y) / sourceViewport.height)
              );

              const destRect = new OpenSeadragon.Rect(
                (imageBounds.x - sourceViewport.x) * canvas.width / sourceViewportSize.x,
                (imageBounds.y - sourceViewport.y) * canvas.height / sourceViewportSize.y,
                viewportRect.width * canvas.width / sourceViewportSize.x,
                viewportRect.height * canvas.height / viewportSize.y
              );

              const tileUrl = tileImage.source.getTileUrl(0, 0, 0);

              const img = new Image();
              img.crossOrigin = "anonymous";
              img.onload = () => {
                try {
                  ctx.drawImage(
                    img,
                    sourceRect.x * imageDimensions.x,
                    sourceRect.y * imageDimensions.y,
                    sourceRect.width * imageDimensions.x,
                    sourceRect.height * imageDimensions.y,
                    destRect.x,
                    destRect.y,
                    destRect.width,
                    destRect.height
                  );
                } catch (e) {
                  console.error("Error drawing tile: ", e);
                }
              };
              img.onerror = (err) => {
                  console.error("Error loading tile: ", tileUrl, err);
              }
              img.src = tileUrl;
          });
      }
      const updateClonedViewer = () => {
          try{
              if(!clonedViewer.viewport){
                  console.warn("clonedViewer.viewport is undefined");
                  return;
              }
              const sourceViewport = sourceViewer.viewport;
              clonedViewer.viewport.zoomTo(sourceViewport.getZoom(true), true);
              clonedViewer.viewport.panTo(sourceViewport.getCenter(true), true);
              clonedViewer.viewport.setRotation(sourceViewport.getRotation(), true);
              drawCanvas();
          } catch(e){
              console.error("Error in updateClonedViewer", e);
          }
      };

    sourceViewer.addHandler('zoom', updateClonedViewer);
    sourceViewer.addHandler('pan', updateClonedViewer);
    sourceViewer.addHandler('rotate', updateClonedViewer);
    sourceViewer.addHandler('resize', updateClonedViewer);
    sourceViewer.addHandler('tile-loaded', () => drawCanvas());
    sourceViewer.addHandler('tile-unloaded', () => drawCanvas());



    clonedViewer.addHandler('open', () => {
      isClonedViewerOpen = true;
          for (let i = 0; i < sourceViewer.world.getItemCount(); i++) {
            const item = sourceViewer.world.getItemAt(i);
              if(item instanceof OpenSeadragon.TiledImage) {
                  try {
                      clonedViewer.world.addItem(item);
                  }
                  catch(e){
                      console.error("Error adding item", e);
                  }
              }
          }
      updateClonedViewer();
    });

    clonedViewer.raiseEvent('open');
    return clonedViewer;
  }
  */

  renderImage(width: number = 1920, height: number = 1080): HTMLCanvasElement | undefined {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    /*
    this.cloneViewerToCanvas(this.viewer, offscreen).then((renderViewer) => {
      console.log(renderViewer, offscreen, "width", width);
      Renderer.fitToWidth(renderViewer, true);
    });
    return offscreen;
    */

    const drawer: OpenSeadragon.Drawer | undefined = this.viewer?.drawer;
    if (drawer !== undefined && drawer.context !== null && drawer.canvas !== null) {
      const initialCanvas: Element | null = drawer.canvas;
      const initialContext: CanvasRenderingContext2D | null = drawer?.context;
      const canvasContext = canvas.getContext("2d") as CanvasRenderingContext2D;

      //const viewportBounds = this.viewer?.viewport.getBounds();
      //const contentSize = this.viewer?.viewport.getContainerSize;
      //const minLevel = this.viewer?.viewport.getMinZoom();
      //const maxLevel = this.viewer?.viewport.getMaxZoom();

      //this.viewer?.drawer.draw(canvasContext, viewportBounds, contentSize, minLevel, maxLevel);
      drawer.canvas = canvas;
      drawer.context = canvasContext;
      this.viewer?.forceRedraw();
      drawer.context = initialContext;
      return canvas;
    }
    return undefined;
  }

  addControls(element: HTMLElement, width: number = 1920, height: number = 1080, type: string = "image/png") {
    this.downloadButton = document.createElement("offscreencanvas-download") as CanvasDownloadButton;
    const suffix = type.split("/")[1];
    this.downloadButton.format = suffix;
    this.downloadButton.buttonText = Renderer.labels.links.image[getLang()]; //`${suffix.toUpperCase()} Herunterladen`;
    this.downloadButton.renderCallback = this.renderImage.bind(this);
    this.downloadButton.fileName = `wallpaper`;
    this.downloadButton.width = width;
    this.downloadButton.height = height;
    this.downloadButton.setAttribute("disabled", "true");
    this.downloadButton.classList.add("download-button");

    this.gridSizeSelect = document.createElement("grid-size-selector") as GridSizeSelector;
    this.gridSizeSelect.setAttribute("disabled", "true");
    this.gridSizeSelect.setAttribute("width", String(this.columns));
    this.gridSizeSelect.setAttribute("height", String(this.rows));
    this.gridSizeSelect.classList.add("grid-select");
    const sizeChangeHandler = (event: CustomEvent) => {
      const columns = event.detail.width;
      const rows = event.detail.height;
      this.setSize(columns, rows);
      //this.layout(true);
    };
    this.gridSizeSelect.addEventListener("size-changed", sizeChangeHandler.bind(this));

    this.resolutionSelect = document.createElement("image-resolution-select") as ImageResolutionSelect;
    const options = this.resolutionSelect.optionsData;
    options.filter((opt) => opt.value === "custom")[0].label = Renderer.labels.select.custom[getLang()];
    this.resolutionSelect.setAttribute("confirm-button", "true");
    this.resolutionSelect.customHeight = height;
    this.resolutionSelect.customWidth = width;
    this.resolutionSelect.setAttribute("disabled", "true");
    this.resolutionSelect.addEventListener("change", (event: CustomEvent) => {
      if (event.detail !== undefined) {
        this.downloadButton.width = event.detail[0];
        this.downloadButton.height = event.detail[1];
        this.downloadButton.disabled = false;
      }
    });
    this.resolutionSelect.classList.add("resolution-select");

    element.appendChild(this.resolutionSelect);
    element.appendChild(this.downloadButton);
    if (this._gridSelector) {
      element.appendChild(this.gridSizeSelect);
    }
  }

  static cloneRect(rect: OpenSeadragon.Rect): OpenSeadragon.Rect {
    return new OpenSeadragon.Rect(rect.x, rect.y, rect.width, rect.height);
  }
}
