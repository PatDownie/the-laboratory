const eye = document.getElementById("eye");
const pupil = document.getElementById("pupil");

function movePupil(event) {
  cursorXPosition = event.x;
  cursorYPosition = event.y;
  eyeRectangle = eye.getBoundingClientRect();
  eyeXPos = eyeRectangle.left + eyeRectangle.width / 2;
  eyeYPos = eyeRectangle.top + eyeRectangle.height / 2;
  cursorXdistance = cursorXPosition - eyeXPos;
  cursorYdistance = cursorYPosition - eyeYPos;
  cursorTotalDistance = Math.sqrt(cursorXdistance ** 2 + cursorYdistance ** 2);

  if (cursorTotalDistance < 55) {
    pupil.style.transform = `rotate(-45deg) translate(${cursorXdistance}px, ${cursorYdistance}px)`;
  } else if (cursorXdistance > 0) {
    pupilXoffset = 55 * Math.cos(Math.atan(cursorYdistance / cursorXdistance));
    pupilYoffset = 55 * Math.sin(Math.atan(cursorYdistance / cursorXdistance));

    pupil.style.transform = `rotate(-45deg) translate(${pupilXoffset}px, ${pupilYoffset}px)`;
  } else {
    pupilXoffset = -55 * Math.cos(Math.atan(cursorYdistance / cursorXdistance));
    pupilYoffset = -55 * Math.sin(Math.atan(cursorYdistance / cursorXdistance));

    pupil.style.transform = `rotate(-45deg) translate(${pupilXoffset}px, ${pupilYoffset}px)`;
  }
}

function startBlink() {
  eye.classList.add("blinking");
}

function stopBlink() {
  eye.classList.remove("blinking");
}

function randomBlink() {
  const rand = Math.random();
  if (rand > 0.9) {
    eye.classList.add("blinking");
  }
}

window.addEventListener("mousemove", movePupil);

eye.addEventListener("click", startBlink);
eye.addEventListener("animationend", stopBlink);

// interval = setInterval(randomBlink, 1000);
