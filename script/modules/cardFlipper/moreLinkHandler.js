
export const moreLinkHandler = (links) => {
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const parent = link.parentElement;
      const grand = parent.parentElement;
      grand.classList.add('is-flipped')
    })
  })
}
// moreLinkHandler.forEach(link => {
//   link.addEventListener('click', (e)=>{
//     e.preventDefault();
//     cards.forEach(card => {
//       card.classList.add('is-flipped')
//     })
//   })
// })