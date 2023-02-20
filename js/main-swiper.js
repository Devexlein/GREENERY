// Инициализируем Swiper

// tabs-section
let paintingsTabsSwiper = new Swiper('.tabs__paintings-slider', {
   breakpoints: {
      575.98: {
         slidesPerView: 1,
         spaceBetween: 0,
      },
      767.98: {
         slidesPerView: 2,
         spaceBetween: 0,
      },
      991.98: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1190: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1191: {
         slidesPerView: 3,
         spaceBetween: 0
      }
   },
   centerInsufficientSlides: true,
   watchOverflow: true,
   // autoplay: {
   //    delay: 2000,
   // },
   navigation: {
      nextEl: '.swiper-button-next.tabs__btn-next_paintings',
      prevEl: '.swiper-button-prev.tabs__btn-prev_paintings'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
   },
   preventClicks: true,
   simulateTouch: false,
   touchRatio: 1,
   // loop: true,
   // loopedSlides: 3,
   observer: true,
   observeParents: true,
   observeSlideChildren: true,
   grabCursor: true,
   // cssMode: true,
});

let wallsTabsSwiper = new Swiper('.tabs__walls-slider', {
   breakpoints: {
      575.98: {
         slidesPerView: 1,
         spaceBetween: 0,
      },
      767.98: {
         slidesPerView: 2,
         spaceBetween: 0,
      },
      991.98: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1190: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1191: {
         slidesPerView: 3,
         spaceBetween: 0
      }
   },
   centerInsufficientSlides: true,
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.tabs__btn-next_walls',
      prevEl: '.swiper-button-prev.tabs__btn-prev_walls'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
   },
   preventClicks: true,
   simulateTouch: true,
   touchRatio: 1,
   grabCursor: true,
   observer: true,
   observeParents: true,
   observeSlideChildren: true,
   // cssMode: true,
});

let logosTabsSwiper = new Swiper('.tabs__logos-slider', {
   breakpoints: {
      575.98: {
         slidesPerView: 1,
         spaceBetween: 0,
      },
      767.98: {
         slidesPerView: 2,
         spaceBetween: 0,
      },
      991.98: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1190: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1191: {
         slidesPerView: 3,
         spaceBetween: 0
      }
   },
   centerInsufficientSlides: true,
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.tabs__btn-next_logos',
      prevEl: '.swiper-button-prev.tabs__btn-prev_logos'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
   },
   preventClicks: true,
   simulateTouch: true,
   touchRatio: 1,
   grabCursor: true,
   observer: true,
   observeParents: true,
   observeSlideChildren: true,
   // cssMode: true,
});

let otherTabsSwiper = new Swiper('.tabs__other-slider', {
   breakpoints: {
      575.98: {
         slidesPerView: 1,
         spaceBetween: 0,
      },
      767.98: {
         slidesPerView: 2,
         spaceBetween: 0,
      },
      991.98: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1190: {
         slidesPerView: 3,
         spaceBetween: 0
      },
      1191: {
         slidesPerView: 3,
         spaceBetween: 0
      }
   },
   centerInsufficientSlides: true,
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.tabs__btn-next_other',
      prevEl: '.swiper-button-prev.tabs__btn-prev_other'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
      releaseOnEdges: true,
   },
   preventClicks: true,
   simulateTouch: true,
   touchRatio: 1,
   grabCursor: true,
   observer: true,
   observeParents: true,
   observeSlideChildren: true,
   // cssMode: true,
});

// products-section
let productsSwiper = new Swiper('.products__slider', {
   slidesPerView: 1,
   spaceBetween: 0,
   breakpoints: {
      991.98: {
         slidesPerView: 3,
         spaceBetween: 75
      },
      1200: {
         slidesPerView: 3,
         spaceBetween: 100
      }
   },
   centerInsufficientSlides: true,
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.products__btn-next',
      prevEl: '.swiper-button-prev.products__btn-prev'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   preventClicks: true,
   simulateTouch: true,
   touchRatio: 1,
   // grabCursor: false,
   cssMode: true
});


