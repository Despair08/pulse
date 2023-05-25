import { carousel, btnLeft, btnRight, itemLeft, itemRight, itemActive } from './carousel.js';
import { moveLeft } from './moveLeft.js'
import { moveRight } from './moveRight.js'

export const animationHandler = (animationEvent) => {
  let changedItem;
  if(animationEvent.animationName === 'move-left'){
  carousel.classList.remove('transition-left');
  changedItem = itemRight.src;
  itemRight.src = itemActive.src;
  itemActive.src = itemLeft.src;
  itemLeft.src = changedItem;
  }else{
    carousel.classList.remove('transition-right');
    changedItem = itemLeft.src;
    itemLeft.src = itemActive.src;
    itemActive.src = itemRight.src;
    itemRight.src = changedItem;
  }

btnLeft.addEventListener('click',moveLeft)
btnRight.addEventListener('click',moveRight)
}

