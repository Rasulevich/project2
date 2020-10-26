const phone = document.querySelector('.modal--call');
const openPhoneBtn = document.querySelectorAll('.button--call');
const closePhoneBtn = document.querySelector('.phone-button__close');
const overlayModal = document.querySelector('.overlay--modal');

const openPhone = () => {
    phone.classList.add('callback-open');
    overlayModal.classList.add('overlay--modal-visible');
    closePhoneBtn.addEventListener('click',closePhoneClickHandler);
    overlayModal.addEventListener('click', closePhoneClickHandler);
    document.addEventListener('keydown', escapePhoneKeydownHandler);
}

const closePhone = () => {
    phone.classList.remove('callback-open');
    overlayModal.classList.remove('overlay--modal-visible');
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
