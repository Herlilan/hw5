function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 200; i = i + 10) {
    var startX = 200 - i;
    var startY = i;
    var endX = 200 + i;
    var endY = i;
    line(startX, startY, endX, endY);
  }
  for (var a = 10; a <= 390; a = a + 10) {
    var startA = a;
    var startZ = 200 + a;
    var endA = 400 - a;
    var endZ = 200 + a;
    line(startA, startZ, endA, endZ);
  }
}

