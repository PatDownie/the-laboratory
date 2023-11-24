const gradient = document.getElementById("grainContainer");

let currentXPosition = 0.5;
let currentYPosition = 0.5;

let cursorX = 0;
let cursorY = 0;

function checkCursor(event) {
  cursorX = event.x;
  cursorY = event.y;
}

function moveGradient() {
  let cursorXPercentage = Math.min(Math.max((cursorX - (window.innerWidth / 2 - 150)) / 300, 0), 1);
  let cursorYPercentage = Math.min(Math.max((cursorY - (window.innerHeight / 2 - 150)) / 300, 0), 1);

  let newXposition = currentXPosition + (cursorXPercentage - currentXPosition) / 35;
  let newYposition = currentYPosition + (cursorYPercentage - currentYPosition) / 35;

  let gradientXpos = window.innerWidth / 2 - 30 * ((newXposition - 0.5) * 2);
  let gradientYpos = window.innerHeight / 2 - 30 * ((newYposition - 0.5) * 2);

  gradient.style.background = `radial-gradient(circle 300px at ${gradientXpos}px ${gradientYpos}px, #00000000, #000000), url(./images/noise.svg)`;

  currentXPosition = newXposition;
  currentYPosition = newYposition;
}

window.addEventListener("mousemove", checkCursor);

interval = setInterval(moveGradient, 1);
