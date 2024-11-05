const board = document.querySelector("#board");
const box = document.querySelector("#box");
const moveBy = 30;

(() => {
  box.style.height = moveBy + "px";
  box.style.width = moveBy + "px";
})();

const keyCodeOperations = {
  // 37 -> LEFT Arrow
  // 38 -> UP
  // 39 -> RIGHT
  // 40 -> DOWN
  37: {
    left: -moveBy,
    top: 0,
  },
  38: {
    left: 0,
    top: -moveBy,
  },
  39: {
    left: moveBy,
    top: 0,
  },
  40: {
    left: 0,
    top: moveBy,
  },
};
const validKeyCodeArr = Object.keys(keyCodeOperations);

function extractNumber(str) {
  if (str === "") {
    return 0;
  } else {
    return parseInt(str);
  }
}
window.addEventListener("keydown", (e) => {
  const charCode = e.which.toString() || e.keyCode.toString();

  if (validKeyCodeArr.includes(charCode)) {
    if (box.offsetLeft >= board.offsetWidth) {
      box.style.left = 0;
      return;
    }
    if (box.offsetLeft < 0) {
      box.style.left = board.offsetWidth - moveBy + "px";
      return;
    }
    if (box.offsetTop >= board.offsetHeight) {
      box.style.top = 0;
      return;
    }
    if (box.offsetTop < 0) {
      box.style.top = board.offsetHeight - moveBy + "px";
      return;
    }

    box.style.left =
      extractNumber(box.style.left) + keyCodeOperations[charCode].left + "px";
    box.style.top =
      extractNumber(box.style.top) + keyCodeOperations[charCode].top + "px";
  }
});
