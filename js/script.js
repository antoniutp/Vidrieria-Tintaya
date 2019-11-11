$(document).ready(function () {
    /*$.backstretch([
            '../img/Slide-1.jpg',
            '../img/Slide-2.jpg',
            '../img/Slide-3.jpg',
            '../img/Slide-4.jpg',
            '../img/Slide-5.jpg'
        ], {
        duration: 3000,
        fade: 750
    });*/

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 3000,
        autoWidth: true,
        autoplayHoverPause: true
    });

    var altura = $(window).height() - 25;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('header').addClass('sticky');
            $('nav').addClass('sticky-nav');
        } else {
            $('header').removeClass('sticky');
            $('nav').removeClass('sticky-nav');
        }
    });

    $(window).scroll(function () {
        var home = $("#Home").offset().top - 10;
        var products = $("#Products").offset().top- 10;
        var services = $("#Services").offset().top - 10;
        var about = $("#About").offset().top - 10;
        var portfolio = $("#Portfolio").offset().top - 10;
        var contact = $("#Contact").offset().top - 10;
        var footer = $("#footer").offset().top - 10;

        if ($(window).scrollTop() >= home) {
            $("#navInicio").css({
                "background-color": "transparent"
            });
            $("#navProducts").css({
                "background-color": "transparent"
            });
            $("#navServices").css({
                "background-color": "transparent"
            });
            $("#navAbout").css({
                "background-color": "transparent"
            });
            $("#navPortfolio").css({
                "background-color": "transparent"
            });
            $("#navContact").css({
                "background-color": "transparent"
            });
            $("#navFooter").css({
                "background-color": "transparent"
            });
        }

        if ($(window).scrollTop() >= products) {
            $("#navInicio").css({
                "background-color": "transparent"
            });
            $("#navProducts").css({
                "background-color": "#e74c3c"
            });
            $("#navServices").css({
                "background-color": "transparent"
            });
            $("#navAbout").css({
                "background-color": "transparent"
            });
            $("#navPortfolio").css({
                "background-color": "transparent"
            });
            $("#navContact").css({
                "background-color": "transparent"
            });
            $("#navFooter").css({
                "background-color": "transparent"
            });
        }

        if ($(window).scrollTop() >= services) {
            $("#navInicio").css({
                "background-color": "transparent"
            });
            $("#navProducts").css({
                "background-color": "transparent"
            });
            $("#navServices").css({
                "background-color": "#e74c3c"
            });
            $("#navAbout").css({
                "background-color": "transparent"
            });
            $("#navPortfolio").css({
                "background-color": "transparent"
            });
            $("#navContact").css({
                "background-color": "transparent"
            });
            $("#navFooter").css({
                "background-color": "transparent"
            });
        }

        if ($(window).scrollTop() >= about) {
            $("#navInicio").css({
                "background-color": "transparent"
            });
            $("#navProducts").css({
                "background-color": "transparent"
            });
            $("#navServices").css({
                "background-color": "transparent"
            });
            $("#navAbout").css({
                "background-color": "#e74c3c"
            });
            $("#navPortfolio").css({
                "background-color": "transparent"
            });
            $("#navContact").css({
                "background-color": "transparent"
            });
            $("#navFooter").css({
                "background-color": "transparent"
            });
        }

        if ($(window).scrollTop() >= portfolio) {
            $("#navInicio").css({
                "background-color": "transparent"
            });
            $("#navProducts").css({
                "background-color": "transparent"
            });
            $("#navServices").css({
                "background-color": "transparent"
            });
            $("#navAbout").css({
                "background-color": "transparent"
            });
            $("#navPortfolio").css({
                "background-color": "#e74c3c"
            });
            $("#navContact").css({
                "background-color": "transparent"
            });
            $("#navFooter").css({
                "background-color": "transparent"
            });
        }

        if ($(window).scrollTop() >= contact) {
            $("#navInicio").css({
                "background-color": "transparent"
            });
            $("#navProducts").css({
                "background-color": "transparent"
            });
            $("#navServices").css({
                "background-color": "transparent"
            });
            $("#navAbout").css({
                "background-color": "transparent"
            });
            $("#navPortfolio").css({
                "background-color": "transparent"
            });
            $("#navContact").css({
                "background-color": "#e74c3c"
            });
            $("#navFooter").css({
                "background-color": "transparent"
            });
        }

        if ($(window).scrollTop() >= footer) {
            $("#navInicio").css({
                "background-color": "transparent"
            });
            $("#navProducts").css({
                "background-color": "transparent"
            });
            $("#navServices").css({
                "background-color": "transparent"
            });
            $("#navAbout").css({
                "background-color": "transparent"
            });
            $("#navPortfolio").css({
                "background-color": "transparent"
            });
            $("#navContact").css({
                "background-color": "transparent"
            });
            $("#navFooter").css({
                "background-color": "#e74c3c"
            });
        }
    });
});
