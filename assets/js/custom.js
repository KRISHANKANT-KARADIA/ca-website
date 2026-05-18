/**
 * Exoplanet Custom JS
 *
 * @package Exoplanet
 *
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */

var stickyon = jQuery('#sticky-onoff').text().trim();
var a1 = stickyon.length;
window.onscroll = function () {
  if (a1 == 3) {
    myScrollNav();
  }
}

var navbar = document.getElementById("vw-sticky-menu");
var sticky = navbar.offsetTop;
function myScrollNav() {
  if (window.pageYOffset > sticky) {
    //alert(window.pageYOffset);
    navbar.classList.add("sticky");
    navbar.classList.add("stickynavbar");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("stickynavbar");
  }
}
jQuery(function ($) {

  jQuery('.search-icon > i').click(function () {
    jQuery(".serach_outer").slideDown(700);
  });

  jQuery('.closepop i').click(function () {
    jQuery(".serach_outer").slideUp(700);
  });
});

var menu_width = "";

var menu_width = "";
/* Mobile responsive Menu*/
jQuery(function ($) {

  // Open Sidebar
  $('#open_nav').click(function (e) {
    e.stopPropagation();

    $('#sidebar1').css({
      "width": "250px",
      "display": "block"
    });
  });

  // Close Button
  $('#close_nav').click(function () {
    $('#sidebar1').css({
      "width": "0",
      "display": "none"
    });
  });

  // Click Anywhere Outside Sidebar
  $(document).click(function (e) {

    if (
      !$(e.target).closest('#sidebar1').length &&
      !$(e.target).closest('#open_nav').length
    ) {

      $('#sidebar1').css({
        "width": "0",
        "display": "none"
      });
    }
  });

});

jQuery(document).ready(function () {
  jQuery('.archive .product a.added').removeClass("loading");
})

function setQueryParams(data_obj) {
  let url = new URL(window.location.href)
  let params = new URLSearchParams(url.search)

  const data_obj_keys = Object.keys(data_obj)

  for (let index = 0; index < data_obj_keys.length; index++) {
    const element = data_obj_keys[index]

    if ((element != 'base_url') && (element != 'values')) {

      const value = data_obj[element];

      if (Array.isArray(value)) {

        const joined_cat = value.join(',');
        params.set(element, joined_cat);
      } else {
        params.set(element, value);
      }
    }
  }

  const querySting = params.toString()

  window.history.replaceState(null, null, `?${querySting}`)
}





jQuery(document).ready(function ($) {
  const elem = jQuery('.invoice-box .chart');
  if (elem.length) {
    jQuery(elem).easyPieChart({
      size: 120,
      barColor: jQuery(elem).attr('data-scale-color'),
      trackColor: jQuery(elem).attr('data-track-color'),
      scaleLength: 0,
      lineWidth: 14,
      lineCap: "round",
      animate: {
        duration: 3000,
        enabled: true
      },
    });
  }

  const video = document.querySelector("#viewDemoVideo")

  if (document.querySelector("#viewDemoVideo") != null) {

    $('.timeline').hide();
    $('.timings').hide();

    $('.video-container .video-fullscreen').on("click", function (e) {
      e.preventDefault()
      video.requestFullscreen()
    });

    document.querySelector('.video-container .fa-backward').addEventListener('click', (e) => {
      e.preventDefault();
      const skipAmount = 5;
      video.currentTime = Math.max(0, video.currentTime - skipAmount);
    });

    document.querySelector('.video-container .fa-forward').addEventListener('click', (e) => {
      e.preventDefault();
      const skipAmount = 5;
      video.currentTime = Math.min(video.duration, video.currentTime + skipAmount);
    });

    video.addEventListener("timeupdate", () => {

      let curr = (video.currentTime / video.duration) * 100;

      let roundedCurTime = Math.round(video.currentTime);
      let roundedDurTime = Math.round(video.duration);

      let formattedCurNum = formatTime(roundedCurTime);
      let formattedDurNum = formatTime(roundedDurTime);

      $('.video-container .controls .timings').html('<div><span>' + formattedCurNum + '</span> / <span>' + formattedDurNum + '</span></div>');

      if (video.ended) {
        $('.video-container .video-controls .fa-pause').hide();
        $('.video-container .video-controls .fa-play').show();
      }
      document.querySelector('.inner').style.width = `${curr}%`
    })


    $("#viewDemoVideo, .video-controls i").bind("click", function () {
      var vid = $('#viewDemoVideo').get(0);
      var $bar = $('.timeline');
      var $timings = $('.timings');

      if (vid.paused) {
        vid.play();
        $('.video-container .video-controls .fa-pause').show();
        $('.video-container .video-controls .fa-play').hide();
        $bar.show();
        $timings.show();
      } else {
        vid.pause();
        $('.video-container .video-controls .fa-play').show();
        $('.video-container .video-controls .fa-pause').hide();
        $bar.hide();
        $timings.hide();
      }
    });
  }


})





