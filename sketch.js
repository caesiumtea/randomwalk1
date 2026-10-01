let x, y, radius;
function setup() {
  createCanvas(400, 400);
  background(100, 200, 300);
  x = width / 2;
  y = height / 2;
  radius = 50;
}

function draw() {
    x = x + random(-5, 5);
    y = y + random(-5, 5);
    radius = radius + random(-2, 2);
    fill(100);
    ellipse(x, y, radius);
}