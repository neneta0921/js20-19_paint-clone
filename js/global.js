const activeToolEl = document.getElementById('active-tool');
const { body } = document;
const BRUSH_TIME = 1500;

// Global Variables
let currentSize = 10;
let bucketColor = '#FFFFFF';
let currentColor = '#A51DAB';
let isEraser = false;
let drawnArray = [];
