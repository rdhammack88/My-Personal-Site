document.addEventListener('DOMContentLoaded', function() {

	var main = document.getElementById('main');
	window.document.body.style.overflowY = 'hidden';
	
	console.log(main);
});






//$(function() {
//	
////	new CircleType(document.getElementById('name')).radius(190);
////	new CircleType(document.getElementById('title')).dir(-1).radius(190);
//	
////	if( document.body.width < 500 ) {
////		$('header').slideUp(2000);
////	}
//	
////	$('#projects, #contact').hide(); //, '#contact'
////	$('header span').hide();
//	
//	var nameHeading = $('header h1'),
//		occupationHeading = $('header h3');
//		
//	
//	var name = 'Dustin Hammack',
//		occupation = 'Full Stack Developer';
//	
//	//var namePrint = setInterval(function() {	
//		for(let i = 0; i < name.length; i += 1) {
//			//var namePrint = setInterval(function() {
//				//name[i].appendTo('nameHeading');
//			
//			//////////////////////////////
//				//console.log(name[i]);
//			/////////////////////////////
//			
//			
////				if( i === name.length - 1 ) {
////					clearInterval(namePrint);
////				}
//
//			//console.log(name[i] + ' line 25');
//			//if(i == name.length - 1) {
////				clearInterval(namePrint);
//			//}
//			//}, 1000)
//		}
//	//}, 1000)
//	
////	setTimeout(function() {
////		clearInterval(namePrint);
////	}, name.length * 1000)
//	
//	// ==========
//	
//	function hideShow(e) {
//		e.preventDefault();
//		$sectionToShow = '#' + $(this).text().toLowerCase();	//attr('href');
//		$(this).parent().siblings().removeClass('activeLink');
//		$(this).parent().addClass('activeLink');
//		$($sectionToShow).siblings().hide();
//		
//		if($sectionToShow === '#projects') {
////			$('#projects').slideDown(3000);
////			showContent('GET', 'projects.html', true);
//			$($sectionToShow).fadeIn(2000); // show(2000);
//			projectGallery();
//			
////		} else if($sectionToShow === '#contact') {
////			$('#contact').css({
//////				'transform': 'rotateX(280deg)',
//////				'transition': 'all 0.5s'
////				'transform': 'rotateX(0deg)',
////				'transition': 'all 4s'
////			});
//		} else {
//			$($sectionToShow).fadeIn(2000); //.slideDown(200); //.show();
//		}
//	}
//	
//	
//	
//	$navLinks = $('.nav li a');
//	$($navLinks).click(hideShow);
//	
//	// ===========
//	
////	$('button.navbar-toggle').click(function() {
////		$('section').toggleClass('collapsedMargin');
////	});
//	
//	
////	$('#gallery li a').click(function(e) {
//	$('#gallery').on('click', 'li a', function(e) {
//		e.preventDefault();
//	});
//	
//	$('#gallery').on('click', 'li', function(e) {
//		e.preventDefault();
//		
//		//////	Set variables	//////
//		///		Test Some		  ///
//		var projectInfoElements = $(this).clone(true).html();
//		
////		var img = $(this).clone(true).html().find('img');
//		var img = $(this).find('a').clone(true).html();
//		img = $.parseHTML(img);
//		console.log(img[0].src);
//		console.log(img);
//		
//		
////		img = HTML.parse(img);
////		console.log($.parseHTML(img));
//
//		/////	Set project Image Source    /////
//		var index = img[0].src.indexOf('-'); //.indexOf('e');
//		console.log(index);
//		
//		var src = img[0].src.slice(0, index + 1);
//		console.log(src);
//		img[0].src = src + 'XL.png';
//		console.log(img[0].src);
//		src = src + 'XL.png';
//		console.log(src);
//		
//		/////	Set project Title    /////		
//		var title = $(this).find('.title').clone(true).text();
////		console.log(title);
////		$('#gallery').append(title);
//		
//		
//		var finished = $(this).find('.finished').text();
//		var complete = finished == 'True' ? '' : 'This is not a finished project, and is still under development.';
//		
//		/////	Set project Description    /////
////		var description = '';
//		var description = $(this).find('.description').clone(true).html();
//		
//		/////	Set project Site Link    /////
//		var site = $(this).find('.site').attr('href');
//		console.log(site);
//
//		/////	Set project Repository Link    /////
//		var repository = $(this).find('.repository').attr('href');
//		console.log(repository);
//		
////		console.log(e.target.tagName);
//		var myOverlay = document.createElement('div');
//		myOverlay.id = 'overlay';
//		document.body.appendChild(myOverlay);
//		
//		
//		$('#overlay').css({
//			'width': window.innerWidth + 'px',
////			'max-width': '1000px',
//			'height': window.innerHeight + 'px',
//			'position': 'absolute',
//			'top': window.pageYOffset + 'px', //'50px',
//			'left': window.pageXOffset + 'px',
////			'left': (window.innerWidth - $('#overlay').width()) / 2,
//////			'margin': '0 auto',
////			'backgroundColor': 'rgba(0,0,0,.7)',
////			'cursor': 'pointer'
////			'transition': 'backgroundColor 2s'
//
//		});
//		
//
//		// set up overlay styles
////		myOverlay.style.position = 'absolute';
////		myOverlay.style.top = 0;
////		myOverlay.style.backgroundColor = 'rgba(0, 0, 0, .7)';
////		myOverlay.style.cursor = 'pointer';
//
//		// resize and position overlay
////		myOverlay.style.width = window.innerWidth + 'px';
////		myOverlay.style.height = window.innerHeight + 'px';
////		myOverlay.style.top = window.pageYOffset + 'px';
////		myOverlay.style.left = window.pageXOffset + 'px';
//		
//		
//		
////style='height:300px; width:600px;'  class='img-responsive'  col-md-push-0
//		myOverlay.innerHTML = "<div id='projectPopup' class='col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4'><img src='" + src + "' /><h2 class='col-xs-10 col-xs-offset-1 popupTitle'>" + title + "</h2><p class='col-xs-10 col-xs-offset-1 text-danger popupComplete'>" + complete + "</p><p class='col-xs-10 col-xs-offset-1 popupDescription'>Description: " + description + "</p><p class='col-xs-10 col-xs-offset-1'><a href='" + site + "' class='btn btn-primary btn-lg popupSite col-xs-12 col-sm-5' target='_blank'>View Project</a><a href='" + repository + "' class='btn btn-success btn-lg popupRepository col-xs-12 col-sm-5 col-sm-push-2' target='_blank'>View Code</a></p></div>";
//		
//		//	</p><p class='col-xs-10 col-xs-offset-1 popupRepository'>
//		
////		console.log($("#projectPopup").width());
////		console.log($("#projectPopup").height());
//		
//		
//		
//		$("#projectPopup").css({
//			'marginTop': (window.innerHeight - $("#projectPopup").height()) / 10
//		});
////			'display': 'block',
////			'width': '80%',
////			'maxWidth': '1000px',
////			'height': '80vh',
////			'margin': '0 auto',//'10%',
////			'position': 'absolute',
////			'top': '60px',
//////			'left': '60px'
//////			'left': (window.innerWidth - $(this).width())/2 + 'px'
////		});
////		
//////		centerElement($('#projectPopup'));
////		
////		$('#projectPopup img').css({
//////			'width': (window.innerWidth - this.width)/2 + 'px',
//////			'height': (window.innerHeight - this.height)/2 + 'px'
////			'width': '40%',
////			'maxHeight': '380px',
////			'marginLeft': $(this).width() / 2 + 'px'
////		});
//		
//		
//		
//		
////		centerElement(myOverlay);
//		
////		$('#overlay a').on('click', function(e) {
////			e.preventDefault();
////		})
//		
////				// create image element
////				var imageSrc = e.target.src;
////				var largeImage = document.createElement('img');
////				largeImage.id = 'largeImage';
////				
////				// for thumbnail & large images
////				// largeImage.src = imageSrc.substr(0, imageSrc.length - 7) + '.jpg';
////				largeImage.src = imageSrc;
////				largeImage.style.display = 'block';
////				largeImage.style.position = 'absolute';
////				
////				// wait until the image has loaded
////				largeImage.addEventListener('load', function() {
////					
////					// Resize if taller
////					if(this.height > window.innerHeight) {
////						this.ratio = window.innerHeight / this.height;
////						this.height = this.height * this.ratio;
////						this.width = this.width * this.ratio;
////					}
////					
////					// Resize if wider
////					if(this.width > window.innerWidth) {
////						this.ratio = window.innerWidth / this.width;
////						this.height = this.height * this.ratio;
////						this.width = this.width * this.ratio;
////					}
////					
////		
////					centerImage(this);
////					myOverlay.appendChild(largeImage);
////				}); // image has loaded
//				
////				largeImage
//				myOverlay.addEventListener('click', function(e) {
////					console.log(e.target.tagName);
//					if(myOverlay) { // && !(e.target.tagName === 'A')
//						window.removeEventListener('resize', window, false);
//						window.removeEventListener('scroll', window, false);
//						myOverlay.parentNode.removeChild(myOverlay);
//					}
//				}, false);
//				
//				window.addEventListener('scroll', function() {
//					if(myOverlay) {
//						myOverlay.style.top = window.pageYOffset + 'px';
//						myOverlay.style.left = window.pageXOffset + 'px';
//					}
//				}, false);
//				
//				window.addEventListener('resize', function() {
//					if(myOverlay) {
//						myOverlay.style.width = window.innerWidth + 'px';
//						myOverlay.style.height = window.innerHeight + 'px';
//						myOverlay.style.top = window.pageYOffset + 'px';
//						myOverlay.style.left = window.pageXOffset + 'px';
//						
////						centerElement($('#overlay')); //$('#overlay')
//					}
//				}, false);
//				
////			}
//		
//		function centerElement(theElement) {
//			var myDifX = (window.innerWidth - theElement.width)/2;
//			var myDifY = (window.innerHeight - theElement.height)/2;
//			
//			theElement.style.top = myDifY + 'px';
//			theElement.style.left = myDifX + 'px';
//			
//			return theElement;
//		}
//		
//		
//		
//		
//		
//		
//		
//		
//		
//		
//	});	// End of li click
//	
//	
///////	Photo Window Open/Close    /////
//$('#professionalPhoto').on('mouseout', function() {
////	console.log('mouse left');
//	$('#professionalPhotoLeft').css({
////		'transform': 'rotateY(-90deg)',
//		'transition': 'all 2s'
//	});
//	$('#professionalPhotoRight').css({
////		'transform': 'rotateY(-90deg)',
//		'transition': 'all 2s'
//	});
//});
//	
//	
////('#professionalPhoto').hover(
////	function() {
////		$('#professionalPhotoLeft').css({
//////		'transform': 'rotateY(90deg)',
////		'transition': 'all 1s'
////	});
////	$('#professionalPhotoRight').css({
//////			'transform': 'rotateY(-90deg)',
////		'transition': 'all 2s'
////	});
////	}, 
////	function() {
////		$('#professionalPhotoLeft').css({
//////			'transform': 'rotateY(-90deg)'
////			'transition': 'all 3s'
////		});
////		$('#professionalPhotoRight').css({
//////			'transform': 'rotateY(90deg)'
////			'transition': 'all 3s'
////		});
////	});
//	
//	
////$('#professionalPhoto').hover(
////	function() {
////		$('#professionalPhotoLeft').css({
//////			'transform': 'rotateY(90deg)',
////			'transition': 'all 1s'
////		});
////		$('#professionalPhotoRight').css({
//////			'transform': 'rotateY(-90deg)',
////			'transition': 'all 2s'
////		});
//////	}, 
//////	function() {
//////		$('#professionalPhotoLeft').css({
//////			'transform': 'rotateY(-90deg)'
////////			'transition': 'all 3s'
//////		});
//////		$('#professionalPhotoRight').css({
//////			'transform': 'rotateY(90deg)'
////////			'transition': 'all 3s'
//////		});
////	});
//	
//	
//	
//	
//	
//	
//	
//	
//function showContent(method, file, type) {
//	var xhr = new XMLHttpRequest();
//	xhr.open(method, file, type);
//	
//	xhr.onload = function() {
//		if(this.status === 200 & this.readyState === 4) {
//			var content = this.responseText;
//			
//			if(content) {
//				document.getElementById('mainContent').innerHTML = content;
//			} else {
//				return false;
//			}
//		}
//	}
//	xhr.send();
//}	
//	
////document.getElementById('aboutLink').addEventListener('click', function(e) {
////	e.preventDefault;
////	showContent('GET', 'aboutMe.php', true);
////});
////	
//////document.getElementById('projects').addEventListener
//////$('#projectsLink').on('click', function(e) {	//, '#projects'
//////	e.preventDefault();
//////	showContent('GET', 'projects.html', true);
//////	projectGallery();
//////});
////	
////document.getElementById('contactLink').addEventListener('click', function(e) {
////	e.preventDefault;
////	showContent('GET', 'contact.php', true);
////})
//
//
////showContent('GET', 'projects.php', true);
////projectGallery();
//
//
//
//	function projectGallery() {
//		/* SCRIPTS FOR PROJECTS CONTENT */
//		var items = $('#gallery li'),
//			itemsByTags = {};
////		console.log(items);
//
//		$('#projectNav').html('');
//		// Loop through tags
//		items.each(function(i){
////			console.log(i);
//			var elem = $(this);
//			var tags = elem.data('tags').split(',');
//			
////			console.log(tags);
//
//			// Add data attribute for quicksand
//			elem.attr('data-id', i);
//
//			$.each(tags, function(key, value){
//				// Remove whitespace
//				value = $.trim(value);
//
//				if(!(value in itemsByTags)){
//					// Add empty value
//					itemsByTags[value] = [];
//				}
//
//				// Add image to array
//				itemsByTags[value].push(elem);
//			});
//		});
//
////		console.log(itemsByTags);
//		
//		// Create "All Items" option
//		createList('All projects', items);
//
//		$.each(itemsByTags, function(k, v){
//			createList(k, v);
//		});
//
//		// Click Handler
////		$('#projectNav a').live('click', function(e){
//		$('#projectNav a').on('click', function(e){
//			var link = $(this);
//
//			// Active Class
//			link.addClass('active').siblings().removeClass('active');
//
//			$('#gallery').quicksand(link.data('list').find('li'));
//			e.preventDefault();
//		});
//
//		$('#projectNav a:first').click();
//
//	}
//	
//	
//		// Create the lists
//		function createList(text, items){
//			// Create empty ul
//			var ul = $('<ul>',{'class':'hidden'});
//
//			$.each(items, function(){
//				$(this).clone().appendTo(ul)
//			});
//			
////			console.error('Line: ')
//
//			// Add gallery div
//			ul.appendTo('#gallery');
//
//			// Create menu item
//			var a = $('<a>',{
//				html:text,
//				href:'#',
//				data:{list:ul}
//			}).appendTo('#projectNav');
//		}
//	
//	
//});
//
//
//
//
//
//
//
//
//
//
//
//
///*$($navLinks).click(function() {
//		hideShow();
//		console.log(this);
////		console.log(this.siblings())
////		$(this).parent().siblings().hasClass('active').removeClass('active');
////		$(this).addClass('active');
//	});*/
//	