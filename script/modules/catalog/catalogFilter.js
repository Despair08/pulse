import { tagClickHandler } from "./tagClickHandler.js";


export const tags = document.querySelectorAll('.catalog__tag');
export const cards = document.querySelectorAll('.catalog__card');

export const catalogFilter = () => {
  tagClickHandler();

}

