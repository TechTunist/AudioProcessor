class Fader {
    constructor(x, y, label) {
      this.x = x;
      this.y = y;
      this.width = 15;
      this.height = 150;
      this.knobSize = this.width;
      this.knobY = this.y + this.height - this.knobSize;
      this.minY = this.y;
      this.maxY = this.y + this.height - this.knobSize;
      this.value = 0; // Initial value
      this.label = label
  
      // Drawing the fader
      this.draw = function() {    
        // label
        text(this.label, this.x + 5, this.y - 25)   
        // Draw the fader channel
        fill(220);
        stroke(0);
        rect(this.x, this.y, this.width, this.height);
  
        // Draw the fader knob
        fill(150);
        rect(this.x - 3.25, this.knobY, this.width * 1.5, this.knobSize);
      };
  
      // Updating the value based on the knob position
      this.update = function() {
        this.value = map(this.knobY, this.minY, this.maxY, 11, 0);
      };
  
      // Handling mouse interaction
      this.handleInteraction = function() {
        if (mouseIsPressed) {
          if (
            mouseX >= this.x &&
            mouseX <= this.x + this.width &&
            mouseY >= this.y &&
            mouseY <= this.y + this.height
          ) {
            this.knobY = constrain(mouseY - this.knobSize / 2, this.minY, this.maxY);
            this.update();
          }
        }
      };
    }
  }
  