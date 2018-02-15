// I changed the sound from triangle to sawtooth, added a note, changed the frequency to do-re-mi-fa-sol, and the visual to look like sheet music.

var freqA = 261;
var freqS = 293;
var freqD = 329;
var freqF = 349;
var freqG = 392;

var oscA, oscS, oscD, oscF;

var playing = false;

function setup() {
  createCanvas (500, 500);
  backgroundColor = color(235, 250, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('sawtooth');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  
  oscS = new p5.Oscillator();
  oscS.setType('sawtooth');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('sawtooth');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('sawtooth');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
	
	oscG = new p5.Oscillator();
  oscG.setType('sawtooth');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
}

function draw() {
  if (playing) {
  } else {
    background(235, 250, 255);
		stroke(120)
		strokeWeight(5)
		line (0, 200, 500, 200);
		line (0, 220, 500, 220);
		line (0, 240, 500, 240);
		line (0, 260, 500, 260);
		line (0, 280, 500, 280);
  }
}

function keyPressed() {
	noStroke();
	fill (0)
  text('NOW YOU SEE ME', width / 2, 40);
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    noStroke()
		fill (110, 220, 255)
    ellipse (50, 300, 20, 20);
		stroke(110, 220, 255)
		strokeWeight (3)
		line (35, 300, 65, 300);
		line (60, 240, 60, 300);
  } else if (key == 'S') {
    osc = oscS;
    noStroke()
		fill (0, 157, 255)
    ellipse (100, 290, 20, 20);
		stroke(0, 157, 255)
		strokeWeight (3)
		line (110, 230, 110, 290);
  } else if (key == 'D') {
    osc = oscD;
    noStroke()
		fill (0, 123, 163)
    ellipse (150, 280, 20, 20);
		stroke(0, 123, 163)
		strokeWeight (3)
		line (160, 220, 160, 280);
  } else if (key == 'F') {
    osc = oscF;
    noStroke()
		fill (0, 71, 94)
    ellipse (200, 270, 20, 20);
		stroke(0, 71, 94)
		strokeWeight (3)
		line (210, 210, 210, 270);
	} else if (key == 'G') {
    osc = oscG;
    noStroke()
		fill (0, 45, 45)
    ellipse (250, 260, 20, 20);
		stroke(0, 45, 45)
		strokeWeight (3)
		line (260, 200, 260, 260);
  }
  if (osc) {
    osc.amp(mouseX/1000, mouseY/1000);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  } else if (key == 'G') {
    osc = oscG;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
