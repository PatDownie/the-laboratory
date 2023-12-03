const R = document.getElementById("R");
const G = document.getElementById("G");
const B = document.getElementById("B");
// const gradient2 = document.getElementById("overlayContainer");

function moveGradient(event) {
  let cursorXCoord = Math.abs(window.innerWidth / 2 - event.x);
  let cursorYCoord = Math.abs(window.innerHeight / 2 - event.y);
  let cursorAbsoluteCenterDistance = Math.sqrt(Math.pow(cursorXCoord, 2) + Math.pow(cursorYCoord, 2)); // This is the absolute distance the cursor is from the centre of the screen in pixels

  let cursorCenterPercent = cursorAbsoluteCenterDistance / Math.sqrt(Math.pow(window.innerWidth / 2, 2) + Math.pow(window.innerHeight / 2, 2)); // This is the cursors distance to the centre of the screen where 0 is the center and 1 is the maximum possible distance away

  console.log(`${cursorCenterPercent}`);

  R.style.transform = `translate(${20 * cursorCenterPercent}px, ${15 * cursorCenterPercent}px)`;
  R.style.filter = `blur(${5 * cursorCenterPercent}px)`;

  G.style.transform = `translate(-${15 * cursorCenterPercent}px, ${15 * cursorCenterPercent}px)`;
  G.style.filter = `blur(${5 * cursorCenterPercent}px)`;

  B.style.transform = `translate(${17 * cursorCenterPercent}px, -${20 * cursorCenterPercent}px)`;
  B.style.filter = `blur(${5 * cursorCenterPercent}px)`;
}

window.addEventListener("mousemove", moveGradient);
