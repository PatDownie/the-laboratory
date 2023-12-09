const RGBArray = ["R", "G", "B"];

function randomDirection() {
  const number = Math.floor(15 + Math.random() * 10);
  const posOrNeg = Math.random() < 0.5 ? -1 : 1;
  return number * posOrNeg;
}

const testText = document.getElementById("testText");

letterArray1 = testText.innerText.split("");

testText.innerText = "";

let letterArray2 = [];

letterArray1.forEach((letter, index) => {
  let letterWidth = "";
  for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    span.className = `${RGBArray[i]}`;
    span.innerText = letter;
    span.id = `letter${index * 3 + i}`;
    testText.appendChild(span);
    letterWidth = span.offsetWidth;
    if (i === 1) {
      span.style.marginLeft = `${-letterWidth}px`;
    } else if (i === 2) {
      span.style.marginLeft = `${-letterWidth}px`;
    }
  }
  letterArray2[index * 3] = [letter, letterWidth, [randomDirection(), randomDirection()]];
  letterArray2[index * 3 + 1] = [letter, letterWidth, [randomDirection(), randomDirection()]];
  letterArray2[index * 3 + 2] = [letter, letterWidth, [randomDirection(), randomDirection()]];
});

function moveLetters(event) {
  letterArray2.forEach((arrayLetter, index) => {
    const letterElement = document.getElementById(`letter${index}`);

    cursorXPosition = event.x;
    cursorYPosition = event.y;
    elementRectangle = letterElement.getBoundingClientRect();
    elementXPos = elementRectangle.left + elementRectangle.width / 2;
    elementYPos = elementRectangle.top + elementRectangle.height / 2;
    cursorXdistance = Math.abs(elementXPos - cursorXPosition);
    cursorYdistance = Math.abs(elementYPos - cursorYPosition);
    cursorTotalDistance = 1 - Math.min(Math.sqrt(cursorXdistance ** 2 + cursorYdistance ** 2), 200) / 200;

    letterElement.style.translate = `${letterArray2[index][2][0] * cursorTotalDistance}px ${letterArray2[index][2][1] * cursorTotalDistance}px`;
    // letterElement.style.filter = `blur(${Math.abs(letterArray2[index][2][0]) * cursorTotalDistance}px)`;
  });
}

window.addEventListener("mousemove", moveLetters);

console.log(letterArray2);
// console.log(randomDirection());
