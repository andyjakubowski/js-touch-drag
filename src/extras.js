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
}

function logEventType(e) {
  console.log(e.type);
}
