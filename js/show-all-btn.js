
let brandsOpenList = document.querySelector('.brands');
let brandsNextButton = document.querySelector('.brands__next-button');

brandsNextButton.addEventListener('click', function (){
    if (!brandsOpenList.classList.contains('brands--open')){
        brandsOpenList.classList.add('brands--open');
        brandsNextButton.textContent = "Скрыть";
        brandsNextButton.classList.toggle('next-button-click');
        }
    else {
        brandsOpenList.classList.remove('brands--open');
        brandsNextButton.textContent = "Показать все";
        brandsNextButton.classList.toggle('next-button-click');
    }
});

let deviceOpenList = document.querySelector('.brands-gadjets');
let deviceNextButton = document.querySelector('.brands-gadjets__next-button');


deviceNextButton.addEventListener('click', function (){
    if (!deviceOpenList.classList.contains('device--open')){
        deviceOpenList.classList.add('device--open');
        deviceNextButton.textContent = "Скрыть";
        deviceNextButton.classList.toggle('next-button-click');
        }
    else {
        deviceOpenList.classList.remove('device--open');
        deviceNextButton.textContent = "Показать все";
        deviceNextButton.classList.toggle('next-button-click');
    }
});

let textOpenList = document.querySelector('.article__content-inner');
let textNextButton = document.querySelector('.article__next-button');

textNextButton.addEventListener('click', function (){
    if (!textOpenList.classList.contains('text--open')){
        textOpenList.classList.add('text--open');
        textNextButton.textContent = "Скрыть";
        textNextButton.classList.toggle('next-button-click');
        }
    else {
        textOpenList.classList.remove('text--open');
        textNextButton.textContent = "Читать далее";
        textNextButton.classList.toggle('next-button-click');
    }
});
