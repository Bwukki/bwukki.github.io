var mic;
var xPos = 0;
var yPos = 0;
var sensitivity = 3;

function setup() {
  createCanvas(800, 600);
  mic = new p5.AudioIn();
  mic.start();
  frameRate(60);
}

function sensChange() {
 sensitivity = prompt("Please enter a microphone sensitivty between 1 and 20 (default is 3)", "");
  while (isNaN(sensitivity)) {
   sensitivity = prompt("Please only enter a number between 1 and 20", "");
  }
  while (sensitivity > 20) {
   sensitivity = prompt("Please only enter a number from 1 to 20", "");
  }
  while (sensitivity < 1) {
   sensitivity = prompt("Please only enter a number from 1 to 20", "");
  }

}


function draw() {
  if (yPos <= 0+50) { yPos = 0+50}
  background(200);
  var vol = mic.getLevel()*100*sensitivity
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
    yPos = height-50
  }
  //changes the color if the mic is getting input
  fill(200*vol,100-vol*Math.random()*100,100+vol);
  stroke(0);
  //draws an eclipse, moves to the right at a speed based on the volume from the microphone
  ellipse(50+xPos, yPos, 100, 100);
  yPos=yPos+5;
}


