// Magnific Popup
$(document).ready(function() {
  $('.popup-video').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',

      patterns: {
        youtube: {
          index: 'youtube.com/', //
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        }
      },

      srcAction: 'iframe_src',
    }
  });
});



// Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
});
