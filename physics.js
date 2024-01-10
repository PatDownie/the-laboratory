const box = document.getElementById("physBody");
const bonkSound = document.getElementById("bonkSound");

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
    console.log(`boxcurrentY = ${boxCurrentY}   boxcurrentX = ${boxCurrentX}`);
  }
}

let boxNextY = 0;
let boxNextX = 0;

const collisionDampening = 1;
const gravity = 1.3;

function momentum() {
  if (boxIsFree === true) {
    if (boxCurrentY <= 0 || boxCurrentY >= window.innerHeight - 100) {
      boxNextY = boxCurrentY - (boxCurrentY - boxPreviousY);
      bonkSound.cloneNode().play();
    } else {
      boxNextY = boxCurrentY + (boxCurrentY - boxPreviousY) + gravity;
    }
    if (boxCurrentX <= 0 || boxCurrentX >= window.innerWidth - 100) {
      boxNextX = boxCurrentX - (boxCurrentX - boxPreviousX);
      bonkSound.cloneNode().play();
    } else {
      boxNextX = boxCurrentX + (boxCurrentX - boxPreviousX);
    }
    box.style.top = `${boxNextY}px`;
    box.style.left = `${boxNextX}px`;
    boxPreviousY = boxCurrentY;
    boxPreviousX = boxCurrentX;
    boxCurrentY = boxNextY;
    boxCurrentX = boxNextX;
    // console.log(`boxPreviousY = ${boxPreviousY} boxcurrentY = ${boxCurrentY} boxNextY = ${boxNextY}`);
  } else {
    boxPreviousY = boxCurrentY;
    boxPreviousX = boxCurrentX;
    boxCurrentY = box.offsetTop;
    boxCurrentX = box.offsetLeft;
  }
}

document.addEventListener("mousedown", grabBox);
document.addEventListener("mouseup", freeBox);
document.addEventListener("mousemove", drag);

interval = setInterval(momentum, 1);
