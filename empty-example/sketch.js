let mySound;
let playStopButton;
let sliderVolume;
let sliderRate;
let sliderPan;
let jumpButton;

// to record from microphone
let mic;
let recorder;
let soundFile;
let state = 0;

// to hold the instantiated knob from the knob constructor
let knob;

// to hold the instantiated fader from the fader constructor
let fader;

function preload() {
  mySound = loadSound("/assets/opp2.mp3");
}

function setup(){
    createCanvas(1800,950);
    background(180);
    
    playStopButton = createButton('play');
    playStopButton.position(200,20);
    playStopButton.mousePressed(playStopSound);

    // sliderVolume = createSlider(0, 2, 1, 0.01);
    // sliderVolume.position(20, 20);
    // text('volume', 80,20);

    // sliderRate = createSlider(0, 2, 1, 0.01);
    // sliderRate.position(20, 70);
    // text('rate', 80,65);

    // sliderPan = createSlider(-1, 1, 0, 0.01);
    // sliderPan.position(20, 115);
    // text('pan', 80,110);

    // jumpButton = createButton('jump');
    // jumpButton.position(250,20);
    // jumpButton.mousePressed(jumpSound);

    lowPassFilter = new LowPassFilter(20,20);
    dynamicCompressor = new DynamicCompressor(250,20);
    
    mySound.playMode('restart');

    
    // for audio recording
    mic = new p5.AudioIn();

    recorder = new p5.SoundRecorder();
    recorder.setInput(mic);
    soundFile = new p5.SoundFile();

    // start processing audio input
    mic.start();

    // knob = new Knob(400, 100, 80, -PI, PI, 0.5);
    // fader = new Fader(400, 200);
}

function playStopSound(){
    mySound.play();
    console.log(getAudioContext().state);
}

function jumpSound(){
  let duration = mySound.duration();
  let t = random(duration);
  mySound.jump(t);
}

function draw() {
  // clear the canvas to prevent trails
  // clear();

  // mySound.setVolume(sliderVolume.value());
  // mySound.rate(sliderRate.value());
  // mySound.pan(sliderPan.value());

  // mySound.setVolume(knob.value);

  // debug microphone level
  // console.log(mic.getLevel());

  // // set mic level
  // let vol = mic.getLevel();

  // // knob
  // knob.update();
  // knob.draw();

  // // fader
  // fader.draw();
  // fader.update();
  // fader.handleInteraction();

  lowPassFilter.draw();
  dynamicCompressor.draw();
}


// // start recording audio from mic when mouse is clicked ///
// function mouseClicked(){
//   if (getAudioContext.state !== 'running'){
//     getAudioContext().resume();
//   }

//   if (state === 0 && mic.enabled){
//     background(255,0,0);
//     text('recording');

//     recorder.record(soundFile);

//     state++;
//   }
//   else if (state === 1){
//     background(0,255,0);
//     text('Click to play and download!', 40,40);

//     recorder.stop();
    
//     state++;
//   }
//   else if (state === 2){
//     background(200);
//     text('Click to record', 40,40);

//     soundFile.play();

//     save(soundFile, 'output.wav');
    
//     state = 0;
//   }
// }
/////////////////////////////////////////////////