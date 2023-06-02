function LowPassFilter(x, y) {
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 400;
    this.label = 'Low-Pass Filter';
  
    // Create the knobs
    var dryWetKnob = new Knob(x + (this.width * 0.25), y + 100, 60, -PI, PI, 0, 'cutoff');
    var outputKnob = new Knob(x + (this.width * 0.75), y + 100, 60, -PI, PI, 0, 'resonance');
  
    // Create the faders
    var cutoffFader = new Fader(x + (this.width * 0.22), 230, 'dry/wet');
    var resonanceFader = new Fader(x + (this.width * 0.72), 230, 'output');
  
    this.draw = function() {
      // Draw the panel background
      fill(240);
      rect(this.x, this.y, this.width, this.height);
  
      // Draw the label at the top
      fill(0);
      textAlign(CENTER, TOP);
      text(this.label, this.x + this.width / 2, this.y + 10);
  
      // Draw and functionality for knobs and faders
      dryWetKnob.draw();
      outputKnob.draw();
      dryWetKnob.update();
      outputKnob.update();
      dryWetKnob.handleInteraction();
      outputKnob.handleInteraction();

      cutoffFader.draw();
      resonanceFader.draw();
      cutoffFader.update();
      resonanceFader.update();
      cutoffFader.handleInteraction();
      resonanceFader.handleInteraction();
    };
  }