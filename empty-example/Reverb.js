function Reverb(x, y) {
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 400;
    this.label = 'Reverb';

    // create reverse button
    var reverse;

    reverseButton = createButton('reverse');
    reverseButton.position(x + 68, y + this.height / 2.5);
    // reverseButton.mousePressed(reverseReverb);
  
    // Create the knobs
    var durationKnob = new Knob(x + (this.width * 0.25), y + 100, 60, -PI, PI, 0, 'reverb duration');
    var decayKnob = new Knob(x + (this.width * 0.75), y + 100, 60, -PI, PI, 0, 'decay rate');
  
    // Create the faders
    var cutoffFader = new Fader(x + (this.width * 0.22), y + 230, 'dry/wet');
    var resonanceFader = new Fader(x + (this.width * 0.72), y + 230, 'output');
  
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