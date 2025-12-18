var l1 = document.getElementById("llum1");
var l2 = document.getElementById("llum2");
var relleno2 = 0;
var relleno1 = 0;

function setup() {
  var c = createCanvas(400, 400);
  c.parent("canvasWrapper");
}

function draw() {
  background(0, 0, 200);
  if (l1.checked) {
    relleno1 = 255;
  } else {
    relleno1 = 0;
  }
  if (l2.checked) {
    relleno2 = 255;
  } else {
    relleno2 = 0;
  }
  noStroke();
  fill(relleno1);
  rect(0, 0, width / 2, height);
  fill(relleno2);
  rect(width / 2, 0, width, height);
}
