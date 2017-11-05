var mic;
var xPos = 0;
var yPos = 0;


function setup() {
  createCanvas(800, 600);
  mic = new p5.AudioIn();
  mic.start();
  frameRate(60);
}


function draw() {
  if (yPos <= 0) { yPos = height-50}
  background(200);
  var vol = mic.getLevel()*100
  xPos = xPos + vol
//if you hold down mouse1 or 2 the ball will rise
  if ( mouseIsPressed ){
    yPos = yPos - vol
  }

//the following few if statements just check if the ball is still on the canvas and resets it if its not
  if (xPos > width) {
    xPos = 0
  }
  if (yPos > height-50) {
    yPos = 0
  }
  if (yPos < 0 ) {
    yPos = 0
  }
  //changes the color if the mic is getting input
  fill(200*vol,100-vol*Math.random()*100,100+vol);
  stroke(0);
  //draws an eclipse, moves to the right at a speed based on the volume from the microphone
  ellipse(50+xPos, yPos, 100, 100);
}


