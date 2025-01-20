import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import gallImage from '../img/general/mobile/gall2@2x.png';
import gallActiveImage from '../img/general/mobile/gall@2x.png';

const swiper = new Swiper('#gallery-slider', {
  loop: false,
  slidesPerView: 'auto',
  initialSlide: 2,
  spaceBetween: 24,
  autoHeight: false,
  touchMoveStopPropagation: false,
  slideToClickedSlide: false,
  preventInteractionOnTransition: true,
  allowTouchMove: true,
  pagination: {
    el: '#gallery-slider .swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return `<img
               src="${gallImage}"
                class="${className}"
                alt="leaf-${index + 1}"
                aria-label="Slide ${index + 1}"
              data-active-src="${gallActiveImage}"
                data-default-src="${gallImage}" />`;
    },
  },

  breakpoints: {
    1200: {
      centeredSlides: true,
    },
  },
});

swiper.on('slideChange', () => {
  const bullets = document.querySelectorAll(
    '#gallery-slider .swiper-pagination img'
  );

  bullets.forEach((bullet, index) => {
    if (index === swiper.activeIndex) {
      bullet.src = bullet.dataset.activeSrc;
    } else {
      bullet.src = bullet.dataset.defaultSrc;
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const bullets = document.querySelectorAll(
    '#gallery-slider .swiper-pagination img'
  );

  bullets.forEach((bullet, index) => {
    if (index === swiper.activeIndex) {
      bullet.src = bullet.dataset.activeSrc;
    } else {
      bullet.src = bullet.dataset.defaultSrc;
    }
  });
});

swiper.on('slideChange', updatePagination);

function updatePagination() {
  const bullets = document.querySelectorAll(
    '#gallery-slider .swiper-pagination img'
  );

  bullets.forEach((bullet, index) => {
    if (index === swiper.realIndex) {
      bullet.src = bullet.dataset.activeSrc;
    } else {
      bullet.src = bullet.dataset.defaultSrc;
    }
  });
}

document.addEventListener('DOMContentLoaded', updatePagination);
