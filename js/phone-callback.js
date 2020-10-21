let phone = document.querySelector('.modal--call');
let openPhoneBtn = document.querySelectorAll('.button--call');
let closePhoneBtn = document.querySelector('.phone-button__close');
let content = document.querySelector('.content');
let menu = document.querySelector('.menu-container');
let overlayModal = document.querySelector('.overlay--modal');
let overlayOpen = document.querySelector('.overlay--visible');

let openPhoneClickHandler = () => {
    content.classList.add('close-content');
    phone.classList.add('callback-open');
    menu.classList.remove('open-menu');
    menu.classList.add('menu-close');
    overlayModal.classList.add('overlay--visible');
    closePhoneBtn.addEventListener('click',closePhoneClickHandler);
    overlayModal.addEventListener('click', closePhoneClickHandler);
}

let closePhoneClickHandler = () => {
    content.classList.remove('close-content');
    phone.classList.remove('callback-open');
    overlayModal.classList.remove('overlay--visible');
    menu.classList.remove('menu-close');
    closePhoneBtn.removeEventListener('click',closePhoneClickHandler);
}

openPhoneBtn.forEach((buttonCall) => buttonCall.addEventListener('click',openPhoneClickHandler));
