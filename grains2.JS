const gradient = document.getElementById("gradientContainer");
// const gradient2 = document.getElementById("overlayContainer");

function moveGradient(event) {
  let cursorXPercentage = (event.x / window.innerWidth) * 100;
  let cursorYPercentage = (event.y / window.innerHeight) * 100;

  gradient.style.background = "radial-gradient(circle 400px at " + cursorXPercentage + "% " + cursorYPercentage + "%, #0000007a, #000000b9), url(./images/noise.svg)";
}

window.addEventListener("mousemove", moveGradient);
