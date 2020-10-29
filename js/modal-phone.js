const phone = document.querySelector('.modal--call');
const openPhoneBtn = document.querySelectorAll('.button--call');
const closePhoneBtn = document.querySelector('.modal__close-btn-phone');
const overlayModal = document.querySelector('.overlay--modal');

const openPhone = () => {
    phone.classList.add('modal--active');
    overlayModal.classList.add('overlay--active');
    closePhoneBtn.addEventListener('click',closePhoneClickHandler);
    overlayModal.addEventListener('click', overlayCallClickHandler);
    document.addEventListener('keydown', escapePhoneKeydownHandler);
    // openPhoneBtn.forEach((buttonCall) => buttonCall.removeEventListener('click',openPhoneClickHandler));
}

const closePhone = () => {
    phone.classList.remove('modal--active');
    overlayModal.classList.remove('overlay--active');
    closePhoneBtn.removeEventListener('click',closePhoneClickHandler); 
    overlayModal.removeEventListener('click', overlayCallClickHandler);
    document.removeEventListener('keydown', escapePhoneKeydownHandler);
    // openPhoneBtn.forEach((buttonCall) => buttonCall.addEventListener('click',openPhoneClickHandler));
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
};

openPhoneBtn.forEach((buttonCall) => buttonCall.addEventListener('click',openPhoneClickHandler));
