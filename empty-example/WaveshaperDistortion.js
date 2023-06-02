function WaveshaperDistortion(x, y) {
    this.x = x;
    this.y = y;
    this.width = 230;
    this.height = 350;
    this.label = 'Waveshaper Distortion';
  
    // Create the knobs
    var durationKnob = new Knob(x + (this.width * 0.25), y + 100, 60, -PI, PI, 0, 'distortion amount');
    var decayKnob = new Knob(x + (this.width * 0.75), y + 100, 60, -PI, PI, 0, 'oversample');
  
    // Create the faders
    var cutoffFader = new Fader(x + (this.width * 0.22), y + 180, 15, 150, 'dry/wet');
    var resonanceFader = new Fader(x + (this.width * 0.72), y + 180, 15, 150, 'output');
  
    this.draw = function() {
      // Draw the panel background
      fill(240);
      rect(this.x, this.y, this.width, this.height);
  
      // Draw the label at the top
      fill(0);
      textAlign(CENTER, TOP);
      text(this.label, this.x + this.width / 2, this.y + 10);
  
      // Draw and functionality for knobs and faders
      durationKnob.draw();
      decayKnob.draw();
      durationKnob.update();
      decayKnob.update();
      durationKnob.handleInteraction();
      decayKnob.handleInteraction();

      cutoffFader.draw();
      resonanceFader.draw();
      cutoffFader.update();
      resonanceFader.update();
      cutoffFader.handleInteraction();
      resonanceFader.handleInteraction();
    };
  }