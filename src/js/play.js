import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
const accordion = new Accordion('.list', {
  duration: 600,
  showMultiple: false,
  openOnInit: [0],
});
const accordionItems = document.querySelectorAll('.item-play');

accordionItems.forEach((item, index) => {
  const accordionBtn = item.querySelector('.btn-down');
  const accordionArrow = item.querySelector('.btn-arrow');
  const accordionFon = item.querySelector('.head-item');
  const content = item.querySelector('.item-content');

  if (index === 0) {
    content.style.display = 'flex';
    accordionArrow.classList.add('active');
    accordionBtn.classList.add('active');
    accordionFon.classList.add('active');
  } else {
    content.style.display = 'none';
  }
  accordionBtn.addEventListener('click', () => {
    accordionItems.forEach((item, itemIndex) => {
      const itemContent = item.querySelector('.item-content');
      const itemArrow = item.querySelector('.btn-arrow');
      const itemBtn = item.querySelector('.btn-down');
      const itemFon = item.querySelector('.head-item');

      if (itemIndex === index) {
        const isActive = itemContent.style.display === 'flex';
        itemContent.style.display = isActive ? 'none' : 'flex';
        itemArrow.classList.toggle('active', !isActive);
        itemBtn.classList.toggle('active', !isActive);
        itemFon.classList.toggle('active', !isActive);
      } else {
        itemContent.style.display = 'none';
        itemArrow.classList.remove('active');
        itemBtn.classList.remove('active');
        itemFon.classList.remove('active');
      }
    });
  });
});
