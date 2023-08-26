console.log("hello world");

let stackCount = 0;

function handleClick(event) {
  if (event.target.className == "stacked") {
    let spilledDivs = event.target.parentElement.children;
    for (let i = 0; i < spilledDivs.length; i++) {
      spilledDivs[i].className = "spilled";
    }
    stackCount = 0;
    console.log(stackCount);
  } else {
    event.target.style.zIndex = stackCount;
    event.target.className = "stacked";
    stackCount++;
    console.log(stackCount);
    if (stackCount >= 4) {
      stackCount = 0;
    }
  }
}
