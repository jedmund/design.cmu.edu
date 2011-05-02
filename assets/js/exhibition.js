var expanded = false;

function moveLeft() {
	var left = $('.slideshow .inner').css('left');
	left = parseInt(left);

	if ($('.slideshow .inner').css('left') < 0) {
		$('.slideshow .inner').animate({left: '+=10'}, 100);
	}
	console.log("Firing left");
}

function moveRight() {
	$('.slideshow .inner').css('left', '-=10');
	console.log("Firing right");
}

$('document').ready(function() {
/*
	var hoverInterval;
	var slideshowWidth;

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
		if (mouseX < 150) {
			console.log("In bounds on left edge");
			hoverInterval = setInterval(moveLeft, 100);
		} else if (mouseX > (slideshowWidth-150)) {
			console.log("In bounds on right edge");
			hoverInterval = setInterval(moveRight, 100);
		}
	});
	
	$('.slideshow').mouseout(function(e) {
		console.log("Mouseout!");
		clearInterval(hoverInterval);
	});
*/

	// Hero slideshow
	$('.active_area').click(function(e) {
		var heroHeight = $(window).height() - 200;
		if (heroHeight > 620) {
			heroHeight = 620;
		}
		
		if (!expanded) {
			$('figure#hero').animate({
				height: heroHeight,
			}, 700, function(e) {
				expanded = true;
				/* Change the CSS for the active area */
				$('.active_area').css({
					marginLeft: '34px',
					width: '872px'
				});
				
				/* Fade in nav buttons */
				$('.cycle_btn').animate({
					opacity: 1
				}, 150);
				
				/* Change text to "Hide" */
				$('.active_area p').text('Hide slideshow');
			});
			
			$('figure#hero img').animate({
				marginTop: '0px'
			}, 700);
		} else {
			$('figure#hero').animate({
				height: '322px'
			}, 700, function(e) {
				expanded = false;
				
				/* Fade out nav buttons */
				$('.cycle_btn').animate({
					opacity: 0
				}, 150);
				
				/* Change text to "View" */
				$('.active_area p').text('View slideshow');
			});
			
			$('figure#hero img').animate({
				marginTop: '-=150px'
			}, 750);
		}
	});
	
	// Bind Cycle
	$('.hero_slideshow .inner').cycle({
		fx: 'scrollHorz',
		containerResize: 0,
		timeout: 0,
		next:'#cycle_right',
		prev:'#cycle_left'
	});
});