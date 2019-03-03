function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var x = 18; x <= 390; x = x + 20) {
    for (var y = 18; y <= 390; y = y + 20) {
      ellipse(x, y, 15)
    }
  }
}
