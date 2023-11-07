const gradient = document.getElementById("gradientContainer");
const gradient2 = document.getElementById("gradientContainer2");

let sizeVar = "200px";

console.log(gradient);

function moveGradient(event) {
  let cursorXPercentage = (event.x / window.innerWidth) * 100;
  let cursorYPercentage = (event.y / window.innerHeight) * 100;

  console.log(`x: ${event.x} y: ${event.y} screen size: ${window.innerWidth} x ${window.innerHeight} cursorXPercentage: ${cursorXPercentage} cursorYPercentage: ${cursorYPercentage}`);

  gradient.style.background = "radial-gradient(circle 220px at " + cursorXPercentage + "% " + cursorYPercentage + "%, #ac3931, #000000)";

  gradient2.style.background = "radial-gradient(circle 140px at " + cursorXPercentage + "% " + cursorYPercentage + "%, #ac3931, #00000000)";
}

window.addEventListener("mousemove", moveGradient);
