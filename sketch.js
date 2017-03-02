//mouseClicked code

var value = 0;

function setup() {
 createCanvas(600, 600)
}

function draw() {
  background(232,149,35);
  colorMode(HSB);
  fill(value,100,100);
  rect(60,71,300,300);
}
function mouseClicked() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}