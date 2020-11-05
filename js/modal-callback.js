const call = document.querySelector('.modal--callback');
const openCallbackBtn = document.querySelectorAll('.button--chat');
const closeCallbackBtn = document.querySelector('.modal__close-btn');
const overlayModal = document.querySelector('.overlay--modal');


const openCallback = () => {
    call.classList.add('modal--active');
    overlayModal.classList.add('overlay--active');
    closeCallbackBtn.addEventListener('click', closeCallbackClickHandler);
    overlayModal.addEventListener('click', overlayCallbackClickHandler);
    document.addEventListener('keydown', escapeCallbackKeydownHandler);
    openCallbackBtn.forEach((button) => button.removeEventListener('click', openCallbackClickHandler));
}

const closeCallback = () =>{
    call.classList.remove('modal--active');
    overlayModal.classList.remove('overlay--active');
    closeCallbackBtn.removeEventListener('click', closeCallbackClickHandler);
    overlayModal.removeEventListener('click', overlayCallbackClickHandler);
    document.removeEventListener('keydown', escapeCallbackKeydownHandler);
    openCallbackBtn.forEach((button) => button.addEventListener('click', openCallbackClickHandler));
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
    if (event.keyCode === 27 )   closeCallback();
}

openCallbackBtn.forEach((button) => button.addEventListener('click', openCallbackClickHandler));

