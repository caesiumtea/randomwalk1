let x, y;
function setup() {
  createCanvas(400, 400);
  background(100, 200, 300);
  x = width / 2;
  y = height / 2;
}

function draw() {
    x = x + random(-5, 5);
    y = y + random(-5, 5);
    fill(100);
    ellipse(x, y, 50, 50);
}