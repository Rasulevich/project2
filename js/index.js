import '../scss/style.scss';
import'./callback';
import './menu';
import './phone-callback';

let brandsOpenList = document.querySelector('.brands');
let brandsNextButton = document.querySelector('.brands-next-button');

brandsNextButton.addEventListener('click', function (){
    if (!brandsOpenList.classList.contains('brands--open')){
        brandsOpenList.classList.add('brands--open');
        brandsNextButton.textContent = "Скрыть";
        }
    else {
        brandsOpenList.classList.remove('brands--open');
        brandsNextButton.textContent = "Показать все";
    }
});

let deviceOpenList = document.querySelector('.brands-gadjets');
let deviceNextButton = document.querySelector('.device-next-button');


deviceNextButton.addEventListener('click', function (){
    if (!deviceOpenList.classList.contains('device--open')){
        deviceOpenList.classList.add('device--open');
        deviceNextButton.textContent = "Скрыть";
        }
    else {
        deviceOpenList.classList.remove('device--open');
        deviceNextButton.textContent = "Показать все";
    }
});

let textOpenList = document.querySelector('.article__content-inner');
let textNextButton = document.querySelector('.next-button');

textNextButton.addEventListener('click', function (){
    if (!textOpenList.classList.contains('text--open')){
        textOpenList.classList.add('text--open');
        textNextButton.textContent = "Скрыть";
        }
    else {
        textOpenList.classList.remove('text--open');
        textNextButton.textContent = "Читать далее";
    }
});


let swiper;

function isSwip() {
    if (document.documentElement.clientWidth >= 768 ) {
      if (swiper){
            // swiper.destroy();
            swiper = null;
        }
        return false;
    }
    if (swiper) return false;
    swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination' },
        a11y: {
            enabled: false
           }
    });
}


window.addEventListener('resize', isSwip);
isSwip();
