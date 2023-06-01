export class Modal{
  constructor(classes){
    this.classes = classes;
    this.modal = '';
    this.modalContent = '';
    this.modalCloseBtn = '';
    this.overlay = '';
  }

  buildModal(content){

    this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', this.classes);

    this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

    this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content', this.classes);

    this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'div', 'modal__close', this.classes);

    this.setContent(content);

    this.appendModalElements();

    this.bindEvents();

    this.openModal()

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

  bindEvents(){
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }

  openModal(){
      document.body.append(this.overlay);
    }

  closeModal(e){
    let classes = e.target.classList;
    if(classes.contains('overlay') || classes.contains('modal__close')){
      document.querySelector('.tools-modal').remove();
      e.stopPropagation()
    }
  }
}