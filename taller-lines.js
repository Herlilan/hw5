function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 390; i = i + 5) {
    var startX = i;
    var startY = 10;
    var endX = i;
    var endY = i * 2;
    line(startX, startY, endX, endY);
  }
}
