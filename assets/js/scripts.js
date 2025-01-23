/***************************************************
==================== JS INDEX ======================
****************************************************/


(function ($) {
  "use strict";


  // Preloader
  var preloader = document.getElementById("preloader");

  var bdy = document.querySelector("body");

  bdy.onload = function () {

    preloader.style.display = "none";

  }




  // Open Search bar

  var open_search = document.getElementById("open_search");

  if (open_search) {
    open_search.addEventListener("click", function () {
      document.querySelector('.header__search-icon').style.display = "none";
      document.querySelector('.header__search-close').style.display = "block";
      document.querySelector('.header__search-box').classList.add('show-box');
    });
  }


  // Close Search
  var close_search = document.getElementById("close_search");

  if (close_search) {
    close_search.addEventListener("click", function () {
      document.querySelector('.header__search-icon').style.display = "block";
      document.querySelector('.header__search-close').style.display = "none";
      document.querySelector('.header__search-box').classList.remove('show-box');
    });
  }



  // Sticky Menu

  var navbar = document.getElementById("sticky_header");

  if (navbar) {

    var sticky = navbar.offsetTop;

    window.onscroll = function () {

      if (window.pageYOffset >= sticky) {

        navbar.classList.add("sticky");

      } else {

        navbar.classList.remove("sticky");

      }

    };

  }



  // Header 2

  var header_2 = document.querySelector(".header__area-2");

  if (header_2) {

    window.onscroll = function () {

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        header_2.classList.add('sticky_2');

      } else {

        header_2.classList.remove('sticky_2');

      }

    }

  }





  // Header 3

  var header_3 = document.querySelector(".header__area-3");

  if (header_3) {

    window.onscroll = function () {

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        header_3.classList.add('sticky_3');

      } else {

        header_3.classList.remove('sticky_3');

      }

    }

  }





  // Testimonial Style Js

  const testimonial__slider = new Swiper('.testimonial__slider.swiper', {

    loop: true,

    autoplay: {

      delay: 2000,

    },

    navigation: {

      nextEl: '.next-btn',

      prevEl: '.prev-btn',

    },

    freeMode: true,

    speed: 3000,

    freeModeMomentum: false,

  });





  // Testimonial Style two Js

  const testimonial__client = new Swiper('.testimonial__client.swiper', {

    loop: true,

    slidesPerView: 2,

    spaceBetween: 28,

    freeMode: true,

    speed: 1000,

    freeModeMomentum: false,

    autoplay: {

      delay: 2000,

    },

    pagination: {

      el: ".swiper-pagination",

      clickable: true,

    },

    breakpoints: {

      0: {

        slidesPerView: 1,

      },

      1024: {

        slidesPerView: 2,

      },
      1534: {
        slidesPerView: 3,
      }

    },

  });





  // Testimonial 3

  const testimonial__slide = new Swiper('.testimonial__slider-3.swiper', {

    loop: true,

    slidesPerView: 3,

    spaceBetween: 30,

    centeredSlides: true,

    freeMode: true,

    speed: 1000,

    freeModeMomentum: false,

    autoplay: {

      delay: 2000,

    },

    pagination: {

      el: ".swiper-pagination",

      clickable: true,

    },

    breakpoints: {

      0: {

        slidesPerView: 1,

      },

      1024: {

        slidesPerView: 2,

      },

      1300: {

        slidesPerView: 3,

      },

    },

  });





  // Team Slider

  const team__slider = new Swiper('.team__slider.swiper', {

    loop: true,

    slidesPerView: 4,

    spaceBetween: 36,

    centeredSlides: true,

    freeMode: true,

    speed: 1000,

    freeModeMomentum: false,

    autoplay: {

      delay: 2500,

      disableOnInteraction: false,

    },

    breakpoints: {

      0: {

        slidesPerView: 1,

      },

      575: {

        slidesPerView: 2,

      },

      768: {

        slidesPerView: 3,

      },

      1024: {

        slidesPerView: 3,

      },

      1200: {

        slidesPerView: 4,

      },

    },

  });

  $('.team__slider').on('mouseenter', function (e) {

    team__slider.autoplay.stop();

  })

  $('.team__slider').on('mouseleave', function (e) {

    team__slider.autoplay.start();

  })




  // Team Slider 2

  const team__slider_2 = new Swiper('.team__slider-2.swiper', {

    loop: true,

    slidesPerView: 3,

    spaceBetween: 30,

    freeMode: true,

    speed: 1000,

    freeModeMomentum: false,

    autoplay: {

      delay: 2500,

      disableOnInteraction: false,

    },

    pagination: {

      el: ".swiper-pagination",

      dynamicBullets: true,

      clickable: true,

    },

    breakpoints: {

      0: {

        slidesPerView: 1,

      },

      640: {

        slidesPerView: 1,

      },

      768: {

        slidesPerView: 2,

      },

      1024: {

        slidesPerView: 3,

      },

    },

  });




  // Portfilio Slider

  const portfolio_slider = new Swiper('.portfolio__slider.swiper', {

    loop: true,

    slidesPerView: 4,

    spaceBetween: 30,

    centeredSlides: true,

    freeMode: true,

    speed: 1000,

    freeModeMomentum: false,

    pagination: {

      el: ".swiper-pagination",

      dynamicBullets: true,

      clickable: true,

    },

    breakpoints: {

      0: {

        slidesPerView: 1,

      },

      768: {

        slidesPerView: 2,

      },

      1024: {

        slidesPerView: 3,

      },

      1300: {

        slidesPerView: 4,

      },

    },

  })





  // Career Gallery Slider

  const career_gallery = new Swiper('.career-gallery__slider.swiper', {

    loop: true,

    slidesPerView: 4,

    spaceBetween: 30,

    centeredSlides: true,

    freeMode: true,

    speed: 1000,

    freeModeMomentum: false,

    autoplay: {

      delay: 2500,

      disableOnInteraction: false,

    },

    breakpoints: {

      0: {

        slidesPerView: 1,

      },

      768: {

        slidesPerView: 2,

      },

      1024: {

        slidesPerView: 4,

      },

    },

  })





  // Company logo Slider

  const career_logo = new Swiper('.company-logo__slider.swiper', {

    loop: true,

    spaceBetween: 30,

    slidesPerView: 5,

    freeMode: true,

    speed: 1000,

    freeModeMomentum: false,

    autoplay: {

      delay: 1,

      disableOnInteraction: true,

    },

    freeMode: true,

    speed: 5000,

    freeModeMomentum: false,

    breakpoints: {

      0: {

        slidesPerView: 2,

      },

      768: {

        slidesPerView: 3,

      },

      1024: {

        slidesPerView: 5,

      },

    },

  })





  // Mixitup

  var portfolio__list = document.querySelector('.portfolio__list');

  if (portfolio__list) {

    var mixer = mixitup('.portfolio__list');

  }



  // wow js

  var wow = new WOW({

    mobile: false,

  })

  wow.init();





  // Counter JS

  const counterUp = window.counterUp.default

  const callback = entries => {

    entries.forEach(entry => {

      const el = entry.target

      if (entry.isIntersecting && !el.classList.contains('is-visible')) {

        counterUp(el, {

          duration: 2000,

          delay: 16,

        })

        el.classList.add('is-visible')

      }

    })

  }



  const IO = new IntersectionObserver(callback, {

    threshold: 1

  })



  const els = document.querySelectorAll('.counter__number');

  els.forEach((el) => {

    IO.observe(el)

  });







  $(document).ready(function ($) {



    // Button Hover

    $('.btn-hover').on('mouseenter', function (e) {

      var x = e.pageX - $(this).offset().left;

      var y = e.pageY - $(this).offset().top;

      $(this).find('span').css({

        top: y,

        left: x

      })

    })

    $('.btn-hover').on('mouseout', function (e) {

      var x = e.pageX - $(this).offset().left;

      var y = e.pageY - $(this).offset().top;

      $(this).find('span').css({

        top: y,

        left: x

      })

    })





    // Home 2 Hero Slider

    var heros = new Swiper('.hero__slider', {

      loop: true,

      speed: 1000,

      effect: 'fade',

      navigation: {

        nextEl: '.next-btn',

        prevEl: '.prev-btn',

      },

      autoplay: {

        // delay: 5000,
        delay: 9000,

        disableOnInteraction: false,

      },

      autoplay: false

    })
  });




    // Testimonial 3

    const services__slide = new Swiper('.services__slider-3.swiper', {

      loop: true,
  
      slidesPerView: 1,
  
      spaceBetween: 30,
  
      centeredSlides: true,
  
      freeMode: true,
  
      speed: 1000,
  
      freeModeMomentum: false,
  
      // autoplay: {
  
      //   delay: 50000000000000,
  
      // },
  
      pagination: {
  
        el: ".swiper-pagination",
  
        clickable: true,
  
      },
  
      breakpoints: {
  
        0: {
  
          slidesPerView: 1,
  
        },

        575: {
          slidesPerView: 1,
          centeredSlides: false,
        },

        767: {
          slidesPerView: 1,
          centeredSlides: false,
        },
  
        1024: {
  
          slidesPerView: 1,
  
        },
  
        1300: {
  
          slidesPerView: 1,
  
        },
  
      },
  
    });


  // $(window).load(function() {
  //   if ($(".accordion-button ").hasClass("collapsed")) {
  //       $(".faq-gradient").removeClass("visible");
  //       $(".faq-img-overlay").removeClass("visible");
  //   }
  // });


    $('.icon-box.second').click(function(e){
      e.stopPropagation();

      let dropdown = $('.dropdown-menu.second');

      if (dropdown.hasClass('show')) {
        dropdown.css('display', 'block');
      } else{
        dropdown.css('display', 'none');
      }
    })

})(jQuery);







