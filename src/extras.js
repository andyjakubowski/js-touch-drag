document.documentElement.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "s":
      console.log("---");
      break;
    case "c":
      console.clear();
      break;
  }
});

function logEvent(e) {
  console.log(
    `${e.type}, target: ${e.target.id}, currentTarget: ${e.currentTarget.id}, timeStamp: ${e.timeStamp}`
  );
  // console.log(e);
}

function dirEvent(e) {
  console.dir(e);
}

function logEventType(e) {
  console.log(e.type);
}

function logMouseMove(e) {
  console.log(`mousemove, target: ${e.target}, pageX/Y: ${e.pageX}/${e.pageY}`);
}
