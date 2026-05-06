declare namespace OpenSeadragon {
  interface ViewerEventMap {
    "full-width": OpenSeadragon.ViewerEvent;
    "grid-size-changed": OpenSeadragon.ViewerEvent;
    "layout-start": OpenSeadragon.ViewerEvent;
    "layout-finish": OpenSeadragon.ViewerEvent;
    "source-loaded": OpenSeadragon.ViewerEvent;
  }

  interface Options {
    debug?: boolean;
  }
}
