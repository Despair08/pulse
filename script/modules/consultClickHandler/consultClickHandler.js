import { generateToolModal } from "./generateToolModal.js";

export const consultClickHandler = () => {
  const consultBtn = document.querySelector('.main__button');
  consultBtn.addEventListener('click', generateToolModal);

}