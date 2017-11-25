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
  ob1x1 = width;
  ob1y1 = 4/10 * height;
  ob2x1 = width;
  ob2y1 = 5/10 * height;
  ob3x1 = width;
  ob3y1 = height-50;
  difficultyspeed = 10;
  timer = 0;
  hiscore = 0;
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
    shouldifall = 1
    if (ob1x1 >= width/4-210 && ob1x1 <= width/4+30 && yPos >= ob1y1-52 && yPos <= ob1y1) {
      
      shouldifall = 0
    }
    if (ob2x1 >= width/4-210 && ob2x1 <= width/4+30 && yPos >= ob2y1-52 && yPos <= ob2y1) {
     
      shouldifall = 0
    }
    if (ob3x1 >= width/4-210 && ob3x1 <= width/4+30 && yPos >= ob3y1-52 && yPos <= ob3y1) {
     
      shouldifall = 0
    }
    //makes the ball fall
    if (shouldifall == 1) {
      yPos=yPos+7;
    }
}

function drawObstacle() {
  fill(200,0,0)
  var ob1x2 = width;
  var ob1y2 = height/2+20;
  var ob2x2 = width;
  var ob2y2 = height/2+20;
  var ob3x2 = width;
  var ob3y2 = height/2+20;
  ob1x1 = ob1x1-difficultyspeed
  ob2x1 = ob2x1-difficultyspeed/2
  ob3x1 = ob3x1-difficultyspeed/4
  if (ob1x1 < 0-200) {
    ob1x1 = width
    ob1y1 = Math.floor((Math.random() * 7.25) + 1)/10 * height;
  }
  if (ob2x1 < 0-200) {
    ob2x1 = width
    ob2y1 = Math.floor((Math.random() * 7.25) + 1)/10 * height;
  }
  if (ob3x1 < 0-200) {
    ob3x1 = width
  }
  rect(ob1x1, ob1y1, 200, 20);
  rect(ob2x1, ob2y1, 200, 20);
  rect(ob3x1, ob3y1, 200, 20);
}

function draw() {
  //ceiling
  if (yPos <= 0+50) {
     yPos = 0+50
    }
  background(200);
  var vol = mic.getLevel()*20*sensitivity
  //Updates the x position of the ball based on volume
  xPos = xPos + vol
  //Makes ball rise based on volume
    yPos = yPos - vol
  
//wrap around (right side only)
  if (xPos > width) {
    xPos = 0
  }

  //changes the color if the mic is getting input
  fill(200*vol,100-vol*Math.random()*100,100+vol);
  stroke(0);
  //draws an eclipse, moves to the right at a speed based on the volume from the microphone
  ellipse(width/4, yPos, 100, 100);
  drawObstacle();
 fall();
 textSize(32);
 text(Math.round(timer*10)/10, 10, height-20);
 fill(0, 102, 153);
 timer = timer+1/60;
 if ( timer > hiscore) {
   hiscore = Math.round(timer*10)/10
 }
 text("High score: " + hiscore + " seconds", 10, 30);
     // floor and its triggers
     if (yPos >= height-50) {
      yPos = height-50
      timer = 0;
      text("You failed", width/1.5, height/2);
    }
}


