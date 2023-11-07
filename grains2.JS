const gradient = document.getElementById("gradientContainer");
// const gradient2 = document.getElementById("overlayContainer");

function moveGradient(event) {
  let cursorXPercentage = (event.x / window.innerWidth) * 100;
  let cursorYPercentage = (event.y / window.innerHeight) * 100;

  // console.log(`x: ${event.x} y: ${event.y} screen size: ${window.innerWidth} x ${window.innerHeight} cursorXPercentage: ${cursorXPercentage} cursorYPercentage: ${cursorYPercentage}`);

  gradient.style.background = "radial-gradient(circle 400px at " + cursorXPercentage + "% " + cursorYPercentage + "%, #00000000, #000000), url(./images/noise.svg)";
  // gradient2.style.background = "radial-gradient(circle 400px at " + cursorXPercentage + "% " + cursorYPercentage + "%, #00000000, #ac3931), url(./images/noise.svg);";
}

window.addEventListener("mousemove", moveGradient);
