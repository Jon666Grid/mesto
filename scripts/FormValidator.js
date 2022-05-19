
export default class FormValidator {
   enableValidation = ({
      submitButtonSelector: '.popup__submit-btn',
      inactiveButtonClass: 'popup__submit-btn_disabled',
      inputErrorClass: 'popup__input_type_error',
   });
   
   // constructor(config, formElement) {
   //    this._config = config;
   //    this._formElement = formElement;
   // }
   _handleFormInput(event, config, formElement) {
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
   
   toggleButton(config, formElement) {
      const buttonBtn = formElement.querySelector(config.submitButtonSelector)
      buttonBtn.disabled = !formElement.checkValidity();
      buttonBtn.classList.toggle(config.inactiveButtonClass, !formElement.checkValidity());
   }
}