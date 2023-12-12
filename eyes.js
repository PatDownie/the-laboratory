const leftContainer = document.getElementById("leftContainer");
const rightContainer = document.getElementById("rightContainer");

const eyes = document.getElementsByClassName("eye");
for (let i = 0; i < eyes.length; i++) eyes[i].setAttribute("id", `eye${i}`);
const pupils = document.getElementsByClassName("pupil");
for (let i = 0; i < pupils.length; i++) pupils[i].setAttribute("id", `pupil${i}`);

function movePupil(event) {
  for (let i = 0; i < eyes.length; i++) {
    const eye = document.getElementById(`eye${i}`);
    const pupil = document.getElementById(`pupil${i}`);
    cursorXPosition = event.x;
    cursorYPosition = event.y;
    eyeRectangle = eye.getBoundingClientRect();
    eyeXPos = eyeRectangle.left + eyeRectangle.width / 2;
    eyeYPos = eyeRectangle.top + eyeRectangle.height / 2;
    cursorXdistance = cursorXPosition - eyeXPos;
    cursorYdistance = cursorYPosition - eyeYPos;
    cursorTotalDistance = Math.sqrt(cursorXdistance ** 2 + cursorYdistance ** 2);

    if (cursorTotalDistance < 35) {
      pupil.style.transform = `rotate(-45deg) translate(${cursorXdistance}px, ${cursorYdistance}px)`;
    } else if (cursorXdistance >= 0) {
      pupilXoffset = 35 * Math.cos(Math.atan(cursorYdistance / cursorXdistance));
      pupilYoffset = 35 * Math.sin(Math.atan(cursorYdistance / cursorXdistance));

      pupil.style.transform = `rotate(-45deg) translate(${pupilXoffset}px, ${pupilYoffset}px)`;
    } else {
      pupilXoffset = -35 * Math.cos(Math.atan(cursorYdistance / cursorXdistance));
      pupilYoffset = -35 * Math.sin(Math.atan(cursorYdistance / cursorXdistance));

      pupil.style.transform = `rotate(-45deg) translate(${pupilXoffset}px, ${pupilYoffset}px)`;
    }
  }
}

function randomBlink() {
  for (let i = 0; i < eyes.length; i++) {
    const rand = Math.random();
    if (rand > 0.99992) {
      const eye = document.getElementById(`eye${i}`);
      eye.classList.add("blinking");
    }
  }
}

for (let i = 0; i < eyes.length; i++) {
  const eye = document.getElementById(`eye${i}`);
  eye.addEventListener(`click`, function () {
    eye.classList.add("blinking");
  });
  eye.addEventListener("animationend", function () {
    eye.classList.remove("blinking");
  });
}

window.addEventListener("mousemove", movePupil);

interval = setInterval(randomBlink, 10);
