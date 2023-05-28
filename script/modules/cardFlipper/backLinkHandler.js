export const backLinkHandler = (links) => {
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const parent = link.parentElement;
      const grand = parent.parentElement;
      grand.classList.remove('is-flipped')
    })
  })
}