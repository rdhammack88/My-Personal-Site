/**
 * When window is scrolled past the top 50px, add class to navbar that changes nav colors
 */
$(window).scroll(function() {
    if($('.navbar').offset().top > 50) {
        $('.fixed-top').addClass('top-nav-scroll');
    } else {
        $('.fixed-top').removeClass('top-nav-scroll');
    }
});

/**
 * When 'Hamburger' icon is clicked, add 'rotated' animation class to button, that changes 'Hamburger' to a close 'X' icon
 */
$('.navbar-toggler').click(function() {
    $('.navbar-toggler-icon').toggleClass('rotated');
});

/**
 * When 'Nav' links are clicked, add to the parent 'li - list item' class 'active'
 */
$('a.nav-link').click(function() {
    $(this).parent('li').siblings('li').removeClass('active');
    $(this).parent('li').addClass('active');
})

/**
 * Add smooth scroll affect to page when 'Nav' links are clicked, so that the page smoothly scrolls to referenced element in page
 */
$(function() {
    $('.nav-item a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        // event.preventDefault();
    });
});

// $('.project-container').hover(function() {
//     $(this).children('.project-description').toggleClass('d-none');
// })

// On click of each project, display an overlay //
$('.project-details').click(function(e) {
    e.preventDefault();
    let projectName = $(this).parents('.project-container').attr('data-project-name');

    $('.overlay#'+projectName).removeClass('d-none');
    
    // $('.overlay#'+projectName).css({
    //     'display': 'block !important'
    // });
});

// On click of close for project-modal-overlay //
$('.close').click(function(e) {
    $('.overlay').addClass('d-none');
});