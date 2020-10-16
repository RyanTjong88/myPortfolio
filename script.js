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

// portfolio.hamburger = () => {
//     $(".hamburger").click(function() {

//     })
// }

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
//     portfolio.animate();
}

$(document).ready(function() {
    portfolio.init();
});