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
    red = red + random(-5, 5);
    green = green + random(-5, 5);
    blue = blue + random(-5, 5);
    x = x + random(-5, 5);
    if (x < 0) { // prevent running off edge
        x = 0;
    } else if (x > width) {
        x = width;
    }
    y = y + random(-5, 5);
    if (y < 0) { // prevent running off edge
        y = 0;
    } else if (y > height) {
        y = height;
    }
    noStroke();
    fill(red, green, blue);
    ellipse(x, y, 20);
}