const bigMouse = document.getElementById("bigMouseDiv");
const hoverDiv = document.getElementById("hoverDiv");

let hoverDivWidth = hoverDiv.offsetWidth;
let scale = window.innerWidth / hoverDivWidth;

bigMouse.style.height = `${19 * scale}px`;

function moveBigMouse(event) {
  let hoverDivHeight = hoverDiv.offsetHeight;
  let hoverDivWidth = hoverDiv.offsetWidth;

  let cursorXPercentage = Math.min(Math.max((event.x - (window.innerWidth / 2 - hoverDivWidth / 2)) / hoverDivWidth, 0), 1);
  let cursorYPercentage = Math.min(Math.max((event.y - (window.innerHeight / 2 - hoverDivHeight / 2)) / hoverDivHeight, 0), 1);

  bigMouse.style.top = `${cursorYPercentage * 100}%`;
  bigMouse.style.left = `${cursorXPercentage * 100}%`;

  console.log(`x:${cursorXPercentage} y:${cursorYPercentage}`);
  console.log(window.innerHeight);
  console.log(window.innerHeight * cursorYPercentage);
}

function scaleBigMouse() {
  hoverDivWidth = hoverDiv.offsetWidth;
  scale = window.innerWidth / hoverDivWidth;

  bigMouse.style.height = `${19 * scale}px`;
}

window.addEventListener("mousemove", moveBigMouse);
window.addEventListener("resize", scaleBigMouse);
