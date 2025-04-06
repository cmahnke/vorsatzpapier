import { Line, Rect } from "fabric";
import { FabricOverlay } from "openseadragon-fabric";

import type { CutNotifyFunction, CutNotification, CutJSON } from "./types";
import { CutPosition, CutPositionUtil } from "./types";

export class Cuts {
  overlay: FabricOverlay;
  width: number;
  height: number;
  shapes: { [key in CutPosition]?: [Line, Rect] };
  positions: { [key in CutPosition]?: number | undefined };
  offsets: { [key in CutPosition]?: number } = {};
  rotations: { [key in CutPosition]?: number } = {};
  changeCallback: CutNotifyFunction[];
  _url: URL | undefined;
  _show: boolean = true;

  constructor(positions: CutPosition[], overlay: FabricOverlay, url?: URL) {
    this.positions = {};
    this.shapes = {};
    this.overlay = overlay;
    if (url !== undefined) {
      this.url = url;
    }

    positions.forEach((position) => {
      const cover = this.createCover();
      const line = this.createLine();
      this.shapes[position] = [line, cover];
      this.positions[position] = undefined;
    });
  }

  set url(url: URL) {
    this._url = url;
  }

  get url(): string {
    if (this._url !== undefined) {
      return this._url.toString();
    }
    return "";
  }

  createLine(width: number = 5): Line {
    const line = new Line([0, 0, 0, 0], {
      strokeWidth: width,
      stroke: "red",
      hasControls: false
    });
    this.overlay.fabricCanvas().add(line);
    return line;
  }

  createCover(opacity: number = 0.4, fill: string = "white"): Rect {
    const rect = new Rect({
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      strokeWidth: 0,
      hasControls: false,
      opacity: opacity,
      fill: fill
    });
    this.overlay.fabricCanvas().add(rect);
    return rect;
  }

  allPositions(): { [key in CutPosition]?: number } {
    const allPositions = Object.values(CutPosition)
      .filter((value) => typeof value === "number")
      .map((value) => value as number);
    const all: { [key in CutPosition]?: number } = {}; //= this.positions;
    allPositions.forEach((position) => {
      if (!(position in this.positions) || this.positions[position as CutPosition] === undefined) {
        if (position == CutPosition.Top) {
          all[position] = 0;
        } else if (position == CutPosition.Bottom) {
          if (this.height !== undefined) {
            all[position] = this.height;
          } else {
            all[position] = 0;
          }
        } else if (position == CutPosition.Right) {
          if (this.width !== undefined) {
            all[position] = this.width;
          } else {
            all[position] = 0;
          }
        } else if (position == CutPosition.Left) {
          all[position] = 0;
        }
      } else {
        all[position as CutPosition] = this.positions[position as CutPosition];
      }
    });
    return all;
  }

  getLine(position: CutPosition): Line | undefined {
    if (position in this.positions && this.shapes[position] !== undefined) {
      return this.shapes[position][0];
    }
  }

  getCover(position: CutPosition): Rect | undefined {
    if (position in this.positions && this.shapes[position] !== undefined) {
      return this.shapes[position][1];
    }
  }

  setLineWidth(position: CutPosition, width: number) {
    if (position in this.positions && this.shapes[position] !== undefined) {
      this.shapes[position][0].set({
        strokeWidth: width
      });
      this.shapes[position][0].setCoords();
      this.shapes[position][0].canvas?.renderAll();
    }
  }

  setVisibility(show?: boolean) {
    if (show === undefined) {
      show = !this._show;
    }
    if (this.shapes !== undefined) {
      const validPositions = Object.keys(this.shapes) as unknown as CutPosition[];
      validPositions.forEach((position: CutPosition) => {
        if (this.shapes[position] !== undefined) {
          for (let i = 0; i < this.shapes[position].length; i++) {
            this.shapes[position][i].visible = show;
            this.shapes[position][i].canvas?.renderAll();
          }
        }
      });
    }
    this._show = show;
  }

  setSize(width: number, height: number): void {
    this.width = width;
    this.height = height;

    const validPositions = Object.keys(this.positions) as unknown as CutPosition[];
    validPositions.forEach((position: CutPosition) => {
      if (this.shapes[position] === undefined) {
        return;
      }

      const line = this.shapes[position][0];
      const cover = this.shapes[position][1];

      if (position == CutPosition.Top) {
        line.set({
          x1: 0,
          y1: 0,
          x2: width,
          y2: 0
        });
        cover.set({
          left: 0,
          top: 0,
          width: width,
          height: 0
        });
      } else if (position == CutPosition.Bottom) {
        line.set({
          x1: 0,
          y1: height,
          x2: width,
          y2: height
        });
        cover.set({
          left: 0,
          top: height,
          width: width,
          height: height
        });
      } else if (position == CutPosition.Right) {
        line.set({
          x1: width,
          y1: 0,
          x2: width,
          y2: height
        });
        cover.set({
          left: width,
          top: 0,
          width: width,
          height: height
        });
      } else if (position == CutPosition.Left) {
        line.set({
          x1: 0,
          y1: 0,
          x2: 0,
          y2: height
        });
        cover.set({
          left: 0,
          top: 0,
          width: 0,
          height: height
        });
      } else {
        throw new Error("Not a valid position");
      }
      line.setCoords();
      cover.setCoords();
      line.canvas?.renderAll();
    });
  }

