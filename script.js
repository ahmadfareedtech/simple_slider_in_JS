'use strict';

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.left__btn');
const rightBtn = document.querySelector('.right__btn');

slides.forEach((sl, i) => {
  console.log(i);
  sl.style.transform = `translateX(${100 * i}%)`;
});

let currSlide = 0;
const maxSlide = slides.length;

const goToSlide = function () {
  slides.forEach((sl, i) => {
    sl.style.transform = `translateX(${100 * (i - currSlide)}%)`;
  });
};

const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide();
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide();
};

rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', prevSlide);
