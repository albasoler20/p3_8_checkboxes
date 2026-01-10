var l1 = document.getElementById("llum1");
var l2 = document.getElementById("llum2");

var relleno1 = 0;
var relleno2 = 0;

function setup() {
  var c = createCanvas(400, 400);
  c.parent("canvasWrapper");
}

function draw() {
  background(0, 0, 200);

  // Estado luces
  relleno1 = l1.checked ? 255 : 0;
  relleno2 = l2.checked ? 255 : 0;

  noStroke();

  // Mitad izquierda
  fill(relleno1);
  rect(0, 0, width / 2, height);

  // Mitad derecha
  fill(relleno2);
  rect(width / 2, 0, width / 2, height);

  // Iconos centrados
  var cx1 = width / 4;
  var cx2 = (3 * width) / 4;
  var cy = height / 2;
  var size = 34; // tamaño del icono (sube/baja si quieres)

  if (l1.checked) drawSun(cx1, cy, size);
  else drawMoon(cx1, cy, size);

  if (l2.checked) drawSun(cx2, cy, size);
  else drawMoon(cx2, cy, size);
}

// ----- ICONOS -----

function drawSun(cx, cy, r) {
  push();
  translate(cx, cy);
  noStroke();

  // Centro del sol
  fill(255, 220, 0);
  circle(0, 0, r);

  // Rayos
  stroke(255, 220, 0);
  strokeWeight(3);
  for (let a = 0; a < 360; a += 45) {
    let x1 = cos(a) * (r * 0.65);
    let y1 = sin(a) * (r * 0.65);
    let x2 = cos(a) * (r * 0.95);
    let y2 = sin(a) * (r * 0.95);
    line(x1, y1, x2, y2);
  }

  pop();
}

function drawMoon(cx, cy, r) {
  push();
  translate(cx, cy);
  noStroke();

  // Luna (crescente)
  fill(235);
  circle(0, 0, r);

  // "Mordisco" para crear la media luna
  // Pintamos con el mismo color del fondo de la mitad (negro)
  fill(0);
  circle(r * 0.28, 0, r);

  pop();
}

