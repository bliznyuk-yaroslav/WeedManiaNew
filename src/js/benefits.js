import Swiper from 'swiper/bundle';

import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper-container', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 28,
  slidesPerView: 'auto',
  autoHeight: false,
  pagination: false,
  navigation: false,
  touchMoveStopPropagation: false,
  slideToClickedSlide: false,
  preventInteractionOnTransition: true,
  allowTouchMove: true,
});
