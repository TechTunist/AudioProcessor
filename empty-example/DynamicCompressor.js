function DynamicCompressor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 350;
    this.height = 500;
    this.label = 'Dynamic Compressor';
  
    // Create the knobs
    var attackKnob = new Knob(x + (this.width * 0.2), y + 100, 60, -PI, PI, 0, 'attack');
    var kneeKnob = new Knob(x + (this.width / 2), y + 100, 60, -PI, PI, 0, 'knee');
    var releaseKnob = new Knob(x + (this.width * 0.8), y + 100, 60, -PI, PI, 0, 'release');
    var ratioKnob = new Knob(x + (this.width * 0.375), y + 200, 60, -PI, PI, 0, 'ratio');
    var thresholdKnob = new Knob(x + (this.width * 0.65), y + 200, 60, -PI, PI, 0, 'threshold');
  
    // Create the faders
    var cutoffFader = new Fader(x + (this.width * 0.345), 330, 15, 150, 'dry/wet');
    var resonanceFader = new Fader(x + (this.width * 0.625), 330, 15, 150, 'output');
  
    this.draw = function() {
      // Draw the panel background
      fill(240);
      rect(this.x, this.y, this.width, this.height);
  
      // Draw the label at the top
      fill(0);
      textAlign(CENTER, TOP);
      text(this.label, this.x + this.width / 2, this.y + 10);
  
      // Draw knobs
      attackKnob.draw();
      kneeKnob.draw();
      releaseKnob.draw();
      ratioKnob.draw();
      thresholdKnob.draw();

      // update values
      attackKnob.update();
      kneeKnob.update();
      releaseKnob.update();
      ratioKnob.update();
      thresholdKnob.update();

      // handle knob user interactions
      attackKnob.handleInteraction();
      kneeKnob.handleInteraction();
      releaseKnob.handleInteraction();
      ratioKnob.handleInteraction();
      thresholdKnob.handleInteraction();

      // draw faders
      cutoffFader.draw();
      resonanceFader.draw();

      // update fader values
      cutoffFader.update();
      resonanceFader.update();

      // handle fader user interaction
      cutoffFader.handleInteraction();
      resonanceFader.handleInteraction();
    };
  }