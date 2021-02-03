const brushColorBtn = document.getElementById('brush-color');
const brushIcon = document.getElementById('brush');
const brushSlider = document.getElementById('brush-slider');
const eraser = document.getElementById('eraser');

// Formatting Brush Size
function displayBrushSize() {
  const brushSize = document.getElementById('brush-size');

  if (brushSlider.value < 10) {
    brushSize.textContent = `0${brushSlider.value}`;
  } else {
    brushSize.textContent = brushSlider.value;
  }
}

// Setting Brush Size
brushSlider.addEventListener('change', () => {
  currentSize = brushSlider.value;
  displayBrushSize();
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

// Switch back to Brush
function switchToBrush() {
  isEaser = false;
  activeToolEl.textContent = 'Brush';
  brushIcon.style.color = 'black';
  eraser.style.color = 'white';
  currentColor = `#${brushColorBtn.value}`;
  currentSize = 10;
  brushSlider.value = currentSize;
  displayBrushSize();
}

// Event Listener
brushIcon.addEventListener('click', switchToBrush);
