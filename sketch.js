let x, y, red, green, blue;
function setup() {
  createCanvas(400, 400);
  background(100, 200, 300);
  x = width / 2;
  y = height / 2;
  red = 100;
  green = 100;
  blue = 100;
}

function draw() {
    x = x + random(-5, 5);
    y = y + random(-5, 5);
    red = red + random(-5, 5);
    green = green + random(-5, 5);
    blue = blue + random(-5, 5);
    noStroke();
    fill(red, green, blue);
    ellipse(x, y, 20);
}