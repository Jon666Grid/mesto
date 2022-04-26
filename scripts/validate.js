

function enableValidation(config) {
   const form = document.querySelector(config.formSelector);
   const inputs = form.querySelectorAll(config.inputSelector);
   // const errorClass = form.querySelectorAll(config.inputErrorClass);

   inputs.forEach((element) => {
      element.addEventListener('input', handleFormInput);
   });

   form.addEventListener('submit', (event) => handleSubmit(event, form));
}


// function handleSubmit(event, form) {
//    event.preventDefault();

//    if (form.checkValidity()) {
//       alert('Валидна');
//    } else {
//       alert('Не волидна');
//    }

// }

function handleFormInput(event) {
   const input = event.target;
   const errorNode = document.querySelector(`#${input.id}-error`);

   if (input.validity.valid) {
      errorNode.textContent ='';
      input.classList.remove('popup__input_type_error');
   } else {
      errorNode.textContent = input.validationMessage;
      input.classList.add('popup__input_type_error');
   }
}

enableValidation({
   formSelector: '.popup__form',
   inputSelector: '.popup__input',
   // submitButtonSelector: '.popup__button',
   // inactiveButtonClass: 'popup__button_disabled',
   inputErrorClass: 'popup__input_type_error',
   // errorClass: 'popup__error_visible'
}); 