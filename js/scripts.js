document.addEventListener('DOMContentLoaded', function() {
	// Function to test screen width and enabel/disable scroll //
	function hiddenOverflow() {
		if(window.innerWidth > 768) {
			window.document.body.style.overflowY = 'hidden';
		} else {
			window.document.body.style.overflowY = 'auto';
		}
	}
	// Immediately invoke function to test screen width and enabel/disable scroll //
	hiddenOverflow();
	// Add event listener to check for resize of screen to enabel/disable scroll //
	window.addEventListener('resize', hiddenOverflow);
	
	$('.project-container').hover(function() {
//		$(this).children('.project-overlay').fadeToggle(100);
	}).blur(function() {
//		$(this).children('.project-overlay').fadeOut();
	})
	
	$('.collapsed-nav').click(function() {
		$('span.bar-icon').toggleClass('rotated');
		$('.navbar').toggleClass('display');
	});
	
	
	// On click of each project, display an overlay //
	$('.project-details').click(function(e) {
		e.preventDefault();
		
//		console.log($(this).parents('.project-container').attr('data-project-name'));
		var projectName = $(this).parents('.project-container').attr('data-project-name');
		
		$('.overlay#'+projectName).css({
			'display': 'block',
//			'width': window.innerWidth + 'px',
//			'height': window.innerHeight + 'px',
//			'z-index': 99999,
//			'position': 'absolute',
////			'top': pageYOffset,
//			'right': 0,
////			'bottom': 0,
//			'left': 0,
//			'background': 'rgba(22, 22, 22, 0.8)'
		});
		
		$('.project-modal').css({
//			'display': 'block'
		});
				
	});	// End of .project-details button click
	
	// On click of close for project-modal-overlay //
	$('.close').click(function(e) {
		$('.overlay').hide();
	});
	
	
	// Add event listener to .scroll-down button //
//	$('.scroll-down').click(function() {
//		var nextSection = $(this).parents('section').next('section').attr('id');
//		console.log(nextSection);
////		window.scrollBy({ 
////		  top: 100, // could be negative value
////		  left: 0, 
////		  behavior: 'smooth' 
////		});
//		
////		$(nextSection).scrollTop();
//		document.querySelector('.'+nextSection).scrollIntoView({
////			behavior: 'smooth',
//			behavior: 'smooth' 
//		});
//	});
//		var nextSectionOffset = nextSection.pageYOffset;
//		console.log(nextSectionOffset);
//		$(this).parents('section').animate({
//			display: 'absolute',
//			top: '-' + nextSectionTop
//		});
//	});
	
//	$('.about-link, .scroll-down').click(function() {
////		$('.about')
//	}).animate({
//			scrollTop: $('.about').offset().top
//		}, 1000);;

	
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			  } else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	  });
	
});