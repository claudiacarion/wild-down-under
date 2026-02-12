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

const menuBtn = document.querySelector(`.menu-btn`);
const nav = document.querySelector(`.nav`);

menuBtn.addEventListener(`click`, () => {
  nav.classList.toggle(`active`);
  menuBtn.classList.toggle(`active`)

  // if(nav.classList.contains(`active`)) {
  //   document.body.style.overflow = `hidden`;
  // } else {
  //   document.body.style.overflow = "auto"; 
  // }
})