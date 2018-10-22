$(document).ready(function() {
    /**
     * When window is scrolled past the top 50px, add class to navbar that changes nav colors
     */
    function fixNavbar() {
        if ($('.navbar').offset().top > 50) {
            $('.fixed-top').addClass('top-nav-scroll');
        } else {
            $('.fixed-top').removeClass('top-nav-scroll');
        }
    }

    /**
     * Since Contact form is NOT full height of window, the scroll to feature doesn't work adding the 'active' class
     * to the parent 'li'
     * This checks the window height to verify if the contact form is in view,
     * and adds the 'active' class to the 'contact-link' parent 'li'
     */
    function activateContactLink() {
        if (
            $(document).height() - $(window).height() <=
            $(window).scrollTop()
        ) {
            $('#contact-link')
                .parent('li')
                .addClass('active')
                .siblings('li.nav-item')
                .removeClass('active');
        } else if (
            $(window).scrollTop() <= 2300 &&
            $(window).scrollTop() >= $('.projects').offset().top
        ) {
            $('#projects-link')
                .parent('li')
                .addClass('active');
            $('#contact-link')
                .parent('li')
                .removeClass('active');
        }
    }

    /**
     * When page scrolls to skills-container section,
     * animate the progress of each skill.
     * When page scrolls away from skills-container,
     * set progress back to 0.
     */
    function animateProgress() {
        /** if window is past skills section */
        /** else if window is above skills section */
        /** else if window is centered on skills section */
        if (
            $(window).scrollTop() >=
            $('.skills-container').offset().top +
                $('.skills-container').height()
        ) {
            $('.progress-ring circle:nth-of-type(2)').removeClass();
        } else if (
            $(window).scrollTop() <=
            $('.about-wrapper').offset().top - $(window).height() / 2
        ) {
            $('.progress-ring circle:nth-of-type(2)').removeClass();
            // } else if (
            //     $('.skills-container').offset().top -
            //         $(window).height() +
            //         $('.skills-container').height() / 2 <=
            //     $(window).scrollTop()
            // ) {
        } else {
            animatedClasses = [
                'html-progress-ring',
                'css-progress-ring',
                'javascript-progress-ring',
                'php-progress-ring'
            ];
            $('.progress-ring circle:nth-of-type(2)').each(function(i) {
                $(this).addClass(animatedClasses[i]);
            });
            // $('.skills-container').show();
            $('.skills-container').addClass('animateFadeIn');
            // .css({
            //     animation: 'fadeIn 3s ease'
            // });
        }
    }

    /**
     * With windowScroll function,
     * call fixNavbar(), activateContactLink(), animateProgress()
     * To help with keeping code more functional
     */
    function windowScroll() {
        fixNavbar();
        activateContactLink();
        animateProgress();
    }

    /**
     * Invoke windowScroll() function immediately on page load
     */
    windowScroll();
    // $('.skills-container').hide();
    // $('.skills-container').css({
    //     opacity: 0
    // });

    // $('.skills-container').show().fadeIn(3000);
    // $('.skills-container').css('opacity', '0');
    // $('.skills-container').hide();
    // $('.skills-container').hide();
    // $('.skills-container').hide();
    //.fadeOut(2000);
    //.css('opacity', '0');

    /**
     * When window is scrolled, Call the windowScroll() function to execute
     */
    $(window).on('scroll', windowScroll);

    /**
     * When 'Hamburger' icon is clicked, add 'rotated' animation class to button,
     * that changes 'Hamburger' to a close 'X' icon
     */
    $('.navbar-toggler').click(function() {
        $('.navbar-toggler-icon').toggleClass('rotated');
    });

    /**
     * When 'Nav' links are clicked, add to the parent 'li - list item' class 'active'
     */
    $('a.nav-link').click(function() {
        $(this)
            .parent('li')
            .siblings('li')
            .removeClass('active');
        $(this)
            .parent('li')
            .addClass('active');
    });

    /**
     * Add smooth scroll affect to page when 'Nav' links are clicked,
     * so that the page smoothly scrolls to referenced element in page
     */
    $('.nav-item a, footer .top a').bind('click', function(event) {
        event.preventDefault();
        var $anchor = $(this);
        $('html, body')
            .stop()
            .animate(
                {
                    scrollTop: $($anchor.attr('href')).offset().top
                },
                1500,
                'easeInOutExpo'
            );
    });

    /**
     * On click of each project, display an overlay
     */
    $('.project-details').click(function(e) {
        e.preventDefault();
        let projectName = $(this)
            .parents('.project-container')
            .attr('data-project-name');
        $('.overlay#' + projectName)
            .removeClass('d-none')
            .children('.project-model')
            .fadeIn(3000);
    });

    /**
     * On click of close for project-modal-overlay
     */
    $('.close').click(function(e) {
        $('.overlay')
            .addClass('d-none')
            .children('.project-model')
            .fadeOut(3000);
    });
});
