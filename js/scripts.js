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
	
	// On scroll of window
//	window.addEventListener('scroll', function() {
//		
//		
//		
////		console.log(window.pageYOffset)
////		console.log(document.body.offsetTop)
////		console.log(this.offsetTop)
////		console.log($(this).offset())
////		console.log($('section#main').offset())
////		console.log($('section#about').offset())
////		console.log($('section#projects').offset())
////		console.log($('section#contact').offset())
////		
////		$('section#main').offset()
////		$('section#about').offset()
////		$('section#projects').offset()
////		$('section#contact').offset()
//		
////		var sections = ['section#main', 'section#about', 'section#projects', 'section#contact'];
//		var sections = ['main', 'about', 'projects', 'contact'];
//		
//		sections.forEach(function(e) {
//			var el = document.getElementById(e);
////			console.log(el.offsetTop);
//			
//			
//			if(window.pageYOffset > el.offsetTop) {
////				window.pageYOffset = el.offsetTop;
////				el.scrollIntoView(true);
//			}
//		});
//	});
	
	// On click of hamburger icon, animate icon to X close button icon //
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
			'display': 'block'
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
//		$(nextSection).scrollTop();
//		document.querySelector('.'+nextSection).scrollIntoView({
////			behavior: 'smooth',
//			behavior: 'smooth' 
//		});
////	});
//		var nextSectionOffset = nextSection.pageYOffset;
//		console.log(nextSectionOffset);
//		$(this).parents('section').animate({
//			display: 'absolute',
//			top: '-' + nextSectionTop
//		});
//	});
//	
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
			
			var targetId = '#' + target.attr('id');
			targetId += '-link';
			$(targetId).css({
				'background': '#888',
				'color': '#eee'
			});
			
//			$(targetId).after().css({
//				'content': '',
//				'width': '0',
//				'height': '0',
//				'background': 'red',
//				'border': '2px solid #000',
//				'position': 'absolute',
//				'bottom': 0,
//				'left': '30%'
//			});;
			
//			$(targetId).$('.navbar a:not('+targetId+')').hover(function() {
//				$(this).css({
//					'background': '#555',
//					'color': '#eee'
//				});
//			})
//			
			
//			$(targetId+'::after').css({
//				'content': '',
//				'width': '300px',
//				'height': '300px',
//				'background': 'red',
//				'border': '2px solid #000'
//			});
			
//			console.log($('.navbar a:not('+targetId+')'));
			$('.navbar a:not('+targetId+')').css({
				'background': 'none',
				'color': '#555'
//				'color': '#337ab7'
			})
//				.hover(function() {
//				$(this).css({
//					'background': '#888',
//					'color': '#eee'
//				});
//			}).blur(function() {
//				$(this).css({
//					'background': 'none',
//					'color': '#555'
//				});
//			});
			
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 500, function() {
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