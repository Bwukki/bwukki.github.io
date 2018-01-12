var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1000, 800);
  centerCanvas();
  background(200, 200, 230);
  stroke(0,0,0,0)
}

function windowResized() {
  centerCanvas();
}

function draw() {
  fill(30,40,200, 100);
y = 0
f = -100
  for (let x = 0; x <= 79; x += 1) {
	if (x%10 == 0) {
		f = f+100
		y = Math.random()
    }
     if (mouseIsPressed) {
 fill(y * 40 * Math.random()*mouseX, x * 5 * Math.random(), y * 20 * Math.random()+5*mouseY, 50);
  }
 else {
   fill(y * 40 * Math.random()*mouseX, x * 5 * Math.random(), y * 20 * Math.random()+5*mouseY, 500);
  }
    triangle(100*y, f+100, 100+100*y, f+100, 50+100*y, f)
	y+=1
  }
}



 // if (mouseX !== pmouseX || mouseY !== pmouseY) {
   // if (mouseIsPressed) {
     // fill(0,255,0);
  //  }
   // else {
   //   fill(random(100),random(100),random(100));
  //  }
 // }
 // rect(mouseX, mouseY, 80, 80);
  //ellipse(mouseX, mouseY, 80, 80);