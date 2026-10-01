let x, y, red, green, blue, size;
function setup() {
  createCanvas(400, 400);
  background(100, 200, 300);
  x = width / 2;
  y = height / 2;
  red = 100;
  green = 100;
  blue = 100;
  size = 30;
}

function draw() {
    // color
    red = red + random(-5, 5);
    if (red < 0) { 
        red = 0;
    } else if (red > 255) {
        red = 255;
    }

    green = green + random(-5, 5);
    if (green < 0) { 
        green = 0;
    } else if (green > 255) {
        green = 255;
    }
    
    blue = blue + random(-5, 5);
    if (blue < 0) { 
        blue = 0;
    } else if (blue > 255) {
        blue = 255;
    }
    
    // size
    size = size + random(-2, 2);
    if (size < 10) { // prevent getting too small or big
        size = 10;
    } else if (size > width / 4) {
        size = width / 4
    }

    // position
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

    // draw
    noStroke();
    fill(red, green, blue);
    ellipse(x, y, size);
}