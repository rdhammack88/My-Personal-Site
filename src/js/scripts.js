$(document).ready(function() {
    function windowScroll() {
        /**
         * When window is scrolled past the top 50px, add class to navbar that changes nav colors
         */
        if ($('.navbar').offset().top > 50) {
            $('.fixed-top').addClass('top-nav-scroll');
        } else {
            $('.fixed-top').removeClass('top-nav-scroll');
        }

        /**
         * Since Contact form is NOT full height of window, the scroll to feature doesn't work adding the 'active' class
         * to the parent 'li'
         * This checks the window height to verify if the contact form is in view,
         * and adds the 'active' class to the 'contact-link' parent 'li'
         */
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

    windowScroll();

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
    $(function() {
        $('.nav-item a').bind('click', function(event) {
            // event.preventDefault();
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
