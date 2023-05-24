import { carousel, btnLeft, btnRight } from './_carousel.js';
import { moveRight } from './_moveRight.js';



export const moveLeft = () => {
  carousel.classList.add('transition-left')
  btnLeft.removeEventListener('click', moveLeft)
  btnRight.removeEventListener('click', moveRight)
}