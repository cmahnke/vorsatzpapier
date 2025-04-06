export class RotatingInput extends HTMLElement {
  private degree: number = 0;
  private shadow: ShadowRoot;
  private step: number = 1;
  private displayDegrees: boolean = true;
  private radius: number = 75;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
    this.setupEventListeners();
  }

  static get observedAttributes() {
    return ["step", "display-degrees", "radius", "value"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "step") {
      this.step = parseInt(newValue, 10) || 1;
    } else if (name === "display-degrees") {
      this.displayDegrees = newValue !== "false";
    } else if (name === "radius") {
      this.radius = parseInt(newValue, 10) || 75;
      this.updateRadius();
    } else if (name === "value") {
      this.degree = parseInt(newValue, 10) || 0;
      this.updateHandlePosition();
    }
    this.updateDisplay();
  }

  render(): void {
    this.shadow.innerHTML = `
      <style>
        .rotating-input-container {
          position: relative;
          width: ${2 * this.radius}px;
          height: ${2 * this.radius}px;
          margin: 20px auto;
        }

        .circle {
          width: ${2 * this.radius}px;
          height: ${2 * this.radius}px;
          border-radius: 50%;
          border: 2px solid #ccc;
          position: relative;
        }

        .handle {
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: #007bff;
          border-radius: 50%;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: grab;
        }

        .degree-display {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 16px;
        }
      </style>
      <div class="rotating-input-container">
        <div class="circle">
          <div class="handle"></div>
        </div>
        <div class="degree-display">0°</div>
      </div>
    `;
    this.updateDisplay();
    this.updateHandlePosition();
  }

  updateRadius(): void {
    const container = this.shadow.querySelector(".rotating-input-container") as HTMLElement;
    const circle = this.shadow.querySelector(".circle") as HTMLElement;
    container.style.width = `${2 * this.radius}px`;
    container.style.height = `${2 * this.radius}px`;
    circle.style.width = `${2 * this.radius}px`;
    circle.style.height = `${2 * this.radius}px`;
    this.updateHandlePosition();
  }

  setupEventListeners(): void {
    const handle = this.shadow.querySelector(".handle") as HTMLElement;
    let isDragging = false;
    let startX: number;
    let startY: number;

    handle.addEventListener("mousedown", (e: MouseEvent) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      e.preventDefault();
    });

    document.addEventListener("mousemove", (e: MouseEvent) => {
      if (!isDragging) return;
      const rect = (this.shadow.querySelector(".circle") as HTMLElement).getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      let newDegree = Math.atan2(deltaX, -deltaY) * (180 / Math.PI);
      if (newDegree < 0) {
        newDegree += 360;
      }

      this.degree = Math.round(newDegree / this.step) * this.step;
      this.updateHandlePosition();
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
    });
  }

  updateHandlePosition(): void {
    const handle = this.shadow.querySelector(".handle") as HTMLElement;
    const x = this.radius * Math.sin(this.degree * (Math.PI / 180));
    const y = -this.radius * Math.cos(this.degree * (Math.PI / 180));
    handle.style.left = `${this.radius + x}px`;
    handle.style.top = `${this.radius + y}px`;
    this.updateDisplay();
    this.dispatchEvent(new CustomEvent("degreeChange", { detail: { degree: this.degree } }));
  }

  updateDisplay(): void {
    const displayElement = this.shadow.querySelector(".degree-display") as HTMLElement;
    if (this.displayDegrees) {
      displayElement.textContent = `${Math.round(this.degree)}°`;
      displayElement.style.display = "block";
    } else {
      displayElement.style.display = "none";
    }
  }

  get value(): number {
    return this.degree;
  }
  set value(val: number) {
    this.degree = val;
    this.updateHandlePosition();
  }
}
