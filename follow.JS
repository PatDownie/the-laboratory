const follower = document.getElementById("follower");

let currentXPosition = 0;
let currentYPosition = 0;

let cursorX = 0;
let cursorY = 0;

function checkCursor(event) {
  cursorX = event.x;
  cursorY = event.y;
}

function follow() {
  let cursorXPercentage = (cursorX / window.innerWidth) * 100;
  let cursorYPercentage = (cursorY / window.innerHeight) * 100;

  let newXposition = currentXPosition + (cursorXPercentage - currentXPosition) / 20;
  let newYposition = currentYPosition + (cursorYPercentage - currentYPosition) / 20;

  follower.style.top = `${newYposition}%`;
  follower.style.left = `${newXposition}%`;

  currentXPosition = newXposition;
  currentYPosition = newYposition;
}

window.addEventListener("mousemove", checkCursor);

interval = setInterval(follow, 1);
