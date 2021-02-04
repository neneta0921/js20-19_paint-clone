const canvas = document.createElement('canvas');
canvas.id = 'canvas';
const context = canvas.getContext('2d');

let isMouseDown = false;

class Canvas {
  constructor() {
    this._init();
  }

  _init() {
    this._addEvent();
  }

  // Create Canvas
  createCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 50;
    context.fillStyle = bucketColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    body.appendChild(canvas);
    switchToBrush();
  }

  // Draw what is stored in DrawnArray
  restoreCanvas() {
    for (let i = 1; i < drawnArray.length; i++) {
      context.beginPath();
      context.moveTo(drawnArray[i - 1].x, drawnArray[i - 1].y);
      context.lineWidth = drawnArray[i].size;
      context.lineCap = 'round';
      if (drawnArray[i].eraser) {
        context.strokeStyle = bucketColor;
      } else {
        context.strokeStyle = drawnArray[i].color;
      }
      context.lineTo(drawnArray[i].x, drawnArray[i].y);
      context.stroke();
    }
  }

  // Store Drawn Lines in DrawnArray
  _storeDrawn(x, y, size, color, erase) {
    const line = {
      x,
      y,
      size,
      color,
      erase,
    };
    drawnArray.push(line);
  }

  // Get Mouse Position
  _getMousePosition(event) {
    const boundaries = canvas.getBoundingClientRect();
    return {
      x: event.clientX - boundaries.left,
      y: event.clientY - boundaries.top,
    };
  }

  _addEvent() {
    // Clear Canvas
    const clearCanvasBtn = document.getElementById('clear-canvas');
    clearCanvasBtn.addEventListener('click', () => {
      this.createCanvas();
      drawnArray = [];
      displayMessage('Canvas Cleared');
    });

    // Mouse Down
    canvas.addEventListener('mousedown', (event) => {
      isMouseDown = true;
      const currentPosition = this._getMousePosition(event);
      context.moveTo(currentPosition.x, currentPosition.y);
      context.beginPath();
      context.lineWidth = currentSize;
      context.lineCap = 'round';
      context.strokeStyle = currentColor;
    });

    // Mouse Move
    canvas.addEventListener('mousemove', (event) => {
      if (isMouseDown) {
        const currentPosition = this._getMousePosition(event);
        context.lineTo(currentPosition.x, currentPosition.y);
        context.stroke();
        this._storeDrawn(currentPosition.x, currentPosition.y, currentSize, currentColor, isEraser);
      } else {
        this._storeDrawn(undefined);
      }
    });

    // Mouse Up
    canvas.addEventListener('mouseup', () => {
      isMouseDown = false;
    });
  }
}
