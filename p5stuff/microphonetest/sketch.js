var mic;
var xPos = 0;
var yPos = 0;
var sensitivity = 3;
//VARIABLES FOR COLLISION OBJECT 1


function setup() {
  createCanvas(800, 600);
  mic = new p5.AudioIn();
  mic.start();
  frameRate(60);
}

function sensChange() {
 sensitivity = prompt("Please enter a microphone sensitivty between 1 and 20 (default is 3)", "");
  while (isNaN(sensitivity)) {
   sensitivity = prompt("Please only enter a number between 1 (least sensitive) and 20 (most sensitive)", "");
  }
  while (sensitivity > 20) {
   sensitivity = prompt("Please only enter a number from 1 (least sensitive) to 20 (most sensitive)", "");
  }
  while (sensitivity < 1) {
   sensitivity = prompt("Please only enter a number from 1 (least sensitive) to 20 (most sensitive)", "");
  }

}

function fall() {
    //checks to see if the position of the ball is above and over the line
    if (yPos < height/2 && yPos >= height/2-50 && xPos >= width-299 ) {

    }
    //makes the ball fall
    else {
      yPos=yPos+5;
    }
}

function drawObstacle() {
  fill(200,0,0)
  var ob1x1 = width-200;
  var ob1x2 = width;
  var ob1y1 = height/2;
  var ob1y2 = height/2+20;
  rect(ob1x1, ob1y1, 200, 20);
}

function draw() {
  //ceiling
  if (yPos <= 0+50) { yPos = 0+50}
  // floor
  if (yPos > height-50) {
    yPos = height-50
  }
  background(200);
  var vol = mic.getLevel()*100*sensitivity
  //Updates the x position of the ball based on volume
  xPos = xPos + vol
  //Makes ball rise based on volume
  if ( mouseIsPressed ){
    yPos = yPos - vol
  }
//wrap around (right side only)
  if (xPos > width) {
    xPos = 0
  }

  //changes the color if the mic is getting input
  fill(200*vol,100-vol*Math.random()*100,100+vol);
  stroke(0);
  //draws an eclipse, moves to the right at a speed based on the volume from the microphone
  ellipse(50+xPos, yPos, 100, 100);
  drawObstacle();
 fall();
}


