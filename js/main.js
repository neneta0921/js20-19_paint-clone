const handleImage = new HandleImage();
const displayMessage = (message) => handleImage.displayMessage(message);

const handleBrush = new HandleBrush();
const displayBrushSize = () => handleBrush.displayBrushSize();
const switchToBrash = () => handleBrush.switchToBrush();

// SetTimeout switchToBrush function
function brushTimeSetTimeout(ms) {
  setTimeout(switchToBrush, ms);
}

new Eraser();

// On Load
createCanvas();
