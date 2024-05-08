'use strict';
const scrollDownBtnEl = document.querySelector('.hero__btn');
const headerEl = document.querySelector('.header');
const headerNavEl = document.querySelector('.header__nav');
const mobileNavBtnEl = document.querySelector('.mobile-btn');
const imgTargets = document.querySelectorAll('.steps__img');

// SMOOTH SCROLLING
scrollDownBtnEl.addEventListener('click', function (e) {
  e.preventDefault();

  const sectionId = scrollDownBtnEl.getAttribute('href');

  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
});

// MOBILE NAVIGATION
headerEl.addEventListener('click', function (e) {
  const targetEl = e.target;

  if (
    targetEl.className.includes('mobile-btn') ||
    targetEl.className.includes('header__nav-link') ||
    targetEl.className.includes('header__nav-account-link')
  ) {
    mobileNavBtnEl.classList.toggle('mobile-btn--active');
    headerNavEl.classList.toggle('header__nav--active');
    document.body.classList.toggle('_no-scroll');
  }
});

// IMAGE LAZY LOADING
const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.childNodes.forEach((target) => {
    if (target.localName === 'source') {
      target.srcset = target.dataset.srcset;
    }

    if (target.localName === 'img') {
      const imgUrl = target.dataset.src.slice(
        0,
        target.dataset.src.lastIndexOf('.')
      );

      const imgFormat = target.dataset.src.slice(
        target.dataset.src.lastIndexOf('.')
      );

      target.src = target.dataset.src;
      target.srcset = `${imgUrl}@2x${imgFormat}`;

      entry.target.classList.remove('_lazy-img');
    }
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach((img) => imgObserver.observe(img));
