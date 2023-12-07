const RGBArray = ["R", "G", "B"];

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
    testText.appendChild(span);
    letterWidth = span.offsetWidth;
    if (i === 1) {
      span.style.marginLeft = `${-letterWidth}px`;
    } else if (i === 2) {
      span.style.marginLeft = `${-letterWidth}px`;
    }
  }
  letterArray2[index * 3] = [letter, letterWidth];
  letterArray2[index * 3 + 1] = [letter, letterWidth];
  letterArray2[index * 3 + 2] = [letter, letterWidth];
});

console.log(letterArray2);
