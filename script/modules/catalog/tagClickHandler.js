export const tagClickHandler = (tag) => {
  const tags = document.querySelectorAll('.catalog__tag');
  tags.forEach(tag => tag.addEventListener('click', (e)=>{
    tags.forEach(tag => tag.classList.remove('tag--active'));
    // console.log(e.target)
      if(e.target === tag || tag.contains(e.target)){
        tag.classList.add('tag--active');
      }
  }))
}