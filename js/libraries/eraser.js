const eraser = document.getElementById('eraser');

class Eraser {
  constructor() {
    this._init();
  }

  _init() {
    this._addEvent();
  }

  _addEvent() {
    // Eraser
    eraser.addEventListener('click', () => {
      isEraser = true;
      activeToolEl.textContent = 'Eraser';
      brushIcon.style.color = 'white';
      eraser.style.color = 'black';
      currentColor = bucketColor;
      currentSize = 50;
      brushSlider.value = currentSize;
      displayBrushSize();
    });
  }
}
