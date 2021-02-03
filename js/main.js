const canvasInstance = new Canvas();
const createCanvas = () => canvasInstance.createCanvas();
const restoreCanvas = () => canvasInstance.restoreCanvas();

const handleImage = new HandleImage();
const displayMessage = (message) => handleImage.displayMessage(message);

const handleBrush = new HandleBrush();
const displayBrushSize = () => handleBrush.displayBrushSize();
const switchToBrush = () => handleBrush.switchToBrush();

// SetTimeout switchToBrush function
function brushTimeSetTimeout(ms) {
  setTimeout(switchToBrush, ms);
}

new Eraser();

// On Load
createCanvas();
