const box = document.getElementById("physBody");

console.log("working");

let boxCurrentY = 0;
let boxPreviousY = 0;
let boxCurrentX = 0;
let boxPreviousX = 0;

let boxIsFree = true;

console.log(boxCurrentX);

function grabBox() {
  boxIsFree = false;
  console.log(boxIsFree);
}

function freeBox() {
  boxIsFree = true;
  console.log(boxIsFree);
}

function drag(event) {
  if (event.buttons === 1) {
    box.style.top = `${event.y - 50}px`;
    box.style.left = `${event.x - 50}px`;
  }
}

function momentum() {
  const boxNextY = boxCurrentY + (boxCurrentY - boxPreviousY);
  const boxNextX = boxCurrentX + (boxCurrentX - boxPreviousX);
}

document.addEventListener("mousedown", grabBox);
document.addEventListener("mouseup", freeBox);
document.addEventListener("mousemove", drag);
