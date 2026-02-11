const arrowButton = document.querySelector('.sidebar__arrow');
const sidebarContent = document.querySelector('.sidebar')

arrowButton.addEventListener('click',()=>{

  if(sidebarContent.classList.contains('open')){
    sidebarContent.classList.remove('open');
    arrowButton.classList.remove('animate')
  } else {
    sidebarContent.classList.add('open');
    arrowButton.classList.add('animate');
  }

})