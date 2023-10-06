let keyWidth = 80;
let keyHeight = 220;
let keyY = 325;
let keyX = 125;
let mySound;
let img1;
let img2;
let img3;

function preload() {
    img1 = loadImage('imgs/musicSheet.jpg'); 
    img2 = loadImage('imgs/note.jpg'); 
    img3 = loadImage('imgs/Key.jpg'); 
    imgD = loadImage('imgs/D.png')
    imgF = loadImage('imgs/F.png')
    imgG = loadImage('imgs/G.png')
    imgH = loadImage('imgs/H.png')
    imgJ = loadImage('imgs/J.png')
    imgK = loadImage('imgs/K.png')
    imgL = loadImage('imgs/L.png')
}

let piano = {
  C: false,
  D: false,
  E: false,
  F: false,
  G: false,
  A: false,
  B: false,

  checkNote: function (note) {
    if (note === 68) { // 'D' key
      this.C = true;
      playSound('pianoSound/piano_C.mp3');
    } else if (note === 70) { // 'F' key
      this.D = true;
      playSound('pianoSound/piano_D.mp3');
    } else if (note === 71) { // 'G' key
      this.E = true;
      playSound('pianoSound/piano_E.mp3');
    } else if (note === 72) { // 'H' key
      this.F = true;
      playSound('pianoSound/piano_F.mp3');
    } else if (note === 74) { // 'J' key
      this.G = true;
      playSound('pianoSound/piano_G.mp3');
    } else if (note === 75) { // 'K' key
      this.A = true;
      playSound('pianoSound/piano_A.mp3');
    } else if (note === 76) { // 'L' key
      this.B = true;
      playSound('pianoSound/piano_B.mp3');
    }
  },

}

function playSound(soundFile) {
  let sound = loadSound(soundFile, () => sound.play());
}

function setup() {
  createCanvas(1500,600);
  background(255, 208, 66);
  image(img1,800,0,700,600);
  image(img2,0,0,760,310);
  image(img3,130,547,550,60);
  
  
  
  // text("C", 150, 400);
  // text("D", 150, 100);
  // text("E", 150, 130);
  // text("F", 150, 160);
  // text("G", 150, 190);
  // text("A", 150, 220);
  // text("B", 150, 250);
}

function draw() { 
  drawKeys();
  image(imgD,140,480,45,60);
  image(imgF,228,480,35,60);
  image(imgG,303,480,45,60);
  image(imgH,382,480,45,60);
  image(imgJ,467,480,35,60);
  image(imgK,543,480,40,60);
  image(imgL,630,480,30,60);
}

function drawKeys() {
  let colors = [color(255, 173, 173), color(255, 214, 165), color(253, 255, 182), color(202, 255, 191), color(155, 246, 255), color(160, 196, 255), color(189, 178, 255)];
  for (let i = 0; i < 7; i++) {
    let keyColor = colors[i]; 
    let key = Object.keys(piano)[i];
    let x = keyX + i * keyWidth;
    if (piano[key]) {
      fill(keyColor);
    } else {
      fill(255);
    }
    
    rect(x, keyY, keyWidth, keyHeight, 10);
  }
}

function keyPressed() {
  piano.checkNote(keyCode);
}

function keyReleased() {
  let key = Object.keys(piano)[keyCodeToNote(keyCode)];
  piano[key] = false;

}

function keyCodeToNote(keyCode) {
  switch (keyCode) {
    case 68: // 'D' key
      return 0; // C
    case 70: // 'F' key
      return 1; // D
    case 71: // 'G' key
      return 2; // E
    case 72: // 'H' key
      return 3; // F
    case 74: // 'J' key
      return 4; // G
    case 75: // 'K' key
      return 5; // A
    case 76: // 'L' key
      return 6; // B
  }
}


// function keyPressed() {
//   piano.checkNote(keyCode);
//   piano.playNote(KeyColor);
// }



// fill(255, 219, 219);
//       rect(keyX, keyY, keyWidth, keyHeight, 10);





// function whiteKeyC() {
//   rect(keyX, keyY, keyWidth, keyHeight, 10);
//   if (mouseIsPressed){
//     fill(255,0,0);
//     // mySound.Play();
//   }else{
//     fill(252, 141, 141);
//     // mySound.Stop();
//   }
// }

// function whiteKeyD() {
//   rect(keyX + keyWidth, keyY, keyWidth, keyHeight, 10);
//    if (mouseIsPressed === true){
//     fill(255, 77, 0);
//   }else{
//     fill(252, 189, 141);
//   }
// }

 // function mousePressed(){
//   rect(keyX, keyY, keyWidth, keyHeight, 10);
//   if(mysound.isPlaying()){
//     mySound.stop();
//     fill(255,0,0);
//   }else{
//     mySound.play();
//     fill(252,0,0);
//   }
// }

  // rect(keyX, keyY, keyWidth, keyHeight, 10);
  // rect(keyX + keyWidth, keyY, keyWidth, keyHeight, 10);
  // rect(keyX + keyWidth * 2, keyY, keyWidth, keyHeight, 10);
  // rect(keyX + keyWidth * 3, keyY, keyWidth, keyHeight, 10);
  // rect(keyX + keyWidth * 4, keyY, keyWidth, keyHeight, 10);
  // rect(keyX + keyWidth * 5, keyY, keyWidth, keyHeight, 10);
  // rect(keyX + keyWidth * 6, keyY, keyWidth, keyHeight, 10);