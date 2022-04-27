

function enableValidation(config) {
   const form = document.querySelector(config.formSelector);
   const inputs = form.querySelectorAll(config.inputSelector);
   

   inputs.forEach((element) => {
      element.addEventListener('input', (event) => handleFormInput (event, form, config));
   });

   form.addEventListener('submit', (event) => handleSubmit(event, form, config));

   toggleButton(form, config);
}

function toggleButton(form, config) {
   const buttonBtn =document.querySelector(config.submitButtonSelector)
   buttonBtn.disabled = !form.checkValidity();

   buttonBtn.classList.toggle('popup__submit-btn_disabled', !form.checkValidity())
}

// function handleSubmit(event, form) {
//    event.preventDefault();

//    if (form.checkValidity()) {
//       alert('Валидна');
//    } else {
//       alert('Не волидна');
//    }

// }

function handleFormInput(event, form, config) {
   const input = event.target;
   const errorNode = document.querySelector(`#${input.id}-error`);

   if (input.validity.valid) {
      errorNode.textContent ='';
      input.classList.remove('popup__input_type_error');
   } else {
      errorNode.textContent = 'Вы пропустили это поле.';
      input.classList.add('popup__input_type_error');
   }
   toggleButton(form, config);
}



enableValidation({
   formSelector: '.popup__form',
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__submit-btn',
   inactiveButtonClass: 'popup__submit-btn_disabled',
   inputErrorClass: 'popup__input_type_error',
   errorClass: 'popup__error_visible'
}); 