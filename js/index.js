import '../scss/style.scss';
import'./modal-callback';
import './menu';
import './modal-phone';
import './show-all-btn';

let swiper;

function isSwip() {
    if (document.documentElement.clientWidth >= 768 ) {
      if (swiper){
            swiper.destroy();
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
