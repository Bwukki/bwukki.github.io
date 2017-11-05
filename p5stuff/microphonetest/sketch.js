var mic;
var xPos = 0;


function setup() {
  createCanvas(800, 600);
  mic = new p5.AudioIn();
  mic.start();
  frameRate(60);
}

function draw() {
  background(200);
  var vol = mic.getLevel()*100
  xPos = xPos + vol
  if (xPos > width) {
    xPos = 0
  }
  fill(200*vol,100-vol*Math.random()*100,100+vol);
  stroke(0);
  ellipse(50+xPos,height-50, 100, 100);
}