jQuery('document').ready(function () {

  jQuery('.slider-nav').on('afterChange', function (event, slick, currentSlide) {
    updateActiveSlides();
  });

  jQuery(".search-toggle .search-icon").click(function (e) {
    jQuery(".search-container").show();
    e.stopPropagation();
  });

  jQuery(".search-container").click(function (e) {
    e.stopPropagation();
  });

  jQuery(document).click(function () {
    jQuery(".search-container").hide();
  });

  jQuery('.cat_toggle i').click(function () {
    jQuery('#cart_animate').toggle('slow');
  });

  jQuery(".progress-json .animated-progress .progress-width").each(function () {
    jQuery(this).animate({
      height: jQuery(this).attr("data-progress") + "%",
    }, 3000);
    jQuery(this).text(jQuery(this).attr("data-progress") + "%");
  });

  jQuery(window).on('scroll', function (e) {
    if (jQuery("#plans").offset() != undefined) {

      if (jQuery(window).scrollTop() >= (jQuery("#plans").offset().top - (jQuery(window).height()))) {
        if (!jQuery("#plans").hasClass("animated")) {
          jQuery('#plans .counter1-up').each(function () {
            jQuery(this).prop('Counter', 0).animate({
              Counter: jQuery(this).text()
            }, {
              duration: 10000,
              easing: 'swing',
              step: function (now) {
                jQuery(this).text(Math.ceil(now));
              }
            });
          });
          jQuery("#triggered").addClass("show");
          jQuery("#plans").addClass("animated");
        }
      }

      if (jQuery(window).scrollTop() >= (jQuery("#achieve").offset().top - (jQuery(window).height()))) {
        jQuery(".animated-progress .progress-width").each(function () {
          jQuery(this).animate({
            height: jQuery(this).attr("data-progress") + "%",
          }, 3000);
          jQuery(this).text(jQuery(this).attr("data-progress") + "%");
        });
      }
    }
  });


  var owl = jQuery('#case-study .owl-carousel');
  if (owl.length > 0) {
    owl.owlCarousel({
      margin: 25,
      nav: true,
      dots: false,
      autoplay: true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      center: true,
      loop: true,
      navText: [' <i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
      responsive: {
        0: {
          items: 1,
          stagePadding: 0
        },
        768: {
          items: 1,
          stagePadding: 100
        },
        1400: {
          items: 1,
          stagePadding: 200,
        },
        1600: {
          items: 1,
          stagePadding: 300,
        },
        1800: {
          items: 1,
          stagePadding: 500,
        },
      },
      autoplayHoverPause: true,
      mouseDrag: true
    });
  }

  var owl = jQuery('#feature .owl-carousel');
  if (owl.length > 0) {
    owl.owlCarousel({
      margin: 0,
      nav: false,
      autoplay: false,
      lazyLoad: false,
      autoplayTimeout: 3000,
      dots: false,
      loop: true,
      navText: ['<i class="fas fa-arrow-left" aria-hidden="true"></i>', '<i class="fas fa-arrow-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 1,
          autoplay: false,
        },
        576: {
          items: 1,
        },
        767: {
          items: 1,
        },
        768: {
          items: 2
        },
        1200: {
          items: 3
        },
      },
      autoplayHoverPause: true,
      mouseDrag: true
    });
  }

  var owl = jQuery('#testimonial .owl-carousel');
  if (owl.length > 0) {
    owl.owlCarousel({
      margin: 25,
      nav: true,
      autoplay: true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      dots: false,
      loop: true,
      navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 1,
        },
        576: {
          items: 1,
        },
        768: {
          items: 2,
          autoplay: false,
        },
        1200: {
          items: 2
        }

      },
      autoplayHoverPause: true,
      mouseDrag: true
    });
  }

  var owl = jQuery('#partner .owl-carousel');
  if (owl.length > 0) {
    owl.owlCarousel({
      margin: 25,
      nav: false,
      autoplay: true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      dots: false,
      loop: true,
      navText: ['<i class="fas fa-arrow-left" aria-hidden="true"></i>', '<i class="fas fa-arrow-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 2,
        },
        575: {
          items: 2,
        },
        576: {
          items: 3,
        },
        768: {
          items: 4
        },
        1200: {
          items: 7
        }

      },
      autoplayHoverPause: true,
      mouseDrag: true
    });
  }


  var owl = jQuery('#blog-news .owl-carousel');
  owl.owlCarousel({
    margin: 25,
    nav: false,
    dots: false,
    autoplay: false,
    // lazyLoad: true,
    autoplayTimeout: 3000,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1,
        autoplay: false,
      },
      600: {
        items: 1
      },
      700: {
        items: 2
      },
      900: {
        items: 2
      },
      1000: {
        items: 2
      },
      1200: {
        items: 3
      }
    },
    autoplayHoverPause: true,
    mouseDrag: true
  });


  var owl = jQuery('#partner .owl-carousel');
  if (owl.length > 0) {
    owl.owlCarousel({
      margin: 25,
      nav: false,
      autoplay: true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      dots: false,
      loop: true,
      navText: ['<i class="fas fa-arrow-left" aria-hidden="true"></i>', '<i class="fas fa-arrow-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 2,
        },
        575: {
          items: 2,
        },
        576: {
          items: 3,
        },
        768: {
          items: 4
        },
        1000: {
          items: 4
        },
        1366: {
          items: 5
        }
      },
      autoplayHoverPause: true,
      mouseDrag: true
    });
  }

  var owl = jQuery('#plans .owl-carousel');
  if (owl.length > 0) {
    owl.owlCarousel({
      margin: 25,
      nav: false,
      autoplay: false,
      lazyLoad: true,
      autoplayTimeout: 3000,
      dots: false,
      loop: true,
      navText: ['<i class="fas fa-arrow-left" aria-hidden="true"></i>', '<i class="fas fa-arrow-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 1,
          autoplay: false,
        },
        576: {
          items: 1,
        },
        768: {
          items: 1
        },
        992: {
          items: 2,
        },
        1366: {
          items: 2
        }
      },
      autoplayHoverPause: true,
      mouseDrag: true
    });
  }



  jQuery('a.accordion-toggle').click(function () {
    jQuery("i", this).toggleClass("fas fa-plus fas fa-times");
  });
  var interval = null;
  function show_loading_box() {
    jQuery(".eco-box").css("display", "none");
    clearInterval(interval);
  }

  // offer section

  jQuery('document').ready(function () {

    interval = setInterval(show_loading_box, 1000);
  });

  //  offer section
  interval = setInterval(show_loading_box, 1000);

  function flashcountdown($timer, mydate) {
    // Set the date we're counting down to
    var countDownDate = new Date(mydate).getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();
      // Find the distance between now an the count down date
      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Output the result in an element with id="timer"
      // console.log($timer.html())
      $timer.html("<div class='numbers'><div class='timer_days'>" + days + "</div><div class='nofont'>Day</div>" + "</div>" + "   " + "<div class='numbers'><div class='timer_days'>" + hours + "</div><div class='nofont'>Hrs</div>" + "</div>" + "   " + "<div class='numbers'><div class='timer_days'>" + minutes + "</div><div class='nofont'>Min</div>" + "</div>" + "   " + "<div class='numbers'><div class='timer_days'>" + seconds + "</div><div class='nofont'>Sec</div>" + "</div>");

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        $timer.html("Timer Up -EVENT EXPIRED");
      }
    }, 1000);
  }

  var mydate = jQuery('.date2').val();
  jQuery(".countdown2").each(function () {
    flashcountdown(jQuery(this), mydate);
  });


});




/* Counter */
jQuery(document).ready(function () {
  jQuery('#sliderBtn').click(function (event) {
    event.preventDefault();
    jQuery("#sliderModal").css("display", "block");
  });
  jQuery('.close-one').click(function () {
    jQuery(this).closest('.modal-new').css("display", "none");
  });

  // ------------ Scroll Top ---------------

  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  jQuery('#return-to-top').click(function () {      // When arrow is clicked
    jQuery('body,html').animate({
      scrollTop: 0                       // Scroll to top of body
    }, 1000);
  });
});

jQuery(function ($) {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 100) {
      $('.right_menu').addClass('scrolled');
    } else {
      $('.right_menu').removeClass('scrolled');
    }
    $('.main-header').css('background-position', 'center ' + (scrollTop / 2) + 'px');
  });

});

//At the document ready event
jQuery(function () {
  new WOW().init();
});

//also at the window load event
jQuery(window).on('load', function () {

  new WOW().init();
});

jQuery(document).ready(function () {
  AOS.init({
    once: true,
  });
});
