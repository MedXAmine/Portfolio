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
    });

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

 // toggle class .active
 $('#lihome').click(function () {
    $(".nav li").removeClass("active");//this will remove the active class from 
    $('#lihome').addClass('active');
});

 // toggle class .active
 $('#liabout').click(function () {
    $(".nav li").removeClass("active");//this will remove the active class from 
    $('#liabout').addClass('active');
});

 // toggle class .active
 $('#liprofile').click(function () {
    $(".nav li").removeClass("active");//this will remove the active class from 
    $('#liprofile').addClass('active');
});

 // toggle class .active
 $('#liresume').click(function () {
    $(".nav li").removeClass("active");//this will remove the active class from 
    $('#liresume').addClass('active');
});

 // toggle class .active
 $('#liportfolio').click(function () {
    $(".nav li").removeClass("active");//this will remove the active class from 
    $('#liportfolio').addClass('active');
});

 // toggle class .active
 $('#licontact').click(function () {
    $(".nav li").removeClass("active");//this will remove the active class from 
    $('#licontact').addClass('active');
});



/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

$('.item-wrap a').magnificPopup({

    type:'inline',
    fixedContentPos: false,
    removalDelay: 200,
    showCloseBtn: false,
    mainClass: 'mfp-fade'

 });

 $(document).on('click', '.popup-modal-dismiss', function (e) {
         e.preventDefault();
         $.magnificPopup.close();
 });










});