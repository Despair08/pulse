import { Modal } from "./modal.js";


export const renderModalWindow = (content) => {
  let modal = new Modal ('tools-modal');
  modal.buildModal(content);
}