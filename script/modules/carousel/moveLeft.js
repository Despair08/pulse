import { carousel, btnLeft, btnRight } from './carousel.js';
import { moveRight } from './moveRight.js';



export const moveLeft = () => {
  carousel.classList.add('transition-left')
  btnLeft.removeEventListener('click', moveLeft)
  btnRight.removeEventListener('click', moveRight)
}