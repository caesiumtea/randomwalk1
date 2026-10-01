let x, y;
function setup() {
    createCanvas(400, 400);
    background(100, 200, 300);
    x = width / 2;
    y = height / 2;
}

function draw() {
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
    fill(100);
    ellipse(x, y, 50, 50);
}