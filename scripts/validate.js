function enableValidation(config) {
   const form = Array.from(document.querySelectorAll(config.formSelector));
   form.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
         evt.preventDefault();
         toggleButton(config, formElement);
      });
      const inputs = Array.from(formElement.querySelectorAll(config.inputSelector));
      inputs.forEach((inputList) => {
         inputList.addEventListener('input', (event) => handleFormInput(event, config, formElement));
      });
      toggleButton(config, formElement);
   });
};

function handleFormInput(event, config, formElement) {
   const input = event.target;
   const errorNode = document.querySelector(`#${input.id}-error`);

   if (input.validity.valid) {
      input.classList.remove(config.errorClass);
      errorNode.textContent = '';
      input.classList.remove(config.inputErrorClass);
   } else {
      errorNode.textContent = input.validationMessage;
      input.classList.add(config.inputErrorClass);
      input.classList.add(config.errorClass);
   }
   toggleButton(config, formElement);
}

function toggleButton(config, formElement) {
   const buttonBtn = formElement.querySelector(config.submitButtonSelector)
   buttonBtn.disabled = !formElement.checkValidity();
   buttonBtn.classList.toggle(config.inactiveButtonClass, !formElement.checkValidity());
}

enableValidation({
   formSelector: '.popup__form',
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__submit-btn',
   inactiveButtonClass: 'popup__submit-btn_disabled',
   inputErrorClass: 'popup__input_type_error',
});