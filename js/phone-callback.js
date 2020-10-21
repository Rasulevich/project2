const phone = document.querySelector('.modal--call');
const openPhoneBtn = document.querySelectorAll('.button--call');
const closePhoneBtn = document.querySelector('.phone-button__close');
const content = document.querySelector('.content');
const menu = document.querySelector('.menu-container');
const overlayModal = document.querySelector('.overlay--modal');
const overlay = document.querySelector('.overlay');

const openPhone = () => {
    content.classList.add('close-content');
    phone.classList.add('callback-open');
    menu.classList.remove('open-menu');
    menu.classList.add('menu-close');
    overlayModal.classList.add('overlay--visible');
    closePhoneBtn.addEventListener('click',closePhoneClickHandler);
    overlayModal.addEventListener('click', closePhoneClickHandler);
    document.addEventListener('keydown', escapePhoneKeydownHandler);
}

const closePhone = () => {
    content.classList.remove('close-content');
    phone.classList.remove('callback-open');
    overlayModal.classList.remove('overlay--visible');
    menu.classList.remove('menu-close');
    closePhoneBtn.removeEventListener('click',closePhoneClickHandler);
    document.removeEventListener('keydown', escapePhoneKeydownHandler);
}

const openPhoneClickHandler = () => {
    openPhone();
}

const closePhoneClickHandler = () => {
    closePhone();
}

const escapePhoneKeydownHandler = (event) =>{
    if (event.keyCode === 27)   closePhone();
}
openPhoneBtn.forEach((buttonCall) => buttonCall.addEventListener('click',openPhoneClickHandler));
