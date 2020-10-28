const phone = document.querySelector('.modal--call');
const openPhoneBtn = document.querySelectorAll('.button--call');
const closePhoneBtn = document.querySelector('.modal__close-btn');
const overlayModal = document.querySelector('.overlay__modal');

const openPhone = () => {
    phone.classList.add('modal--active');
    overlayModal.classList.add('overlay__modal--active');
    closePhoneBtn.addEventListener('click',closePhoneClickHandler);
    overlayModal.addEventListener('click', overlayCallClickHandler);
    document.addEventListener('keydown', escapePhoneKeydownHandler);
}

const closePhone = () => {
    phone.classList.remove('modal--active');
    overlayModal.classList.remove('overlay__modal--active');
    closePhoneBtn.removeEventListener('click',overlayCallClickHandler);
    document.removeEventListener('keydown', escapePhoneKeydownHandler);
}

const overlayCallClickHandler = () => {
    closePhone();
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
