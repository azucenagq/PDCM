/*-----------------------------------------------------------------------------------

    Theme Name: Ales - Digital Agency Template
    Description: Digital Agency Template
    Author: chitrakootweb
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
    01. Add class reveal for scroll to top
    02. Click event to scroll to top
    03. Wow animation - on scroll
    04. Resize function
    05. FullScreenHeight function
    06. ScreenFixedHeight function
    07. FullScreenHeight and screenHeight with resize function
    08. CountDown for coming soon page
    09. Owl carousel active code
           
    ---------------------------------- */   

(function($) {

    'use strict';

    var $window = $(window);

    // 01. Add class reveal for scroll to top
    $window.on('scroll', function() {
        if ($window.scrollTop() > 600) {
            $('#back-to-top').addClass('reveal');
        } else {
            $('#back-to-top').removeClass('reveal');
        }
    });

    // 02. Click event to scroll to top
    $('#back-to-top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // 03. Wow animation - on scroll
    var wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true // default
    })
    wow.init();

    // 04. Resize function
    $window.resize(function(event) {
        setTimeout(function() {
            SetResizeContent();
        }, 500);
        event.preventDefault();
    });

    // 05. FullScreenHeight function
    function fullScreenHeight() {
        var element = $(".full-screen");
        var $minheight = $window.height();
        element.css('min-height', $minheight);
    }

    // 06. ScreenFixedHeight function
    function ScreenFixedHeight() {
        var $headerHeight = $("header").height();
        var element = $(".screen-height");
        var $screenheight = $window.height() - $headerHeight;
        element.css('height', $screenheight);
    }

    // 07. FullScreenHeight and screenHeight with resize function
    function SetResizeContent() {
        fullScreenHeight();
        ScreenFixedHeight();
    }

    SetResizeContent();

    // === when document ready === //
    $(document).ready(function() {

        // 08. CountDown for coming soon page
        $(".countdown").countdown({
            date: "01 Jan 2021 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
            format: "on"
        });

        // 09. Owl carousel active code
        $(".carousel-style1").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            nav: false,
            dots: true
        });

        $(".home-slider-banner").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            nav: true,
            dots: true,
            navText: ['<span class="fas fa-angle-left text-base-color text-medium-large"></span>', '<span class="fas fa-angle-right text-base-color text-medium-large"></span>']
        });

    });

})(jQuery);
