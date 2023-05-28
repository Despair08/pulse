import { carouselAnimation } from './modules/carousel/carousel.js';
import { catalogFilter } from './modules/catalog/catalogFilter.js';
import { cardFlipper } from './modules/cardFlipper/cardFlip.js';

window.onload = () => {
  carouselAnimation();
  catalogFilter();
  cardFlipper();
};
