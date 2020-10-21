let menu = document.querySelector('.menu-container');
let menuOpenBtn = document.querySelector('.button--burger-menu');
let menuCloseBtn = document.querySelector('.menu__close-button');
let content = document.querySelector('.content');
let overlay = document.querySelector('.overlay');
let overlayOpen = document.querySelector('.overlay--visible');


let openMenuBtnClickHandler = () => {
    content.classList.add('close-content');
    menu.classList.add('open-menu');
    overlay.classList.add('overlay--visible');
    menuCloseBtn.addEventListener('click', closeMenuBtnHandler);
    overlay.addEventListener('click', closeMenuBtnHandler);
}

let closeMenuBtnHandler = () => {
    overlay.classList.remove('overlay--visible');
    menu.classList.remove('open-menu');
    content.classList.remove('close-content');
    menuCloseBtn.removeEventListener('click', closeMenuBtnHandler);
}

menuOpenBtn.addEventListener('click',openMenuBtnClickHandler);

