import * as OpenSeadragon from "openseadragon";
//import "openseadragon";
/*
declare module "openseadragon" {
  declare namespace OpenSeadragon {
    //@ts-ignore: Neede to be able to let the interface extend itself
    declare interface Options extends OpenSeadragon.Options {
      zoomInButton?: string | Element | undefined;
      zoomOutButton?: string | Element | undefined;
      fullPageButton?: string | Element | undefined;
    }
  }
}

export as namespace OpenSeadragon;

declare function OpenSeadragon(options: OpenSeadragon.Options): OpenSeadragon.Viewer;

export = OpenSeadragon;
*/

//declare module "openseadragon" {
/*
declare global {
  export namespace OpenSeadragon {
    export interface Options extends OpenSeadragon.Options {
      zoomInButton?: string | Element | undefined;
      zoomOutButton?: string | Element | undefined;
      fullPageButton?: string | Element | undefined;
    }
  }

}

export default OpenSeadragon
*/
/*
namespace OpenSeadragon {
  export interface Options
}
*/

declare module "openseadragon" {
    declare interface Options extends OpenSeadragon.Options {
      zoomInButton?: string | Element | undefined;
      zoomOutButton?: string | Element | undefined;
      fullPageButton?: string | Element | undefined;
    }
  
}
