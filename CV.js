const bigLinkContainer = document.querySelector(".bigLinkContainer");

let containerChildren = bigLinkContainer.children;
let linkShadows = [];
for (let i = 0; i < containerChildren.length; i++) {
  if (containerChildren[i].localName == "p") {
    linkShadows.push(containerChildren[i]);
  }
}

bigLinkContainer.onmouseover = () => {
  for (let i = 0; i < linkShadows.length; i++) {
    linkShadows[i].classList.add("pulsing");
  }
};

bigLinkContainer.onmouseout = () => {
  console.log("m0use is out");
  for (let i = 0; i < linkShadows.length; i++) {
    linkShadows[i].onanimationiteration = () => {
      linkShadows[i].classList.remove("pulsing");
    };
  }
};
