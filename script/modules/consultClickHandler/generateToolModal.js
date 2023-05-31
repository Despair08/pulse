import { renderModalWindow } from '../modal/renderModalWindow.js';
import { modalContent } from '../modal/modalContent.js';

export const generateToolModal = (event) => {
  event.preventDefault();
  renderModalWindow(modalContent)
}