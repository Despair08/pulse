import { carouselAnimation } from './modules/carousel/carousel.js';
import { catalogFilter } from './modules/catalog/catalogFilter.js';
import { cardFlipper } from './modules/cardFlipper/cardFlip.js';
import { consultClickHandler } from './modules/consultClickHandler/consultClickHandler.js';
import { handleFormSubmit } from './modules/form/handleFormSubmit.js';

window.onload = () => {
  carouselAnimation();
  catalogFilter();
  cardFlipper();
  consultClickHandler();
  handleFormSubmit();
};
