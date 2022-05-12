'use strict';

const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.left__btn');
const rightBtn = document.querySelector('.right__btn');

let currSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach((sl, i) => {
    sl.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToSlide(0);

const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
};

rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', prevSlide);
