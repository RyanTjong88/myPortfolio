// Create object to hold everything {Namespacing}
const portfolio = {};

// Create a scroll down and up function
portfolio.scroll = () => {


    $("#aboutMe").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1500);
    });

    $("#skills").click(function () {
        $('html, body').animate({
            scrollTop: $("#skillsSec").offset().top
        }, 2000);
    });

    $("#portfolio").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolioSec").offset().top
        }, 2500);
    });

    $("#contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contactSec").offset().top
        }, 4000);
    });
}

portfolio.scrollHam = () => {
    // HAMBURGER
    $("#one").click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1500);
    });

    $("#two").click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#skillsSec").offset().top
        }, 2000);
    });

    $("#three").click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#portfolioSec").offset().top
        }, 2500);
    });

    $("#four").click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contactSec").offset().top
        }, 4000);
    });
}

portfolio.hamburger = () => {
    $(".hamburger").on('click', function () {
        $('.navTwo').toggleClass('show');
    })
}

// FADEIN EFFECT
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const fadeInContents = document.querySelectorAll('.slide-in');

  function checkSlide() {
    fadeInContents.forEach(fadeInContent => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - fadeInContent.clientHeight / 3;
      // bottom of the image
      const imageBottom = fadeInContent.offsetTop + fadeInContent.clientHeight;
      const isHalfShown = slideInAt > fadeInContent.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        fadeInContent.classList.add('active');
      } else {
        fadeInContent.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', debounce(checkSlide));

portfolio.init = () => {
    portfolio.scroll();
    portfolio.scrollHam();
    portfolio.hamburger();
}

$(document).ready(function () {
    portfolio.init();
});