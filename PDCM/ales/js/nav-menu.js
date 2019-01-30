(function($) {

    'use strict';

    $(document).ready(function() {

        var nav = $(this);
        nav.find('li ul').parent().addClass('has-sub');
        nav.find(".has-sub").prepend('<span class="submenu-button fas"></span>');
        $('.has-sub ul').hide();

        // :: Submenu open and close click event
        $('.has-sub > a,.submenu-button').on('click', function() {
            $(this).each(function() {
                if ($(this).siblings('ul').hasClass('open')) {
                    $(this).siblings('ul').removeClass('open').slideUp().parent('li').removeClass('active');
                } else {
                    $('.has-sub ul').removeClass('open').slideUp().parent('li').removeClass('active');
                    $(this).siblings('ul').addClass('open').slideDown().parent('li').addClass('active');
                }
            });
        });

        // :: Main menu open and close click event
        $('.nav-control').on('click', function() {
            if ($('body').hasClass('navbar-open')) {
                $('body.navbar-open').removeClass('navbar-open');
            } else {
                $('body.navbar-open').removeClass('navbar-open');
                $('body').addClass('navbar-open');
            }
        });

        // :: Menu selector and apply active and current class on menu
        var urlparam = window.location.pathname.split('/');
        var menuselctor = window.location.pathname;
        if (urlparam[urlparam.length - 1].length > 0)
            menuselctor = urlparam[urlparam.length - 1];
        else
            menuselctor = urlparam[urlparam.length - 2];

        $('nav .main-menu li').find('a[href="' + menuselctor + '"]').closest('li').addClass('active').parents().eq(1).addClass('current');
    });

})(jQuery);