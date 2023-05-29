import { renderModalWindow } from '../modal/renderModalWindow.js';

export const generateToolModal = (event) => {
  event.preventDefault();
  renderModalWindow('TEst Content For Modal')
}