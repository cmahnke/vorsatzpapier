export class OffscreenCanvasDownload extends HTMLElement {
  private _canvas: OffscreenCanvas | null = null;
  private _button: HTMLButtonElement;
  private _disabled: boolean = true;
  private _fileName: string = "canvas-image";
  private _format: string = "png";
  private _internallySettingFormat: boolean = false;
  private _height: number | null = null;
  private _width: number | null = null;
  private _renderCallback: ((height: number, width: number) => OffscreenCanvas | null) | null = null;
  private shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    this._button = document.createElement("button");
    this._button.className = "download-button";
    this._button.textContent = "Download";
    this._button.addEventListener("click", this._initiateDownload.bind(this));

    this.shadow.appendChild(this._button);
    this._applyStyles();
    this._updateButtonState();
  }

  connectedCallback() {}

  static get observedAttributes(): string[] {
    return ["disabled", "button-text", "file-name", "format", "height", "width"];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (this._internallySettingFormat && name === "format") {
      return;
    }
    if (name === "disabled") {
      this._disabled = newValue !== null;
      this._updateButtonState();
    } else if (name === "button-text") {
      this.buttonText = newValue || "Download";
    } else if (name === "file-name") {
      this.fileName = newValue || "canvas-image";
    } else if (name === "format") {
      this.format = newValue || "png";
    } else if (name === "height") {
      this._height = newValue ? parseInt(newValue, 10) : null;
      this._updateButtonState();
    } else if (name === "width") {
      this._width = newValue ? parseInt(newValue, 10) : null;
      this._updateButtonState();
    }
  }

  get canvas(): OffscreenCanvas | null {
    return this._canvas;
  }

  set canvas(canvas: OffscreenCanvas | null) {
    this._canvas = canvas;
    this._updateButtonState();
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
    //this.setAttribute("disabled", value ? "" : "false");
    this._updateButtonState();
  }

  get buttonText(): string {
    if (this._button && this._button.textContent !== null) {
      return this._button.textContent;
    }
    return "";
  }

  set buttonText(value: string) {
    this._button.textContent = value;
  }

  get fileName(): string {
    return this._fileName;
  }

  set fileName(value: string) {
    this._fileName = value;
    //this.setAttribute("file-name", value);
  }

  get format(): string {
    return this._format;
  }

  set format(value: string) {
    this._internallySettingFormat = true;
    this._format = value.toLowerCase();
    if (this._format !== "png" && this._format !== "jpeg") {
      this._format = "png";
      console.warn("Invalid format.  Defaulting to PNG.");
    }
    this.setAttribute("format", this._format);
    this._internallySettingFormat = false;
  }

  get height(): number | null {
    return this._height;
  }

  set height(value: number | null) {
    this._height = value;
    if (value !== null) {
      this.setAttribute("height", String(value));
    } else {
      this.removeAttribute("height");
    }
    this._updateButtonState();
  }

  get width(): number | null {
    return this._width;
  }

  set width(value: number | null) {
    this._width = value;
    if (value !== null) {
      this.setAttribute("width", String(value));
    } else {
      this.removeAttribute("width");
    }
    this._updateButtonState();
  }

  set renderCallback(callback: ((height: number, width: number) => OffscreenCanvas | null) | null) {
    this._renderCallback = callback;
    this._updateButtonState();
  }

  private _updateButtonState() {
    this._button.disabled = this._disabled || (!this._canvas && !this._renderCallback) || !this.checkCallback();
  }

  private checkCallback(): boolean {
    if (this._renderCallback === null) {
      return false;
    }
    if (this._renderCallback !== null && (this._height === null || this._width === null)) {
      return false;
    }
    return true;
  }

  private _initiateDownload() {
    if (this._disabled) return;

    this.dispatchEvent(new CustomEvent("download-start"));

    let canvasToDownload = this._canvas;
    if (!canvasToDownload && this._renderCallback && this._height !== null && this._width !== null) {
      canvasToDownload = this._renderCallback(this._height, this._width);
      if (!canvasToDownload) {
        this.dispatchEvent(new CustomEvent("download-error", { detail: "Render callback failed to return a canvas." }));
        console.error("Error downloading: Render callback failed to return a canvas.");
        this.dispatchEvent(new CustomEvent("download-end"));
        return;
      }
    }

    if (!canvasToDownload) {
      console.error("Error downloading: No canvas available.");
      this.dispatchEvent(new CustomEvent("download-error", { detail: "No canvas available." }));
      this.dispatchEvent(new CustomEvent("download-end"));
      return;
    }

    this._download(canvasToDownload, this._format, this._fileName);
  }

  private async _download(canvas: OffscreenCanvas, format: string, fileName: string) {
    try {
      const blob = await this._getBlob(canvas, format);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${fileName}.${format}`;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      this.dispatchEvent(new CustomEvent("download-end"));
    } catch (error) {
      this.dispatchEvent(new CustomEvent("download-error", { detail: error }));
      console.error("Error downloading:", error);
    }
  }

  private _getBlob(canvas: OffscreenCanvas, format: string): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const type = format === "jpeg" ? "image/jpeg" : "image/png";
      canvas.convertToBlob({ type }).then(resolve).catch(reject);
    });
  }

  _applyStyles() {
    const style = document.createElement("style");
    style.textContent = `
        :host {
          display: inline-block;
        }
        .download-button {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
          color: white;
          background-color: #4CAF50;
          white-space: nowrap;
        }

        .download-button:hover {
          background-color: #0056b3;
        }

        .download-button:disabled {
          background-color: #cccccc;
          color: #666666;
          cursor: not-allowed;
        }

      `;
    this.shadow.appendChild(style);
  }
}