  set offsetX(offset: number) {
    if (offset < 0) {
      this.offsets[CutPosition.Left] = offset;
      if (CutPosition.Right in this.offsets) {
        delete this.offsets[CutPosition.Right];
      }
    } else if (offset > 0) {
      this.offsets[CutPosition.Right] = offset;
      if (CutPosition.Left in this.offsets) {
        delete this.offsets[CutPosition.Left];
      }
    }
    if (offset != 0) {
      this.notify();
    }
  }

  set offsetY(offset: number) {
    if (offset < 0) {
      this.offsets[CutPosition.Top] = offset;
      if (CutPosition.Bottom in this.offsets) {
        delete this.offsets[CutPosition.Bottom];
      }
    } else if (offset > 0) {
      this.offsets[CutPosition.Bottom] = offset;
      if (CutPosition.Top in this.offsets) {
        delete this.offsets[CutPosition.Top];
      }
    }
    if (offset != 0) {
      this.notify();
    }
  }

  set rotateX(deg: number) {
    this.rotations[CutPosition.Right] = deg;
  }

  set rotateY(deg: number) {
    this.rotations[CutPosition.Bottom] = deg;
  }

  update(position: CutPosition, pos: number): void {
    if (this.shapes[position] === undefined) {
      return;
    }
    if (this.positions[position] == pos) {
      return;
    }
    this.positions[position] = pos;

    const line = this.shapes[position][0];
    const cover = this.shapes[position][1];

    if (position == CutPosition.Bottom || position == CutPosition.Top) {
      line.set({
        x1: 0,
        y1: pos,
        x2: this.width,
        y2: pos
      });
      if (position == CutPosition.Bottom) {
        cover.set({
          left: 0,
          top: pos,
          width: this.width,
          height: this.height - pos
        });
      } else {
        cover.set({
          left: 0,
          top: 0,
          width: this.width,
          height: pos
        });
      }
    } else if (position == CutPosition.Right || position == CutPosition.Left) {
      line.set({
        x1: pos,
        y1: 0,
        x2: pos,
        y2: this.height
      });
      if (position == CutPosition.Right) {
        cover.set({
          left: pos,
          top: 0,
          width: this.width - pos,
          height: this.height
        });
      } else {
        cover.set({
          left: 0,
          top: 0,
          width: pos,
          height: this.height
        });
      }
    } else {
      //TODO: Finish top and left
      throw new Error("Not all postions aren't implemented yet");
    }

    line.setCoords();
    cover.setCoords();
    line.canvas?.renderAll();
    this.notify();
  }

  set callback(func: CutNotifyFunction) {
    this.changeCallback = [];
    this.changeCallback.push(func);
  }

  addCallback(func: CutNotifyFunction): void {
    if (this.changeCallback !== undefined) {
      this.changeCallback = [];
    }
    this.changeCallback.push(func);
  }

  notify(): void {
    if (this.changeCallback !== undefined) {
      this.changeCallback.forEach((fn) => {
        const notification: CutNotification = [{}];
        notification[0] = this.allPositions();

        if (this.offsets !== undefined) {
          notification[1] = this.offsets;
        }
        if (this.rotations !== undefined) {
          notification[2] = this.rotations;
        }
        fn(notification);
      });
    }
  }

  toJSON(): CutJSON {
    function expandPositions(cutPostions: { [key in CutPosition]?: number }): { [key: string]: number } {
      const positions: { [key: string]: number } = {};
      const validPositions = Object.keys(cutPostions) as unknown as CutPosition[];
      validPositions.forEach((key: CutPosition) => {
        if (cutPostions[key] !== undefined) {
          positions[CutPositionUtil.toString(key)] = cutPostions[key];
        }
      });
      return positions;
    }

    const json: CutJSON = {
      url: this.url,
      width: this.width,
      height: this.height
    };
    const cuts = expandPositions(this.positions);
    if (this.positions !== undefined && Object.keys(cuts).length) {
      json["cuts"] = cuts;
    }
    const offsets = expandPositions(this.offsets);
    if (this.offsets !== undefined && Object.keys(offsets).length) {
      json["offsets"] = offsets;
    }
    const rotations = expandPositions(this.rotations);
    if (this.rotations !== undefined && Object.keys(rotations).length) {
      json["rotations"] = rotations;
    }
    return json;
  }
}
