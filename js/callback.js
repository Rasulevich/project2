const call = document.querySelector('.modal--callback');
const openCallbackBtn = document.querySelectorAll('.button--chat');
const closeCallbackBtn = document.querySelector('.button__close');
const content = document.querySelector('.content');
const menu = document.querySelector('.menu-container');
const overlayModal = document.querySelector('.overlay--modal');
const overlay = document.querySelector('.overlay');


const openCallback = () => {
    content.classList.add('close-content');
    call.classList.add('callback-open');
    menu.classList.add('menu-close');
    menu.classList.remove('open-menu');
    overlayModal.classList.add('overlay--visible');
    closeCallbackBtn.addEventListener('click', closeCallbackClickHandler);
    overlayModal.addEventListener('click', closeCallbackClickHandler);
    document.addEventListener('keydown', escapeCallbackKeydownHandler);
}

const closeCallback = () =>{
    content.classList.remove('close-content');
    call.classList.remove('callback-open');
    menu.classList.remove('menu-close');
    overlay.classList.remove('overlay--visible');
    overlayModal.classList.remove('overlay--visible');
    closeCallbackBtn.removeEventListener('click', closeCallbackClickHandler);
    overlayModal.removeEventListener('click', closeCallbackClickHandler);
    document.removeEventListener('keydown', escapeCallbackKeydownHandler);
}

const openCallbackClickHandler = () =>{
    openCallback();
}
const closeCallbackClickHandler = () => {
    closeCallback();
}
const escapeCallbackKeydownHandler = (event) =>{
    if (event.keyCode === 27)   closeCallback();
}

openCallbackBtn.forEach((button) => button.addEventListener('click', openCallbackClickHandler));

