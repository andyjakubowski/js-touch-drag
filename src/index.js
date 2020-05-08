const root = document.documentElement;
const container = document.getElementById("container");
const containerRect = container.getBoundingClientRect();
const square = document.getElementById("square");
const squareRect = square.getBoundingClientRect();
const timeout = 0;
let timeoutId;

function handleMouseDown(e) {
  logEventType(e);
}

function handleMouseUp(e) {
  logEventType(e);
}

square.addEventListener("mousedown", handleMouseDown);
document.body.addEventListener("mouseup", handleMouseUp);
