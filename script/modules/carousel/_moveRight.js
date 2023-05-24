import { carousel, btnLeft, btnRight } from './_carousel.js';
import { moveLeft } from './_moveLeft.js';



export const moveRight = () => {
  carousel.classList.add('transition-right')
  btnRight.removeEventListener('click', moveRight)
  btnLeft.removeEventListener('click', moveLeft)
}