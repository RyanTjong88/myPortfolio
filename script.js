// Create object to hold everything {Namespacing}
const portfolio = {};

// Create a scroll down and up function
portfolio.scroll = () => {

    
    $("#aboutMe").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1500);
    });

    $("#skills").click(function() {
        $('html, body').animate({
            scrollTop: $("#skillsSec").offset().top
        }, 2000);
    });

    $("#portfolio").click(function() {
        $('html, body').animate({
            scrollTop: $("#portfolioSec").offset().top
        }, 2500);
    });

    $("#contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contactSec").offset().top
        }, 4000);
    });
}

portfolio.scrollHam = () => {
    // HAMBURGER
    $("#one").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1500);
    });

    $("#two").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#skillsSec").offset().top
        }, 2000);
    });

    $("#three").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#portfolioSec").offset().top
        }, 2500);
    });

    $("#four").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contactSec").offset().top
        }, 4000);
    });
}

portfolio.hamburger = () => {
    $(".hamburger").on('click', function() {
        $('.navTwo').addClass('show');
    })
}

portfolio.hamburgerClose = () => {
    $("li").on('click', function() {
        $('.navTwo').addClass('hide');

    })
}

// portfolio.animate = () => {
//     $(window).scroll(function() {
//         if ($(this).scrollTop()>10000)
//          {
//             $('.projects').show(2000);
//          }
//         else
//          {
//           $('.projects').show(2000);
//          }
//      });
// }

portfolio.init = () => {
    portfolio.scroll();
    portfolio.scrollHam();
    portfolio.hamburger();
    portfolio.hamburgerClose();
}

$(document).ready(function() {
    portfolio.init();
});