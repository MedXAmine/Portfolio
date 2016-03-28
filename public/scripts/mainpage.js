$(document).ready(function () {

    'use strict';


    /*  ----------------------------------------
         Tooltip Starter for Social Media Icons
        ----------------------------------------  */

    $('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

    $('.contact-details .social-media [data-toggle="tooltip"]').tooltip();

    $('#nav').localScroll({
        duration: 800
    });




    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        slideSpeed: 500,
        responsiveClass: true,
        pagination: !1,
        navigation: !1,
        rewindSpeed: 700,
        nav: false,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,

            },
            979: {
                items: 2,

            },
            1199: {
                items: 3,


            }
        }
    })

    var owl = $('#blogSlider');
    owl.owlCarousel();

    // Go to the next item
    $('#next').click(function () {
        owl.trigger('next.owl.carousel');
    });


    // Go to the previous item
    $('#prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });


});