// feedback-section
let feedbackSwiper = new Swiper('.feedback__slider', {
   slidesPerView: 3,
   spaceBetween: 50,
   breakpoints: {
      320: {
         slidesPerView: 3,
         spaceBetween: 50
      },
      575.98: {
         slidesPerView: 3,
         spaceBetween: 50
      },
      767.98: {
         slidesPerView: 3,
         spaceBetween: 20
      },
      991.98: {
         slidesPerView: 3,
         spaceBetween: 40
      },
      1190: {
         slidesPerView: 3,
         spaceBetween: 50
      },
      1191: {
         slidesPerView: 3,
         spaceBetween: 100,
      }
   },
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.feedback__btn-next',
      prevEl: '.swiper-button-prev.feedback__btn-prev'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   preventClicks: true,
   simulateTouch: true,
   touchRatio: 2,
   grabCursor: true,
   loop: true,
   loopedSlides: 3,
   slideToClickedSlide: true,
   cssMode: true,
   preloadImages: false,
   lazy: {
      loadOnTransitionStart: true,
      loadPrevNext: false
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true
});

let popupFeedbackSwiper = new Swiper('.popup-feedback__slider', {
   slidesPerView: 1.4,
   centeredSlides: true,
   effect: 'coverflow',

   coverflowEffect: {
      depth: 70,
      rotate: 50,
      stretch: 75,
      slideShadows: true,
      scale: 0.6
   },
   breakpoints: {
      400.98: {
         slidesPerView: 2,
         spaceBetween: 0,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 50,
            rotate: 30,
            stretch: 70,
            slideShadows: true,
            scale: 0.5
         },
      },
      550.98: {
         slidesPerView: 2,
         spaceBetween: 0,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 50,
            rotate: 30,
            stretch: 90,
            slideShadows: true,
            scale: 0.7
         },
      },
      575.98: {
         slidesPerView: 3,
         spaceBetween: 0,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 80,
            rotate: 40,
            stretch: 30,
            slideShadows: true,
            scale: 0.7
         },
      },
      767.98: {
         slidesPerView: 3,
         spaceBetween: 0,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 20,
            rotate: 30,
            stretch: 50,
            slideShadows: true,
            scale: 0.7
         },
      },
      991.98: {
         slidesPerView: 3,
         spaceBetween: 30,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 40,
            rotate: 40,
            stretch: 75,
            slideShadows: true,
            scale: 0.7
         },
      },
      1190: {
         slidesPerView: 3,
         spaceBetween: 30,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 70,
            rotate: 30,
            stretch: 140,
            slideShadows: true,
            scale: 0.75,
         },
      },
      1201: {
         slidesPerView: 3,
         spaceBetween: 40,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 100,
            rotate: 30,
            stretch: 140,
            slideShadows: true,
            scale: 0.8,
         },
      },
      1401: {
         slidesPerView: 3,
         spaceBetween: 50,
         effect: 'coverflow',

         coverflowEffect: {
            depth: 160,
            rotate: 40,
            stretch: 170,
            slideShadows: true,
            scale: 0.8,
         },
      }
   },
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.popup-feedback__btn-next',
      prevEl: '.swiper-button-prev.popup-feedback__btn-prev'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   simulateTouch: true,
   touchRatio: 2,
   grabCursor: true,
   preloadImages: false,
   lazy: {
      loadOnTransitionStart: true,
      loadPrevNext: false
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true
});

// customers-section
let customersSwiper = new Swiper('.customers__slider', {
   slidesPerView: 1,
   spaceBetween: 5,
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.customers__btn-next',
      prevEl: '.swiper-button-prev.customers__btn-prev'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   preventClicks: true,
   simulateTouch: true,
   touchRatio: 1,
   grabCursor: true,
   cssMode: true,
});