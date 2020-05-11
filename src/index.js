const square = document.getElementById("square");
const body = document.body;
const delay = 500;
let timeoutId;
let isDragging = false;
let draggedElement = null;
let offset = { x: 0, y: 0 };

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function startDrag({ x, y }) {
  console.log("startDrag");
  isDragging = true;
  draggedElement.classList.toggle("dragging", true);
}

function stopDrag() {
  draggedElement.classList.toggle("dragging", false);
  draggedElement = null;
  isDragging = false;
}

function handlePointerDown(e) {
  draggedElement = e.currentTarget;
  offset = { x: e.offsetX, y: e.offsetY };
  logEvent(e);
  timeoutId = setTimeout(startDrag.bind(null, offset), delay);
}

function handlePointerUp(e) {
  logEvent(e);
  clearTimeout(timeoutId);

  if (isDragging) {
    stopDrag();
  }
}

function handlePointerCancel(e) {
  logEvent(e);
  clearTimeout(timeoutId);

  if (isDragging) {
    stopDrag();
  }
}

function handlePointerMove(e) {
  if (!isDragging) {
    return;
  }

  const el = draggedElement;
  const elRect = el.getBoundingClientRect();
  const containerRect = document.body.getBoundingClientRect();
  const x = e.pageX - containerRect.x - offset.x;
  const y = e.pageY - containerRect.y - offset.y;
  // const x = clamp(preferredX, 0, containerRect.width - elRect.width);
  // const y = clamp(preferredY, 0, containerRect.height - elRect.height);

  el.style.setProperty("left", `${x}px`);
  el.style.setProperty("top", `${y}px`);
}

square.addEventListener("pointerdown", handlePointerDown);
body.addEventListener("pointerup", handlePointerUp);
body.addEventListener("pointercancel", handlePointerCancel);
body.addEventListener("pointermove", handlePointerMove);
