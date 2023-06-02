function MasterVolume(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 350;
    this.label = 'Master Volume';
  
    // Create the faders
    var MasterFader = new Fader(x + (this.width / 2.3), y + 55, 15, 250, '');
  
    this.draw = function() {
      // Draw the panel background
      fill(240);
      rect(this.x, this.y, this.width, this.height);
  
      // Draw the label at the top
      fill(0);
      textAlign(CENTER, TOP);
      text(this.label, this.x + this.width / 2, this.y + 10);
  
      // Draw and handle fader user interaction
      MasterFader.draw();
      MasterFader.update();
      MasterFader.handleInteraction();
    };
  }