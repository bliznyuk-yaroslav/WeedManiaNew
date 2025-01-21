const buttonElemGoogle = document.querySelectorAll('.js-button-googleplay');

buttonElemGoogle.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.sfgh.weedmania.gp';
  });
});
