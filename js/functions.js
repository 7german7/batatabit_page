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


var tablet = window.matchMedia("screen and (min-width: 727px)");
tablet.addListener(validation);
function validation(event) {
  console.log(event.matches);
}

if(tablet.matches){
  /*Mostrar menu*/
  var menu = document.getElementById('nav-menu__container');
  menu.classList.remove('hideMenu');
  menu.classList.add('showMenu');

  /*Ocultar boton*/
  var button = document.getElementById('button-menu__container');
  button.classList.remove('showButton');
  button.classList.add('hideButton');

  /*Ocultar boton X*/
  var list_button = document.getElementById('hideMenu');
  list_button.classList.add('hide__list-item');
}
