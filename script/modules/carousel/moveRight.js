import { carousel, btnLeft, btnRight } from './carousel.js';
import { moveLeft } from './moveLeft.js';



export const moveRight = () => {
  carousel.classList.add('transition-right')
  btnRight.removeEventListener('click', moveRight)
  btnLeft.removeEventListener('click', moveLeft)
}