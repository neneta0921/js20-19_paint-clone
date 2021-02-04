class HandleImage {
  constructor() {
    this._init();
  }

  _init() {
    this._addEvent();
  }

  displayMessage(message) {
    // Active Tool
    activeToolEl.textContent = message;
    brushTimeSetTimeout(BRUSH_TIME);
  }

  _addEvent() {
    // Buttons
    const saveStorageBtn = document.getElementById('save-storage');
    const loadStorageBtn = document.getElementById('load-storage');
    const clearStorageBtn = document.getElementById('clear-storage');
    const downloadBtn = document.getElementById('download');

    // Save to Local Storage
    saveStorageBtn.addEventListener('click', () => {
      localStorage.setItem('savedCanvas', JSON.stringify(drawnArray));
      this.displayMessage('Canvas Saved');
    });

    // Load from Local Storage
    loadStorageBtn.addEventListener('click', () => {
      if (localStorage.getItem('savedCanvas')) {
        drawnArray = JSON.parse(localStorage.savedCanvas);
        restoreCanvas();
        this.displayMessage('Canvas Loaded');
      } else {
        this.displayMessage('No Canvas Found');
      }
    });

    // Clear Local Storage
    clearStorageBtn.addEventListener('click', () => {
      localStorage.removeItem('savedCanvas');
      this.displayMessage('Local Storage Cleared');
    });

    // Download Image
    downloadBtn.addEventListener('click', () => {
      downloadBtn.href = canvas.toDataURL('image/jpg', 1.0);
      downloadBtn.download = 'paint-example.jpg';
      this.displayMessage('Image File Saved');
    });
  }
}
