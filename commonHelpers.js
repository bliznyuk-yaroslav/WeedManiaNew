import{S as n}from"./assets/vendor-c8b3e011.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();new n("#benefits",{loop:!1,slidesPerView:1,spaceBetween:28,slidesPerView:"auto",autoHeight:!1,pagination:!1,navigation:!1,touchMoveStopPropagation:!1,slideToClickedSlide:!1,preventInteractionOnTransition:!0,allowTouchMove:!0});const d=document.querySelector(".js-button-googleplay");d.addEventListener("click",()=>{window.location.href="https://play.google.com/store/apps/details?id=com.sfgh.weedmania.gp"});const a=new n("#gallery-slider",{loop:!1,slidesPerView:"auto",initialSlide:2,spaceBetween:24,autoHeight:!1,touchMoveStopPropagation:!1,slideToClickedSlide:!1,preventInteractionOnTransition:!0,allowTouchMove:!0,pagination:{el:"#gallery-slider .swiper-pagination",clickable:!0,renderBullet:(i,e)=>`<img
                src="/img/general/mobile/gall2@2x.png"
                class="${e}"
                alt="leaf-${i+1}"
                aria-label="Slide ${i+1}"
                data-active-src="/img/general/mobile/gall@2x.png"
                data-default-src="/img/general/mobile/gall2@2x.png" />`},breakpoints:{1200:{centeredSlides:!0}}});a.on("slideChange",()=>{document.querySelectorAll("#gallery-slider .swiper-pagination img").forEach((e,o)=>{o===a.activeIndex?e.src=e.dataset.activeSrc:e.src=e.dataset.defaultSrc})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("#gallery-slider .swiper-pagination img").forEach((e,o)=>{o===a.activeIndex?e.src=e.dataset.activeSrc:e.src=e.dataset.defaultSrc})});a.on("slideChange",c);function c(){document.querySelectorAll("#gallery-slider .swiper-pagination img").forEach((e,o)=>{o===a.realIndex?e.src=e.dataset.activeSrc:e.src=e.dataset.defaultSrc})}document.addEventListener("DOMContentLoaded",c);
//# sourceMappingURL=commonHelpers.js.map
