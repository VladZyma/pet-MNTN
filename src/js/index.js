'use strict';
const scrollDownBtnEl = document.querySelector('.hero__btn');

// SMOOTH SCROLLING
scrollDownBtnEl.addEventListener('click', function (e) {
  e.preventDefault();

  const sectionId = scrollDownBtnEl.getAttribute('href');

  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
});
