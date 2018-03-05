// I created a musical instrument to play my all time favorite song, Shelter by Porter Robinson and Madeon
// The main melody and intro use five notes, C (do), A (la), G (sol), D (re), and E (mi)
// The corresponding keys on your keyboard are A, S, D, F, and G
// When playing all five keys on your keyboard as chord, the Shelter symbol appears!
// If you aren't familiar with the song, refer to the official audio here: https://www.youtube.com/watch?v=HQnC1UHBvWA

// I created an array for var freq, and the slider allows you to change the octave.
// The x and y position of your mouse changes the volume of the notes.
// There is more visual feedback added.

// How to play the melody from Shelter using your keyboard:
// Play: A S D A
// A S D F ... F A
// A S D A
// G G A F G A F G A F G A F A
// and repeat once
// Songsheet I used for reference: https://musescore.com/bomb_and_kou/shelter

var freq = [261, 440, 392, 294, 329];

var oscA, oscS, oscD, oscF, oscG;

var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;
var playingG = false;

var slider;

function setup() {
  createCanvas (500, 600);
  backgroundColor = color(0);
  textAlign(CENTER);
  
  slider = createSlider(0, 100, 50);
  slider.position(200, 570);
  slider.style('300px', '80px');
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freq[0]);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freq[1]);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freq[2]);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freq[3]);
  oscF.amp(0);
  oscF.start();
  
  oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freq[4]);
  oscG.amp(0);
  oscG.start();
  
}

function draw() {
  if (playingA, playingS, playingD, playingF, playingG) {
    background(0);
    
  } else {
    background(0);
  }
  text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    osc.freq(freq[0]*slider.value()/50);
    playingA = true;
  } else if (key == 'S') {
    osc = oscS;
    osc.freq(freq[1]*slider.value()/50);
    playingS = true;
  } else if (key == 'D') {
    osc = oscD;
    osc.freq(freq[2]*slider.value()/50);
    playingD = true;
  } else if (key == 'F') {
    osc = oscF;
    osc.freq(freq[3]*slider.value()/50);
    playingF = true;
  } else if (key == 'G') {
    osc = oscG;
    osc.freq(freq[4]*slider.value()/50);
    playingG = true;
  }
  if (osc) {
    osc.amp(mouseX/500, mouseY/500);
  }
}

  function drawTriangle () {
    triangle(random(20,500), random(20,500), random(20,500), random(20,500), random(20,500), random(20,500));
  };

function draw() {
  background(0);
  fill(120);
  if (playingA) {
    fill(170, 207, 255, random(350, 450));
    drawTriangle();
    
    fill(247, 212, 227, random(350, 450));
    drawTriangle();
    
    fill(156, 97, 170, random(350, 450));
    drawTriangle();
    
    fill(0, 153, 115);
    noStroke();
    ellipse(250, 250, 450, 450);
    
  }
  if (playingS) {
    fill(170, 207, 255, random(300, 400));
    drawTriangle();
    
    fill(247, 212, 227, random(300, 400));
    drawTriangle();
    
    fill(156, 97, 170, random(300, 400));
    drawTriangle();
    
    fill(0);
    noStroke();
    ellipse(250, 250, 375, 375);
    fill(0, 153, 115);
    triangle(250, 100, 325, 175, 175, 175);
    fill(0);
    triangle(250, 130, 325, 205, 175, 205);
    fill(0, 153, 115);
    triangle(250, 400, 325, 325, 175, 325);
    fill(0);
    triangle(250, 370, 325, 295, 175, 295);
  }
  if (playingD) {
    fill(170, 207, 255, random(250, 350));
    drawTriangle();
    
    fill(247, 212, 227, random(250, 350));
    drawTriangle();
    
    fill(156, 97, 170, random(250, 350));
    drawTriangle();
    
    fill(0, 153, 115);
    noStroke();
    quad(250, 175, 175, 250, 250, 325, 325, 250);
    fill(0);
    quad(250, 200, 200, 250, 250, 300, 300, 250);
    fill(0, 153, 115);
    quad(250, 225, 225, 250, 250, 275, 275, 250);
  }
  if (playingF) {
    fill(170, 207, 255, random(200, 300));
    drawTriangle();
    
    fill(247, 212, 227, random(200, 300));
    drawTriangle();
    
    fill(156, 97, 170, random(200, 300));
    drawTriangle();
    
    fill(0, 153, 115);
    noStroke();
    rect(90, 215, 75, 25);
    rect(90, 265, 75, 25);
  }
  if (playingG) {
    fill(170, 207, 255, random(150, 250));
    drawTriangle();
    
    fill(247, 212, 227, random(150, 250));
    drawTriangle();
    
    fill(156, 97, 170, random(150, 250));
    drawTriangle();
    
    fill(0, 153, 115);
    noStroke();
    rect(335, 215, 75, 25);
    rect(335, 265, 75, 25);
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
  } else if (key == 'G') {
    osc = oscG;
    playingG = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
  }
}
