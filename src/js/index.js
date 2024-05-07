'use strict';
const scrollDownBtnEl = document.querySelector('.hero__btn');
const headerEl = document.querySelector('.header');
const headerNavEl = document.querySelector('.header__nav');
const mobileNavBtnEl = document.querySelector('.mobile-btn');

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
