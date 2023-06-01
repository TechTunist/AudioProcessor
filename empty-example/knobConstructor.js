class Knob {
    constructor(x, y, diameter, minAngle, maxAngle, startValue) {
      this.x = x;
      this.y = y;
      this.diameter = diameter;
      this.minAngle = minAngle;
      this.maxAngle = maxAngle;
      this.angle = map(startValue, 0, 1, minAngle, maxAngle);
      this.value = startValue;
      this.dragging = false;
    }
  
    update() {
      if (this.dragging) {
        // Update the knob's value based on the mouse position
        const mx = mouseX - this.x;
        const my = mouseY - this.y;
        this.angle = atan2(my, mx);
        this.angle = constrain(this.angle, this.minAngle, this.maxAngle);
        this.value = map(this.angle, this.minAngle, this.maxAngle, 0, 1);
        console.log(this.value);
      }
    }
  
    display() {
      // Draw the knob on the canvas
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      // Draw knob shape
      ellipse(0, 0, 100, 100);
      stroke(255,0,0);
      line(0, 0, 0, -this.diameter / 2);
      pop();
    //   console.log(this.value);
    }
  
    mousePressed() {
        // Check if the mouse press event occurred within the knob's bounding box
        if (mouseX > this.x - this.diameter / 2 && mouseX < this.x + this.diameter / 2 &&
            mouseY > this.y - this.diameter / 2 && mouseY < this.y + this.diameter / 2) {
          this.dragging = true; // Set dragging to true
        }
      }

    mouseReleased() {
      // Set dragging to false
      this.dragging = false;
    }
  }
  