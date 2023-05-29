export class Modal{
  constructor(classes){
    this.classes = classes;
    this.modal = '';
    this.modalContent = '';
    this.modalCloseBtn = '';
    this.overlay = '';
  }

  buildModal(content){
    // Overlay
    this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', this.classes);

    // modal
    this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

    // modalContent
    this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content', this.classes);

    // closeBtn
    this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'div', 'modal__close', this.classes);

    this.setContent(content);

    this.appendModalElements();

    console.log(this.modal)
  }

  createDomNode(node, element, ...classes){
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  setContent(content){
    if(typeof content === 'string'){
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = '';
      this.modalContent.appendChild(content);
    }
  }

  appendModalElements(){
    this.modal.append(this.modalCloseBtn);
    this.modal.append(this.modalContent);
    this.overlay.append(this.modal);
  }
}