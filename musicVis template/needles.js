//constructor function to draw a
function Needles() {
	//name of the visualisation
	this.name = "needles";

	//how large is the arc of the needle plot.
	var minAngle = PI + PI / 10;
	var maxAngle = TWO_PI - PI / 10;

	this.plotsAcross = 2;
	this.plotsDown = 2;

	//frquencies used by the energyfunction to retrieve a value
	//for each plot.
	this.frequencyBins = ["bass", "lowMid", "highMid", "treble"];

	//resize the plots sizes when the screen is resized.
	this.onResize = function() {
		this.pad = width / 20;
		this.plotWidth = (width - this.pad) / this.plotsAcross;
		this.plotHeight = (height - this.pad) / this.plotsDown;
		this.dialRadius = (this.plotWidth - this.pad) / 2 - 5;
	};
	//call onResize to set initial values when the object is created
	this.onResize();

	// draw the plots to the screen
	this.draw = function() {
		//create an array amplitude values from the fft.
		var spectrum = fourier.analyze();
		//iterator for selecting frequency bin.
		var currentBin = 0;
		push();
		fill('#f0f2d2');
		//nested for loop to place plots in 2*2 grid.
		for (var i = 0; i < this.plotsDown; i++) {
			for (var j = 0; j < this.plotsAcross; j++) {

				//calculate the size of the plots
				var x = (j * this.plotWidth) + this.pad;
				var y = (i * this.plotHeight) + this.pad;
				var w = this.plotWidth - this.pad;
				var h = this.plotHeight - this.pad;
				//draw a rectangle at that location and size
				rect(x, y, w, h);

				//add on the ticks
				var centreX = (j * this.plotWidth) + (this.plotWidth + this.pad) / 2;
				var bottomY = y + h;

				this.ticks(centreX, bottomY, this.frequencyBins[i * this.plotsDown + j]);

				var energy = fourier.getEnergy(this.frequencyBins[currentBin]);

				//add the needle
				this.needle(spectrum[currentBin], centreX, bottomY);

				currentBin++;
			}
		}

		pop();
	};

	/*
	 *draws a needle to an individual plot
	 *@param energy: The energy for the current frequency
	 *@param centreX: central x coordinate of the plot rectangle
	 *@param bottomY: The bottom y coordinate of the plot rectangle
	 */
	this.needle = function(energy, centreX, bottomY) {
		push();
		stroke('#333333');
		//translate so 0 is at the bottom of the needle
		translate(centreX, bottomY);
		//map the energy to the angle for the plot
		theta = map(energy, 0, 255, minAngle, maxAngle);
		//calculate x and y coorindates from angle for the length of needle
		var x = this.dialRadius * cos(theta);
		var y = this.dialRadius * sin(theta);

		y = map(y, 0, this.dialRadius, 0, this.plotHeight - this.pad - 10);
		//draw the needle
		line(0, 0, x, y);
		pop();
	};

	/*
	 *draw the graph ticks on an indivisual plot
	 *@param centreX: central x coordinate of the plot rectangle
	 *@param bottomY: The bottom y coordinate of the plot rectangle
	 *@param freqLabel: Label denoting the frequency of the plot
	 */
	this.ticks = function(centreX, bottomY, freqLabel) {
		// 8 ticks from pi to 2pi
		var nextTickAngle = minAngle;
		push();
		stroke('#333333');
		fill('#333333');
		translate(centreX, bottomY);
		//draw the semi circle for the botttom of the needle
		arc(0, 0, 20, 20, PI, 2 * PI);
		textAlign(CENTER);
		textSize(12);

		var labelY = (this.plotHeight / 2);
		labelY = map(labelY, this.plotHeight / 2, 0, (this.plotHeight - this.pad) / 2, 0);
		
		text(freqLabel, 0, -labelY);

		for (var i = 0; i < 9; i++) {
			//for each tick work out the start and end coordinates of
			//based on its angle from the needle's origin.
			var x = this.dialRadius * cos(nextTickAngle);
			var x1 = (this.dialRadius - 5) * cos(nextTickAngle);

			var y = (this.dialRadius) * sin(nextTickAngle);
			var y1 = (this.dialRadius - 5) * sin(nextTickAngle);

			y = map(y, 0, this.dialRadius, 0, this.plotHeight - this.pad - 10)
			y1 = map(y1, 0, this.dialRadius, 0, this.plotHeight - this.pad - 10)

			line(x, y, x1, y1);
			nextTickAngle += PI / 10;
		}
		pop();
	};

}