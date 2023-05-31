import { tags } from "./catalogFilter.js";
import { filterCards } from "./filterCards.js";

export const tagClickHandler = () => {
  tags.forEach(tag => tag.addEventListener('click', toggleActiveTag));
};

const toggleActiveTag = (e) => {
  tags.forEach(tag => {

    const tagDataAttr = tag.dataset.tag;

    tag.classList.remove('tag--active');

    const clickTarget = e.target;

    if(clickTarget === tag || tag.contains(clickTarget)){
      tag.classList.add('tag--active');
      filterCards(tagDataAttr);
    }
  })
}