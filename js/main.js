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


function showQuestionText(index) {
  var btnQuestion = document.getElementsByClassName('question-text');
  if (btnQuestion[index].style.display == "block") {
    btnQuestion[index].style.display = "none";
  } else {
    btnQuestion[index].style.display = "block"
  }

  for (var i = 0; i < btnQuestion.length; i++) {
    if (index != i) {
      btnQuestion[i].style.display = "none";
    }
  }
}
