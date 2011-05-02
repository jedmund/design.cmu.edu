var hoverInterval;
var slideshowWidth;

function moveLeft() {
	$('.slideshow .inner').css('left', '+=10');
	console.log("Firing left");
}

function moveRight() {
	$('.slideshow .inner').css('left', '-=10');
	console.log("Firing right");
}

$('document').ready(function() {
	console.log("Ready!!");
	
	$('.slideshow').mousemove(function(e) {
		// Get the width of the slideshow
		slideshowWidth = $(this).width();
		console.log("slideshow width: " + slideshowWidth);
		
		// Get the position of X and Y relative to this element
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
		console.log(mouseX + ", " + mouseY);
			
			
		// Bounds detection
		if (mouseX < 100) {
			console.log("In bounds on left edge");
			hoverInterval = setInterval(moveLeft, 100);
		} else if (mouseY < slideshowWidth && mouseY > (slideshowWidth-100)) {
			console.log("In bounds on right edge");
			hoverInterval = setInterval(moveRight, 100);
		}
		
		
	}, function() {
		clearInterval(hoverInterval);
	});
});