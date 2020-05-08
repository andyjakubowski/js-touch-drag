// const container = document.getElementById("container");
// const containerRect = container.getBoundingClientRect();
const square = document.getElementById("square");
// const squareRect = square.getBoundingClientRect();

function handleMouseDown(e) {
  logEventType(e);
}

function handleMouseUp(e) {
  logEventType(e);
}

function handleMouseMove(e) {
  logMouseMove(e);
  e.preventDefault();
}

function handleTouchStart(e) {
  logEvent(e);

  e.preventDefault();
}

square.addEventListener("touchstart", handleTouchStart);

// square.addEventListener("mousedown", handleMouseDown);
// document.body.addEventListener("mouseup", handleMouseUp);
// document.body.addEventListener("mousemove", handleMouseMove);
