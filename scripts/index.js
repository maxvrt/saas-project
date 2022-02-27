const formElements = document.querySelectorAll('.form-send');
const matching = /^\S+@\S+\.\S+$/

formElements.forEach(el => el.addEventListener('input',  evt => {
    const input = evt.target;
    if (input.className.includes('form-send__input') && input.value.match(matching)){
      const form = el.closest('.form-send');
      const buttonTxt = form.querySelector('.form-send__button-text');
      buttonTxt.innerText = 'Круто, спасибо за доверие!';
      buttonTxt.styleSheets[0].addRule('p.special:before', 'content: "";');
    }
}));
