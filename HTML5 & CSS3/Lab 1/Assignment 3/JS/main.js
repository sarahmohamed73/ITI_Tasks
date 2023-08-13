let redRange = document.querySelector("#redRange");
let greenRange = document.querySelector("#greenRange");
let blueRange = document.querySelector("#blueRange");
let paragraph = document.querySelector("p");
const colorChange = function() {
  let red = redRange.value;
  let green= greenRange.value;
  let blue = blueRange.value;
  paragraph.style.color = `rgb(${red},${green},${blue})`;
}
redRange.oninput = colorChange;
greenRange.oninput = colorChange;
blueRange.oninput = colorChange;
