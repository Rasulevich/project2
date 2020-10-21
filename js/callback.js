let call = document.querySelector('.modal--callback');
let openCallbackBtn = document.querySelectorAll('.button--chat');
let closeCallbackBtn = document.querySelector('.button__close');
let content = document.querySelector('.content');
let menu = document.querySelector('.menu-container');
let overlayModal = document.querySelector('.overlay--modal');
let overlayOpen = document.querySelector('.overlay--visible');

let openCallbackClickHandler = () => {
    content.classList.add('close-content');
    call.classList.add('callback-open');
    menu.classList.add('menu-close');
    menu.classList.remove('open-menu');
    overlayModal.classList.add('overlay--visible');
    closeCallbackBtn.addEventListener('click', closeCallbackClickHandler);
    overlayModal.addEventListener('click', closeCallbackClickHandler);
}

let closeCallbackClickHandler = () =>{
    content.classList.remove('close-content');
    call.classList.remove('callback-open');
    menu.classList.remove('menu-close');
    overlayModal.classList.remove('overlay--visible');
    closeCallbackBtn.removeEventListener('click', closeCallbackClickHandler);
}

openCallbackBtn.forEach((button) => button.addEventListener('click', openCallbackClickHandler));

