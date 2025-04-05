export type IIIFSelect = {
  type: IIIFType;
  entries: Array<IIIFEntry | IIIFImageEntry>;
  element?: HTMLSelectElement | HTMLLabelElement;
  source?: URL;
};

export type IIIFType = "Collection" | "Manifest" | "Image";

export type IIIFEntry = {
  label: string;
  id: string;
};

export type Dimensions = {
  height: number;
  width: number;
  aspectRatio?: number;
};

export type IIIFImageEntry = IIIFEntry & Dimensions;

export type IIIFImageStub = {
  width: number;
  height: number;
  "@context": string;
};

export enum CutPosition {
  Top = 0,
  Bottom = 1,
  Left = 2,
  Right = 3
}

export class CutPositionUtil {
  public static toString(position: CutPosition): string {
    return CutPosition[position];
  }

  public static fromString(position: string): CutPosition {
    throw new Error("Converting from string not implemented");
    //return CutPosition[position];
  }
}
// cuts, offsets, rotations
export type CutNotification = [
  { [key in CutPosition]?: number | undefined },
  { [key in CutPosition]?: number }?,
  { [key in CutPosition]?: number }?
];
export type CutNotifyFunction = (notifiction: CutNotification) => void;

export type CutJSON = {
  url?: string;
  width: number;
  height: number;
  cuts?: { [key: string]: number };
  offsets?: { [key: string]: number };
  rotations?: { [key: string]: number };
};

export type Translation = {
  de: string;
  en: string;
};

export type Lang = keyof Translation;
