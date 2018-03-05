// hw 4 octave challenge

var freqA = 261;
var freqS = 440;
var freqD = 392;
var freqF = 294;

var oscA, oscS, oscD, oscF;

var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;

var slider;

function setup() {
  createCanvas (300, 300);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
    
  slider = createSlider(0, 100, 50);
  slider.position(80, 250);
  slider.style('250px', '80px');
  
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
  if (playingA, playingS, playingD, playingF) {
    background(0, 255, 255);
  } else {
    background(255, 0, 255);
  }
  text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40);

}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    osc.freq(freqA*slider.value()/50);
    playingA = true;
  } else if (key == 'S') {
    osc = oscS;
    osc.freq(freqS*slider.value()/50);
    playingS = true;
  } else if (key == 'D') {
    osc = oscD;
    osc.freq(freqD*slider.value()/50);
    playingD = true;
  } else if (key == 'F') {
    osc = oscF;
    osc.freq(freqF*slider.value()/50);
    playingF = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    
//     osc.freq(slider.value()/5);
  }
}

function draw() {
  background(255);
  fill(120);
  if (playingA) {
    fill(0, 153, 115);
    noStroke();
    ellipse(150, 150, 90, 90);
  }
  if (playingS) {
    fill(0);
    noStroke();
    ellipse(150, 150, 70, 70);
  }
  if (playingD) {
    fill(235);
    noStroke();
    ellipse(150, 150, 50, 50);
  }
  if (playingF) {
    fill(200);
    noStroke();
    ellipse(150, 150, 30, 30);
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = false;
  } else if (key == 'S') {
    osc = oscS;
    playingS = false;
  } else if (key == 'D') {
    osc = oscD;
    playingD = false;
  } else if (key == 'F') {
    osc = oscF;
    playingF = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
  }
}
