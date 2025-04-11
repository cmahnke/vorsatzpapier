import OpenSeadragon from "openseadragon";

declare module "openseadragon" {
  declare namespace OpenSeadragon {
    //@ts-ignore: Neede to be able to let the interface extend itself
    interface Options extends OpenSeadragon.Options {
      zoomInButton?: string | Element | undefined;
      zoomOutButton?: string | Element | undefined;
      fullPageButton?: string | Element | undefined;
    }
  }
}

export as namespace OpenSeadragon;

declare function OpenSeadragon(options: OpenSeadragon.Options): OpenSeadragon.Viewer;

export = OpenSeadragon;
