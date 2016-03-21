

    $(document).ready(function(){

    'use strict';


    /*  ----------------------------------------
         Tooltip Starter for Social Media Icons
        ----------------------------------------  */

    $('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

    $('.contact-details .social-media [data-toggle="tooltip"]').tooltip();

    $('#nav').localScroll({duration:800});



 $("#blogSlider").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        slideSpeed: 500,
        pagination: !1,
        navigation: !1,
        rewindSpeed: 700
    });

    var owl = $('#blogSlider');
    owl.owlCarousel();

    // Go to the next item
    $('#next').click(function() {
    owl.trigger('next.owl.carousel');
     })


    // Go to the previous item
    $('#prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})


});