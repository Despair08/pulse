import { cards } from './catalogFilter.js';

export const filterCards = (elem) => {
cards.forEach(card => {

  const cardDataAttr = card.dataset.tag;

      card.classList.remove('hidden');

    if(elem !== cardDataAttr){
      card.classList.add('hidden');
    }

    if(elem === 'all'){
      cards.forEach(card => card.classList.remove('hidden'));
    }
  })
}