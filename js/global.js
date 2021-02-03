const activeToolEl = document.getElementById('active-tool');
const { body } = document;

// Global Variables
let currentSize = 10;
let bucketColor = '#FFFFFF';
let currentColor = '#A51DAB';
let isEraser = false;
let isMouseDown = false;
let drawnArray = [];

// SetTimeout switchToBrush function
function brushTimeSetTimeout(ms) {
  setTimeout(switchToBrush, ms);
}
