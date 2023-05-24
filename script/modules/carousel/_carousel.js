import { moveLeft } from './_moveLeft.js'
import { moveRight } from './_moveRight.js'
import { animationHandler } from './_animationHandler.js'

const carousel = document.querySelector('.carousel');
const btnLeft = document.querySelector('.left__arrow');
const btnRight = document.querySelector('.right__arrow');
const itemLeft = document.querySelector('#left__slide');
const itemRight = document.querySelector('#right__slide');
const itemActive = document.querySelector('#active__slide')

const carouselAnimation = () => {
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
carousel.addEventListener('animationend', animationHandler);

};

export { carouselAnimation, carousel, btnLeft, btnRight, itemLeft, itemRight, itemActive };