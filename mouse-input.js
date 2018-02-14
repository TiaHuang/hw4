var freqA = 261;
var freqS = 293;
var freqD = 329;
var freqF = 349;

var oscA, oscS, oscD, oscF;

var playing = false;

function setup() {
  createCanvas (500, 500);
  backgroundColor = color(235, 250, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  if (playing) {
  } else {
    background(235, 250, 255);
  }
}

function keyPressed() {
  text('NOW YOU SEE ME', width / 2, 40);
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    noStroke()
		fill (110, 220, 255)
    ellipse (mouseX, mouseY, freqA, freqA);
  } else if (key == 'S') {
    osc = oscS;
    noStroke()
		fill (0, 157, 255)
    ellipse (mouseX, mouseY, freqS, freqS);
  } else if (key == 'D') {
    osc = oscD;
    noStroke()
		fill (0, 123, 163)
    ellipse (mouseX, mouseY, freqD, freqD);
  } else if (key == 'F') {
    osc = oscF;
    noStroke()
		fill (0, 71, 94)
    ellipse (mouseX, mouseY, freqF, freqF);
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
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
