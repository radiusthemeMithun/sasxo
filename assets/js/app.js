(function ($) {
  "use strict";

  /*===================================
  //Fixed Header
  =====================================*/
  $(window).on("scroll", function () {
    if ($("header").hasClass("sticky-on")) {
      let stickyPlaceHolder = $("#sticky-placeholder"),
        menu = $("#navbar-wrap"),
        menuH = menu.outerHeight(),
        topbarH = $("#topbar-wrap").outerHeight() || 0,
        targrtScroll = topbarH,
        header = $("header");
      if ($(window).scrollTop() > targrtScroll) {
        header.addClass("sticky");
        stickyPlaceHolder.height(menuH);
      } else {
        header.removeClass("sticky");
        stickyPlaceHolder.height(0);
      }
    }
  });


  /*===================================
  //Fixed popup
  =====================================*/

  $(window).on('scroll', function() {
    var height = $(window).scrollTop();
    var $fixedPopup = $('.fixed-popup-wrap');

    if($fixedPopup.length > 0) {
      if (height < 100) {
        $fixedPopup.removeClass('scrolling');
      } else {
        $fixedPopup.addClass('scrolling');
      }
    }
  });

  /*=====================================
  //	Jquery Serch Box
  ===================================*/
  $('a[href="#template-search"]').on("click", function (event) {
    event.preventDefault();
    let target = $("#template-search");
    target.addClass("open");
    setTimeout(function () {
      target.find("input").focus();
    }, 600);
    return false;
  });

  $("#template-search, #template-search button.close").on(
    "click keyup",
    function (event) {
      if (
        event.target === this ||
        event.target.className === "close" ||
        event.keyCode === 27
      ) {
        $(this).removeClass("open");
      }
    }
  );

  /*-------------------------------------
    Mobile Menu Toggle
    -------------------------------------*/
    $(".sidebarBtn").on("click", function (e) {
      e.preventDefault();
      if ($(".rt-slide-nav").is(":visible")) {
        $(".rt-slide-nav").slideUp();
        $("body").removeClass("slidemenuon");
      } else {
        $(".rt-slide-nav").slideDown();
        $("body").addClass("slidemenuon");
      }
    });
  
    /*-------------------------------------
        Sidebar Menu Control
      -------------------------------------*/
    $(".sidebar-toggle").on("click", function() {
        window.setTimeout(function() {
            $("#wrapper").toggleClass("sidebar-collapsed");
        }, 500);
    });
    /*-------------------------------------
        Sidebar Menu Control Mobile
      -------------------------------------*/
    $(".sidebar-toggle-mobile").on("click", function() {
        $("#wrapper").toggleClass("sidebar-collapsed-mobile");
        if ($("#wrapper").hasClass("sidebar-collapsed")) {
            $("#wrapper").removeClass("sidebar-collapsed");
        }
    });
  


  /*-------------------------------------
      Mobile Menu Dropdown
    -------------------------------------*/
  let rtMobileMenu = $(".offscreen-navigation .menu");

  if (rtMobileMenu.length) {
    rtMobileMenu.children("li").addClass("menu-item-parent");
    rtMobileMenu.find(".menu-item-has-children > a").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("opened");
      let n = $(this).next(".sub-menu"),
        s = $(this).closest(".menu-item-parent").find(".sub-menu");
      rtMobileMenu
        .find(".sub-menu")
        .not(s)
        .slideUp(250)
        .prev("a")
        .removeClass("opened"),
        n.slideToggle(250);
    });
    rtMobileMenu
      .find(".menu-item:not(.menu-item-has-children) > a")
      .on("click", function (e) {
        $(".rt-slide-nav").slideUp();
        $("body").removeClass("slidemenuon");
      });
  }

  /*===================================
   // Section background image 
  ====================================*/
  imageFunction();

  function imageFunction() {
    $("[data-bg-image]").each(function () {
      let img = $(this).data("bg-image");
      $(this).css({
        backgroundImage: "url(" + img + ")",
      });
    });
  }
    /*=================================
   // counter up
   ==================================*/
   let counter = true;
   $(".counter-appear").appear();
   $(".counter-appear").on("appear", function () {
     if (counter) {
       // Only number counter
       $(".counterUp").each(function () {
         let $this = $(this);
         jQuery({
           Counter: 0,
         }).animate(
           {
             Counter: $this.attr("data-counter"),
           },
           {
             duration: 1000,
             easing: "swing",
             step: function () {
               let num = Math.ceil(this.Counter).toString();
               if (Number(num) > 99999999) {
                 while (/(\d+)(\d{8})/.test(num)) {
                   num = num.replace(/(\d+)(\d{8})/, "");
                 }
               }
               $this.html(num);
             },
           }
         );
       });
 
       // with skill bar
       $(".skill-per").each(function () {
         let $this = $(this);
         let per = $this.attr("data-per");
         $this.css("width", per + "%");
         $({ animatedValue: 0 }).animate(
           { animatedValue: per },
           {
             duration: 500,
             step: function () {
               $this.attr("data-per", Math.floor(this.animatedValue) + "%");
             },
             complete: function () {
               $this.attr("data-per", Math.floor(this.animatedValue) + "%");
             },
           }
         );
       });
 
       counter = false;
     }
   });



  /*=====================================
  // Screenshot-slider
  ======================================*/

  var swiper1 = new Swiper(".screenshot-inner-slider", {
    spaceBetween: 1,
    slidesPerView: 3,
    slideToClickedSlide: true,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 0,
    // autoplay: true,
    // speed: 500,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 5,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /*=====================================
  // Testimonial-slider
  ======================================*/

  var swiper2 = new Swiper(".testimonial-slider-wrap", {
    spaceBetween: 24,
    slidesPerView: 3,
    loop: true,
    //  autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
    //   speed: 800,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*=====================================
  // testimonial-slider
  ======================================*/

if ($(".testimonial-slider-wrap-2")) {
  $(".testimonial-slider-wrap-2").each(function () {
    let __swiperSlider = $(this)[0];
    let btnPrev = $(this)
      .closest(".rtMainWrap")
      .find(".swiper-button-next")[0];
    let btnNext = $(this)
      .closest(".rtMainWrap")
      .find(".swiper-button-prev")[0];
    new Swiper(__swiperSlider, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 24,
      slideToClickedSlide: true,
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      // },
      // speed: 800,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: btnPrev,
        prevEl: btnNext,
      },
    });
  });
}


  /*=====================================
  // Testimonial-slider
  ======================================*/

  var swiper4 = new Swiper(".testimonial-slider-wrap-3", {
    spaceBetween: 60,
    slidesPerView: 3,
    loop: true,
    //  autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
    //   speed: 800,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
    /*=====================================
  // Testimonial-slider
  ======================================*/

  var swiper6 = new Swiper(".testimonial-slider-wrap-4", {
    spaceBetween: 30,
    slidesPerView: 2,
    loop: true,
    //  autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
    //   speed: 800,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /*=====================================
  // Testimonial-slider
  ======================================*/

  var swiper8 = new Swiper(".testimonial-slider-wrap-5", {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
     autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 800,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/*=====================================
  // project-slider
  ======================================*/

  var swiper3 = new Swiper(".project-inner-wrap", {
    spaceBetween: 40,
    slidesPerView: 4,
    loop: true,
     autoplay: {
        delay: 5000,
      },
      speed: 800,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  /*=====================================
  // project-slider
  ======================================*/

  var swiper5 = new Swiper(".service-slider-1", {
    spaceBetween: 60,
    slidesPerView: 3,
    loop: true,
     autoplay: {
        delay: 5000,
      },
      speed: 800,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });
  

  /*=====================================
  // Service-slider
  ======================================*/

  if ($(".service-slider-1")) {
    $(".service-slider-1").each(function () {
      let __swiperSlider = $(this)[0];
      let btnPrev = $(this)
        .closest(".rtMainWrap")
        .find(".swiper-button-next")[0];
      let btnNext = $(this)
        .closest(".rtMainWrap")
        .find(".swiper-button-prev")[0];
      new Swiper(__swiperSlider, {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 60,
        slideToClickedSlide: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        speed: 800,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 3,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
  }

  /*=====================================
  // Service-slider
  ======================================*/

  var swiper7 = new Swiper(".service-slider-wrap", {
    spaceBetween: 20,
    slidesPerView: 3,
    loop: true,
    //  autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
    //   speed: 800,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

    /*=====================================
  // Portfolio-slider
  ======================================*/

  var swiper7 = new Swiper(".ayo-portfolio-slider", {
    spaceBetween: 24,
    slidesPerView: 4,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

    /*=====================================
  // product
  ======================================*/
  let rtThumbnailTliderThumbStyle1 = new Swiper(
    ".rt-thumbnail-slider-thumb-style-1", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 3,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        speed: 800,
        // direction: "vertical",
        breakpoints: {
          0: {
            slidesPerView: 2,
            direction: 'horizontal',
          },
          480: {
            slidesPerView: 2,
            direction: 'horizontal',
          },
          768: {
            slidesPerView: 3,
            direction: 'horizontal',
          },
          992: {
            slidesPerView: 4,
            direction: 'horizontal',
          },
          1200: {
            slidesPerView: 3,
            direction: 'vertical',
          },
        },
    }
);

let rtThumbnailTliderStyle1 = new Swiper(".rt-thumbnail-slider-style-1", {
    loop: true,
    spaceBetween: 10,
    speed: 800,
    thumbs: {
        swiper: rtThumbnailTliderThumbStyle1,
    },
});

/*-------------------------------------
       Input Quantity Up & Down activation code
-------------------------------------*/
$("#quantity-holder,#quantity-holder2")
.on("click", ".quantity-plus", function() {
    let $holder = $(this).parents(".quantity-holder");
    let $target = $holder.find("input.quantity-input");
    let $quantity = parseInt($target.val(), 10);
    if ($.isNumeric($quantity) && $quantity > 0) {
        $quantity = $quantity + 1;
        $target.val($quantity);
    } else {
        $target.val($quantity);
    }
})
.on("click", ".quantity-minus", function() {
    let $holder = $(this).parents(".quantity-holder");
    let $target = $holder.find("input.quantity-input");
    let $quantity = parseInt($target.val(), 10);
    if ($.isNumeric($quantity) && $quantity >= 2) {
        $quantity = $quantity - 1;
        $target.val($quantity);
    } else {
        $target.val(1);
    }
});


  /* ===================================
    Data-list
  ======================================= */

  $("[data-list-hover]").hover(function () {
    var t = $(this).attr("data-list-hover");
    $("[data-list-img]").removeClass("active"), $('[data-list-img="'.concat(t, '"]')).addClass("active");
});

/* ===================================
   PopUp
  ======================================= */

var yPopup = $(".play-btn");
if (yPopup.length) {
    yPopup.magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
}

/* ===================================
   audio
  ======================================= */
$(function() {
    $('audio').audioPlayer();
  });
  /*===================================
   Portfolio move title with cursor
  ======================================= */
function mousemove_portfolio_hover_effect() {
  if (jQuery( window ).width() > 0 ) {
      if ( jQuery('#wrapper').find(".rt-portfolio-default").length > 0 ) {
          jQuery(".rt-portfolio-default .portfolio-item").each(function() {
              let $Purpose = jQuery(this);
              let $PurposeInner = $Purpose.find('.port-hover-effect');
              $Purpose.mousemove(function(event){
                  let y = event.pageY - $Purpose.offset().top + 10;
                  let x = event.pageX - $Purpose.offset().left + 10;
                  $PurposeInner.css({'top': y,'left': x,'bottom': "auto",'right': "auto",'opacity': 1});
              })
              .mouseleave(function() {
                  $PurposeInner.css({'top': 'auto','left': 10,'bottom': 10,'right': "auto",'opacity': 0});
              });
          });
      }
  }
}
$(function() {
  mousemove_portfolio_hover_effect();
});

//Intersection Observer
if (!!window.IntersectionObserver) {
  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("active-animation");
              observer.unobserve(entry.target);
          }
      });
  }, {
      rootMargin: "0px 0px -100px 0px"
  });
  document.querySelectorAll('.has-animation').forEach(block => {
      observer.observe(block)
  });
  } else {
      document.querySelectorAll('.has-animation').forEach(block => {
          block.classList.remove('has-animation')
      });
  }

		
/* ===================================
    Back To Top
  ======================================= */
  var minSpeed 		= 500;
  var maxSpeed		= 1500;
  $(".ayo-bc-totop").off().on('click', function(e) {
    e.preventDefault();
    var speed		= ($(window).scrollTop()-$(window).height())/2;
    if(speed < minSpeed){speed = minSpeed;}
    if(speed > maxSpeed){speed = maxSpeed;}
    $("html, body").animate({ scrollTop: 0 }, speed);
    return false;
  });

  $(window).on('scroll', function(e) {
  var WinOffset	= $(window).scrollTop();
  var totop		= $('a.ayo-bc-totop');


    var scrollPercent = 100 * WinOffset / ($(document).height() - $(window).height());
    totop.find('.progress').css({height: scrollPercent + '%'});


  if(totop.length){
    if(WinOffset > 300){
      totop.addClass('active');
    }else{
      totop.removeClass('active');
    }
  }
});
      
      



/*-------------------------------------
    Countdown activation code
    -------------------------------------*/
    var eventCounter = $(".countdown");
    if (eventCounter.length) {
        eventCounter.countdown("2023/2/21", function (e) {
            $(this).html(
                e.strftime(
                    "<div class='countdown-section'><div><div class='countdown-number'>%D<span>:</span></div> <div class='countdown-unit'>Day%!D</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%H<span>:</span></div> <div class='countdown-unit'>Hour%!H</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%M<span>:</span></div> <div class='countdown-unit'>Minutes</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%S</div> <div class='countdown-unit'>Second</div> </div></div>"
                )
            );
        });
    }

    /*=============================
   // Masonary
   ===============================*/

    // Masonry
      $(".masonry-items").masonry({
        itemSelector: ".masonry-item",
        columnWidth: ".masonry-item",
    });


  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    // gutter: 20
  });


  /*-------------------------------------
  //Contact Form initiating
  -------------------------------------*/
  let contactForm = $(".rt-contact-form");
  if (contactForm.length) {
    contactForm.each(function () {
      let innerContactForm = $(this);
      innerContactForm.validator().on("submit", function (e) {
        let $this = $(this),
          $target = innerContactForm.find(".form-response");
        if (e.isDefaultPrevented()) {
          $target.html(
            "<div class='alert alert-danger'><p>Please select all required field.</p></div>"
          );
        } else {
          $.ajax({
            url: "php/mailer.php",
            type: "POST",
            data: innerContactForm.serialize(),
            beforeSend: function () {
              $target.html(
                "<div class='alert alert-info'><p>Loading ...</p></div>"
              );
            },
            success: function (response) {
              if (response == "success") {
                $this[0].reset();
                $target.html(
                  "<div class='alert alert-success'><p>Message has been sent successfully.</p></div>"
                );
              } else {
                res = JSON.parse(response);
                if (res.message.length) {
                  let messages = null;
                  res.message.forEach(function (message) {
                    messages += "<p>" + message + "</p>";
                  });
                  $target.html(
                    "<div class='alert alert-success'><p>" +
                      messages +
                      "</p></div>"
                  );
                }
              }
            },
            error: function () {
              $target.html(
                "<div class='alert alert-success'><p>Error !!!</p></div>"
              );
            },
          });
          return false;
        }
      });
    });
  }
  

  /*==============================
   //  WOW
   ===============================*/
  let wow = new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
    offset: 0,
    mobile: false,
    live: true,
    scrollContainer: null,
  });
  wow.init();


  /*==============================
  // Preloader
  ===============================*/

  $(window).on("load", function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });



  $(document).ready(function () {
    var upBall = $(".translate-up-down");
    if (upBall.length) {
        $(window).on("scroll", function () {
            var cryptoBannerImg = $(".translate-up-down");
            var y = window.scrollY;
            var x;
            x = cryptoBannerImg.offset().top;
            x = x - 400;

            let animationValue = 1;
            animationValue = (-1* (y - x)) / 8;          

            let animationStop = 100;

            if (animationValue < 0) {
                animationValue > 0;
            }

            if (animationValue > animationStop) {
                animationValue = animationStop;
            }

            cryptoBannerImg.css("transform", `translateY(${animationValue}px)`);
        });
    }
});

$(document).ready(function () {
  var downBall = $(".translate-up-down2");
if (downBall.length) {
$(window).on("scroll", function () {
  var cryptoBannerImg = $(".translate-up-down2");
  var y = window.scrollY;
  var x;
  x = cryptoBannerImg.offset().top;
  x = x - 400;

  let animationValue = 1;
  animationValue = (y - x) / 8;  

  let animationStop = 100;

  if (animationValue < 0) {
      animationValue > 0;
  }

  if (animationValue > animationStop) {
      animationValue = animationStop;
  }

  cryptoBannerImg.css("transform", `translateY(${animationValue}px)`);
});
}
});
  
})(jQuery);




