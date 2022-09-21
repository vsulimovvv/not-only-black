window.addEventListener('DOMContentLoaded', () => {
  // * Nice Select
  $('select').niceSelect();

  // * ====+ sliders
  (function collectionSlider() {
    const swiper3 = new Swiper('.collections__slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.collections__slider .swiper-button-next',
        prevEl: '.collections__slider .swiper-button-prev',
      },
      breakpoints: {
        991: {
          spaceBetween: 28,
        },
      },
    });
  })();

  (function brandsSlider() {
    const swiper3 = new Swiper('.brands__slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,

      breakpoints: {
        320: {
          spaceBetween: 20,
        },
        768: {
          spaceBetween: 50,
        },
        991: {
          spaceBetween: 100,
        },
      },
    });
  })();

  (function productsSlider() {
    const sliders = document.querySelectorAll('.products-slider__slider');

    sliders.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: '.products-slider__slider .swiper-button-next',
          prevEl: '.products-slider__slider .swiper-button-prev',
        },
      });
    });
  })();

  (function heroSlider() {
    const sliders = document.querySelectorAll('.hero__slider');

    sliders.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 1,
        navigation: {
          nextEl: '.hero__slider .swiper-button-next',
          prevEl: '.hero__slider .swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    });
  })();

  (function reviewsSlider() {
    const swiper3 = new Swiper('.reviews__slider', {
      spaceBetween: 20,
      slidesPerView: 'auto',
      centeredSlides: true,
      initialSlide: 2,
      loop: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.reviews__slider .swiper-button-next',
        prevEl: '.reviews__slider .swiper-button-prev',
      },
    });
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ==== Show Filters
  (function showFilters() {
    const filtersBtn = document.querySelector('.news__filters-btn');
    const filters = document.querySelector('.filters-news');
    const filtersCloseBtn = document.querySelector('.filters-news__close');
    const body = document.querySelector('body');

    if (filtersBtn) {
      filtersBtn.addEventListener('click', (e) => {
        filters.classList.toggle('active');
        body.classList.toggle('no-scroll');
      });

      filtersCloseBtn.addEventListener('click', (e) => {
        filters.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    }
  })();

  // * ===== Modals
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.projects-top__btn', '.popup--projects', '.popup__close');
  })();

  (function fixedHeader() {
    function scrollHeader() {
      const nav = document.querySelector('header');
      if (this.scrollY >= 90) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }

    window.addEventListener('scroll', scrollHeader);

    // ! Change
    function changeBg() {
      const header = document.querySelector('header');
      if (window.pageYOffset >= 90) {
        header.classList.add('scroll-header');
      }
    }

    changeBg();
  })();

  (function toggleAccordion(accordionControl, accordionContent, accordion) {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);
        target.classList.toggle('active');
        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();
        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }
        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }

  someTabs(
    '.products-grid-tabs',
    '.products-grid-tabs-btn',
    '.products-grid-tabs-content',
    'active'
  );
  someTabs(
    '.products-slider-tabs',
    '.products-slider-tabs-btn',
    '.products-slider-tabs-content',
    'active'
  );
  someTabs(
    '.products-slider-news-tabs',
    '.products-slider-news-tabs-btn',
    '.products-slider-news-tabs-content',
    'active'
  );
});
