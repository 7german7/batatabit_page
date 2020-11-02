function showMenu(element){
  /*Ocultar boton*/
  element.classList.remove('showButton');
  element.classList.add('hideButton');
  
  /*Mostrar menu*/
  var menu = document.getElementById('nav-menu__container');
  menu.classList.remove('hideMenu');
  menu.classList.add('showMenu');
}

function hideMenu() {
  /*Ocultar menu*/
  var menu = document.getElementById('nav-menu__container');
  menu.classList.remove('showMenu');
  menu.classList.add('hideMenu');

  /*Mostrar boton*/
  var button = document.getElementById('button-menu__container')
  button.classList.remove('hideButton');
  button.classList.add('showButton');
}

function hideElements(){
  /*Ocultar boton*/
   var button = document.getElementById('button-menu__container');
   button.classList.remove('showButton');
   button.classList.add('hideButton');

//   /*Ocultar boton X*/
   var list_button = document.getElementById('hideMenu');
   list_button.classList.add('hide__list-item');
}

document.addEventListener("DOMContentLoaded", function(event) {
  if(screen.width<=726){
    hideMenu();
  }
  if(screen.width>=727){
    hideElements();
  }
});

document.addEventListener('scroll',function(){
  var menu = document.getElementById('nav-menu__container');
   
  if (window.scrollY>0) {
    menu.classList.add('fixed-top');
    menu.style.position = 'fixed';
  }
  else{
    menu.classList.remove('fixed-top');
    menu.removeAttribute('style');
  }
});
