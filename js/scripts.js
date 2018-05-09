document.addEventListener('DOMContentLoaded', function() {
	// Function to test screen width and enabel/disable scroll //
	function hiddenOverflow() {
		if(window.innerWidth > 1024) {
			window.document.body.style.overflowY = 'hidden';
		} else {
			window.document.body.style.overflowY = 'auto';
		}
	}
	// Immediately invoke function to test screen width and enabel/disable scroll //
	hiddenOverflow();
	// Add event listener to check for resize of screen to enabel/disable scroll //
	window.addEventListener('resize', hiddenOverflow);

	// On click of hamburger icon, animate icon to X close button icon //
	$('.collapsed-nav').click(function() {
		$('span.bar-icon').toggleClass('rotated');
		$('.navbar').toggleClass('display');
		
		
	});
	
	$('.collapsed-nav ~ .navbar li a').click(function() {
		$('.navbar').toggleClass('display');
		$('span.bar-icon').toggleClass('rotated');
	});
	
	// On click of each project, display an overlay //
	$('.project-details').click(function(e) {
		e.preventDefault();
		var projectName = $(this).parents('.project-container').attr('data-project-name');
		
		$('.overlay#'+projectName).css({
			'display': 'block'
		});
	});
	
	// On click of close for project-modal-overlay //
	$('.close').click(function(e) {
		$('.overlay').hide();
	});
	
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
			}).addClass('active');

			$('.navbar a:not('+targetId+')').css({
				'background': 'none',
				'color': '#555'
			}).removeClass('active');

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
					// Checking if the target was focused
					if ($target.is(":focus")) {
						return false;
					} else {
						// Adding tabindex for elements not focusable
						$target.attr('tabindex','-1');
						// Set focus again
						$target.focus();
					};
				});
			}
		}
	});
});


/////	Scrolls of window tests		/////
/* //Scroll with mousewhell -- WORKING 
$(window).on('mousewheel DOMMouseScroll keydown', function(e) {
//		var dir, showEl,
//		  amt = window.innerHeight;
//		var prevEl = $('.active').parent('li').prev('li').children('a').attr('href');
//		var nextEl = $('.active').parent('li').next('li').children('a').attr('href');
//		
//		console.log(prevEl);
//		console.log(nextEl);
//		console.log(e.type);
//		console.log(e)
//		console.log(e.originalEvent.wheelDelta);
//		console.log(e.originalEvent.detail);
//
//		e.preventDefault();
//		if(e.type === 'mousewheel') {
////			dir = e.originalEvent.wheelDelta > 0 ? '-=' : '+=';
//			showEl = e.originalEvent.wheelDelta > 0 ? prevEl : nextEl;
//		}
//		else {
////			dir = e.originalEvent.detail < 0 ? '-=' : '+=';
//			showEl = e.originalEvent.detail < 0 ? prevEl : nextEl;
//		}
//		
//		if(e.type === 'keydown' && e.keyCode === 38) {
//			showEl = prevEl;
//		} else if(e.type === 'keydown' && e.keyCode === 40) {
//			showEl = nextEl;
//		} else if(e.type === 'keydown') {
//			return false;
//		}
//
//		//Scroll with mousewhell -- WORKING 
//		$('html, body').animate({
////			scrollTop: dir + amt
//			scrollTop: $(showEl).offset().top
//		},1000); //stop()
//		
//		$('a[href="'+showEl+'"]').click(); //.stop(1000);
	});
*/
	
/*		
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
*/
	
/*
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
*/