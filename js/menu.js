const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('.button--burger-menu');
const menuCloseBtn = document.querySelector('.menu__close-button');
const content = document.querySelector('.content');
const overlay = document.querySelector('.overlay--menu');
const overlayModal = document.querySelector('.overlay--modal');
const call = document.querySelector('.modal--callback');
const phone = document.querySelector('.modal--call');



const openMenu = () => {
    menu.classList.add('menu--active');
    overlay.classList.add('overlay--active');
    menuCloseBtn.addEventListener('click', closeMenuBtnHandler);
    overlay.addEventListener('click', overlayMenuClickHandler);
    document.addEventListener('keydown', escapeMenuKeydownHandler);
    openMenuBtn.removeEventListener('click', openMenuBtnClickHandler);
}

const closeMenu = () => {
    overlay.classList.remove('overlay--active');
    menu.classList.remove('menu--active');
    menuCloseBtn.removeEventListener('click', closeMenuBtnHandler);
    overlay.removeEventListener('click', overlayMenuClickHandler);
    document.removeEventListener('keydown', escapeMenuKeydownHandler);
    openMenuBtn.addEventListener('click', openMenuBtnClickHandler);
}

const overlayMenuClickHandler = () => {
    closeMenu();
}
const openMenuBtnClickHandler = () => {
    openMenu();
}
const closeMenuBtnHandler = () => {
    closeMenu();
}
const escapeMenuKeydownHandler = (event) =>{
    if (event.keyCode === 27 && !call.classList.contains('modal--active' ) && !phone.classList.contains('modal--active')) closeMenu();
}

openMenuBtn.addEventListener('click',openMenuBtnClickHandler);

