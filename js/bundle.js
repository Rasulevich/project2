!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5);var o=document.querySelector(".brands"),c=document.querySelector(".brands-next-button");c.addEventListener("click",(function(){o.classList.contains("brands--open")?(o.classList.remove("brands--open"),c.textContent="Показать все"):(o.classList.add("brands--open"),c.textContent="Скрыть")}));var r=document.querySelector(".brands-gadjets"),s=document.querySelector(".device-next-button");s.addEventListener("click",(function(){r.classList.contains("device--open")?(r.classList.remove("device--open"),s.textContent="Показать все"):(r.classList.add("device--open"),s.textContent="Скрыть")}));var l,i=document.querySelector(".article__content-inner"),a=document.querySelector(".next-button");function u(){return document.documentElement.clientWidth>=768?(l&&(l=null),!1):!l&&void(l=new Swiper(".swiper-container",{slidesPerView:"auto",pagination:{el:".swiper-pagination"},a11y:{enabled:!1}}))}a.addEventListener("click",(function(){i.classList.contains("text--open")?(i.classList.remove("text--open"),a.textContent="Читать далее"):(i.classList.add("text--open"),a.textContent="Скрыть")})),window.addEventListener("resize",u),u()},function(e,t,n){},function(e,t){var n=document.querySelector(".modal--callback"),o=document.querySelectorAll(".button--chat"),c=document.querySelector(".button__close"),r=document.querySelector(".content"),s=document.querySelector(".menu-container"),l=document.querySelector(".overlay--modal"),i=(document.querySelector(".overlay--visible"),function(){r.classList.add("close-content"),n.classList.add("callback-open"),s.classList.add("menu-close"),s.classList.remove("open-menu"),l.classList.add("overlay--visible"),c.addEventListener("click",a),l.addEventListener("click",a)}),a=function e(){r.classList.remove("close-content"),n.classList.remove("callback-open"),s.classList.remove("menu-close"),l.classList.remove("overlay--visible"),c.removeEventListener("click",e)};o.forEach((function(e){return e.addEventListener("click",i)}))},function(e,t){var n=document.querySelector(".menu-container"),o=document.querySelector(".button--burger-menu"),c=document.querySelector(".menu__close-button"),r=document.querySelector(".content"),s=document.querySelector(".overlay"),l=(document.querySelector(".overlay--visible"),function e(){s.classList.remove("overlay--visible"),n.classList.remove("open-menu"),r.classList.remove("close-content"),c.removeEventListener("click",e)});o.addEventListener("click",(function(){r.classList.add("close-content"),n.classList.add("open-menu"),s.classList.add("overlay--visible"),c.addEventListener("click",l),s.addEventListener("click",l)}))},function(e,t){var n=document.querySelector(".modal--call"),o=document.querySelectorAll(".button--call"),c=document.querySelector(".phone-button__close"),r=document.querySelector(".content"),s=document.querySelector(".menu-container"),l=document.querySelector(".overlay--modal"),i=(document.querySelector(".overlay--visible"),function(){r.classList.add("close-content"),n.classList.add("callback-open"),s.classList.remove("open-menu"),s.classList.add("menu-close"),l.classList.add("overlay--visible"),c.addEventListener("click",a),l.addEventListener("click",a)}),a=function e(){r.classList.remove("close-content"),n.classList.remove("callback-open"),l.classList.remove("overlay--visible"),s.classList.remove("menu-close"),c.removeEventListener("click",e)};o.forEach((function(e){return e.addEventListener("click",i)}))}]);
//# sourceMappingURL=bundle.js.map