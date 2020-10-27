const call = document.querySelector('.modal--callback');
const openCallbackBtn = document.querySelectorAll('.button--chat');
const closeCallbackBtn = document.querySelector('.button__close');
const overlayModal = document.querySelector('.overlay--modal');


const openCallback = () => {
    call.classList.add('modal--active');
    overlayModal.classList.add('overlay--modal-visible');
    closeCallbackBtn.addEventListener('click', closeCallbackClickHandler);
    overlayModal.addEventListener('click', overlayCallbackClickHandler);
    document.addEventListener('keydown', escapeCallbackKeydownHandler);
}

const closeCallback = () =>{
    call.classList.remove('modal--active');
    overlayModal.classList.remove('overlay--modal-visible');
    closeCallbackBtn.removeEventListener('click', closeCallbackClickHandler);
    overlayModal.removeEventListener('click', overlayCallbackClickHandler);
    document.removeEventListener('keydown', escapeCallbackKeydownHandler);
}

const overlayCallbackClickHandler = () => {
    closeCallback();
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

