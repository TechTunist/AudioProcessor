class Knob {
    constructor(x, y, diameter, minAngle, maxAngle, startValue, label) {
      this.x = x;
      this.y = y;
      this.diameter = diameter;
      this.minAngle = minAngle;
      this.maxAngle = maxAngle;
      this.angle = map(startValue, 0, 11, minAngle, maxAngle);
      this.value = startValue;
      this.dragging = false;
      this.label = label;
  
    this.update = function() {
      if (this.dragging) {
        // Update the knob's value based on the mouse position
        const mx = mouseX - this.x;
        const my = mouseY - this.y;
        this.angle = atan2(my, mx);
        this.angle = constrain(this.angle, this.minAngle, this.maxAngle);
        this.value = map(this.angle, this.minAngle, this.maxAngle, 0, 1);
      }
    }
  
    this.draw = function() {
      // label
      text(this.label, this.x, this.y - 50)
      // Draw the knob on the canvas
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      // Draw knob shape
      ellipse(0, 0, this.diameter);
      stroke(255,0,0);
      strokeWeight(2);
      line(0, 0, 0, -this.diameter / 2);
      pop();
    }

    // Handling mouse interaction
    this.handleInteraction = function() {
      // Calculate the distance between the mouse position and the knob position
      const distance = dist(mouseX, mouseY, this.x, this.y);
  
      // Check if the mouse is within the diameter of the knob
        if (distance < this.diameter / 2) {
          if (mouseIsPressed){
            this.dragging = true;
          this.update();
        } else {
          this.dragging = false;
        }
          }
          
    };
  }
}
  