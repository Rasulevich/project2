const menu = document.querySelector('.menu-container');
const menuOpenBtn = document.querySelector('.button--burger-menu');
const menuCloseBtn = document.querySelector('.menu__close-button');
const content = document.querySelector('.content');
const overlay = document.querySelector('.overlay');


const openMenu = () => {
    content.classList.add('close-content');
    menu.classList.add('open-menu');
    overlay.classList.add('overlay--visible');
    menuCloseBtn.addEventListener('click', closeMenuBtnHandler);
    overlay.addEventListener('click', closeMenuBtnHandler);
    document.addEventListener('keydown', escapeMenuKeydownHandler);
}

const closeMenu = () => {
    overlay.classList.remove('overlay--visible');
    menu.classList.remove('open-menu');
    content.classList.remove('close-content');
    menuCloseBtn.removeEventListener('click', closeMenuBtnHandler);
    document.removeEventListener('keydown', escapeMenuKeydownHandler);
}
const openMenuBtnClickHandler = () => {
    openMenu();
}
const closeMenuBtnHandler = () => {
    closeMenu();
}
const escapeMenuKeydownHandler = (event) =>{
    if (event.keyCode === 27) closeMenu();
}
menuOpenBtn.addEventListener('click',openMenuBtnClickHandler);

