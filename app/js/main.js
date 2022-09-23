window.addEventListener('DOMContentLoaded', () => {
  // * Nice Select
  $('select').niceSelect();

  (function cookie() {
    const cookieBtn = document.querySelectorAll('.cookie__btn');
    const cookieContent = document.querySelector('.cookie');

    cookieBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        cookieContent.style.display = 'none';
      });
    });
  })();

  (function showDropmenu() {
    const dropdowns = document.querySelectorAll('.dropmenu');
    const menuLinks = document.querySelectorAll('.menu-header__link');

    menuLinks.forEach((link) => {
      if (link) {
        link.addEventListener('mouseover', (e) => {
          let linkName = link.dataset.link;

          dropdowns.forEach((dropdown) => {
            let dropdownName = dropdown.dataset.target;

            if (linkName === dropdownName) {
              dropdown.classList.add('active');
            }
          });
        });
        link.addEventListener('mouseleave', (e) => {
          let linkName = link.dataset.link;

          dropdowns.forEach((dropdown) => {
            let dropdownName = dropdown.dataset.target;
            if (linkName === dropdownName) {
              dropdown.classList.remove('active');
            }
          });
        });
      }
    });
  })();

  // * ===== sliders
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

  // * ==== Single Product
  (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      direction: 'vertical',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          direction: 'horizontal',
        },
        991: {
          direction: 'vertical',
        },
      },
    });

    let mySwiper = new Swiper('#slider-main', {
      spaceBetween: 10,
      loopedSlides: 4,
      thumbs: {
        swiper: mySwiperNav,
      },
      navigation: {
        nextEl: document.querySelector('#slider-main .swiper-button-next'),
        prevEl: document.querySelector('#slider-main .swiper-button-prev'),
      },
    });
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);

    const accordions = document.querySelectorAll(accordion);

    accordions.forEach((accordion) => {
      if (accordion.classList.contains('active')) {
        accordion.querySelector(accordionContent).style.maxHeight =
          accordion.querySelector(accordionContent).scrollHeight + 'px';
      } else {
        accordion.querySelector(accordionContent).style.maxHeight = null;
      }
    });

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
  };

  toggleAccordion('.accordion-control', '.accordion-content', '.accordion');

  // * ===== Show Filters
  (function showFilters() {
    const menuBtn = document.querySelector('.catalog__filter');
    const menu = document.querySelector('.catalog__side');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    if (menuBtn) {
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
    }
  })();

  // * ===== Slider Handle
  (function handlesSlider() {
    let handlesSlider = document.querySelector('#slider-handles');
    let minStep = document.querySelector('.range-slider__min');
    let maxStep = document.querySelector('.range-slider__max');
    if (handlesSlider) {
      noUiSlider.create(handlesSlider, {
        start: [1400, 1374688],
        connect: true,
        padding: [10, 10],
        range: {
          min: [0],
          max: [2000000],
        },
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: ' ₽',
        }),
      });

      handlesSlider.noUiSlider.on('update', function (values, handle) {
        if (handle) {
          maxStep.innerHTML = values[handle];
        } else {
          minStep.innerHTML = values[handle];
        }
      });
    }
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
    bindModal('.product-info__sizes-btn', '.popup--sizes', '.popup__close');
    bindModal('.footer-contacts__btn', '.popup--subscribe', '.popup__close');
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
