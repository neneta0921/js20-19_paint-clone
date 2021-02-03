const brushColorBtn = document.getElementById('brush-color');
const brushIcon = document.getElementById('brush');
const brushSlider = document.getElementById('brush-slider');

class HandleBrush {
  constructor() {
    this._init();
  }

  _init() {
    this._addEvent();
  }

  // Formatting Brush Size
  displayBrushSize() {
    const brushSize = document.getElementById('brush-size');

    if (brushSlider.value < 10) {
      brushSize.textContent = `0${brushSlider.value}`;
    } else {
      brushSize.textContent = brushSlider.value;
    }
  }

  // Switch back to Brush
  switchToBrush() {
    isEaser = false;
    activeToolEl.textContent = 'Brush';
    brushIcon.style.color = 'black';
    eraser.style.color = 'white';
    currentColor = `#${brushColorBtn.value}`;
    currentSize = 10;
    brushSlider.value = currentSize;
    displayBrushSize();
  }

  _addEvent() {
    // Setting Brush Size
    brushSlider.addEventListener('change', () => {
      currentSize = brushSlider.value;
      this.displayBrushSize();
    });

    // Setting Brush Color
    brushColorBtn.addEventListener('change', () => {
      isEraser = false;
      currentColor = `#${brushColorBtn.value}`;
    });

    // Setting Background Color
    const bucketColorBtn = document.getElementById('bucket-color');
    bucketColorBtn.addEventListener('change', () => {
      bucketColor = `#${bucketColorBtn.value}`;
      createCanvas();
      restoreCanvas();
    });

    // Event Listener
    brushIcon.addEventListener('click', () => this.switchToBrush());
  }
}
