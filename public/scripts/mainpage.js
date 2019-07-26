/*-----------------------------------------------------------------------------------
/*
/* Script for Resume
/*
-----------------------------------------------------------------------------------*/

/*----------------------------------------------------*/
/* Preloader
------------------------------------------------------ */
$(window).load(function () {

    $('.loader').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350);

});


$(document).ready(function () {

    'use strict';


    /*----------------------------------------------------*/
    /* Initializing jQuery Nice Scroll
    ------------------------------------------------------ */

    $("html").niceScroll({

        cursorcolor: "#11abb0", // Set cursor color
        cursorwidth: "8", // Sety cursor width
        cursorborder: "" // Set cursor border color, default left none
    });


    /*-----------------------------------------------------------*/
    /*         Bootstrap Tooltip Starter for Social Media Icons
    -------------------------------------------------------------*/

    $('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

    $('.contact-details .social-media [data-toggle="tooltip"]').tooltip();


    /*----------------------------------------------------*/
    /* Smooth Scrolling
    ------------------------------------------------------ */
    $('#nav').localScroll({
        duration: 800
    });

    /*----------------------------------------------------*/
    /* Appear Animation
    /*-----------------------------------------------------*/
    new WOW().init();


    /*----------------------------------------------------*/
    /* Parallax for Header Content
    ------------------------------------------------------*/
    $(window).scroll(function (e) {
        parallax();
    });

    
    function parallax() {
        var scrollPosition = $(window).scrollTop();
        $('.banner').css('margin-top', (0 - (scrollPosition * .8)) + 'px');
    }

    /*----------------------------------------------------*/
    /* Highlight the current section in the navigation bar
    ------------------------------------------------------*/

  /*  var sections = $("section");
    var navigation_links = $("#m-nav a");

    sections.waypoint({

        handler: function (event, direction) {

            var active_section;

            active_section = $(this);
            if (direction === "up") active_section = active_section.prev();

            var active_link = $('#navbar a[href="#' + active_section.attr("id") + '"]');

            navigation_links.parent().removeClass("active");
            active_link.parent().addClass("active");

        },
        offset: '35%'

    });*/

    /*----------------------------------------------------*/
    /*  On scroll blur header
    ------------------------------------------------------*/
    (function () {
        $(window).scroll(function () {
            var oVal;
            oVal = $(window).scrollTop() / 100;
            return $(".header-overlay").css("opacity", oVal);
        });

    }).call(this);

    /*----------------------------------------------------*/
    /*	Fade In/Out Primary Navigation
    ------------------------------------------------------*/

    $(window).on('scroll', function () {

        var h = $('header').height();
        var y = $(window).scrollTop();
        var nav = $('#m-nav');

        if ((y > h * .20) && (y < h) && ($(window).outerWidth() > 768)) {
            nav.fadeOut('fast');
        } else {
            if (y < h * .20) {
                nav.removeClass('opaque').fadeIn('fast');
            } else {
                nav.addClass('opaque').fadeIn('fast');
            }
        }

    });

    /*----------------------------------------------------*/
    /*  Owl Carousel
    /*----------------------------------------------------*/

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

    /*----------------------------------------------------*/
    /* Highlight the current section in the navigation bar
    ------------------------------------------------------*/
    // toggle class .active
    $('#lihome').click(function () {
        $(".nav li").removeClass("active"); //this will remove the active class from 
        $('#lihome').addClass('active');
    });

    // toggle class .active
    $('#liabout').click(function () {
        $(".nav li").removeClass("active"); //this will remove the active class from 
        $('#liabout').addClass('active');
    });

    // toggle class .active
    $('#liresume').click(function () {
        $(".nav li").removeClass("active"); //this will remove the active class from 
        $('#liresume').addClass('active');
    });

    // toggle class .active
    $('#liportfolio').click(function () {
        $(".nav li").removeClass("active"); //this will remove the active class from 
        $('#liportfolio').addClass('active');
    });

    // toggle class .active
    $('#licontact').click(function () {
        $(".nav li").removeClass("active"); //this will remove the active class from 
        $('#licontact').addClass('active');
    });



    /*----------------------------------------------------*/
    /*	Modal Popup
    ------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

        type: 'inline',
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