function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();

		var spectrum = fourier.analyze();
		
		noStroke();
		fill(0,255,0);

		for (var i = 0; i< spectrum.length; i++){
			var y = map(i, 0, spectrum.length, 0, height);
			var h = map(spectrum[i], 0, 255, 0, width);			
			var green = map(spectrum[i], 0, 255, 255, 0);

			fill(spectrum[i], green, 0);
			
			rect(0, y, h, width / spectrum.length);
  		}
	
		pop();
	};
}
