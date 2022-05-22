export default class FormValidator {

   constructor(config, formElement) {
      this._config = config;
      this._form = formElement;

      this._submit = this._form.querySelector(this._config.submitButtonSelector);
      this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));

      this._inputErrorClass = this._config.inputErrorClass;
      this._submitDisabled = this._config.inactiveButtonClass;
   };

   _showInputError(input, errorMessage) {
      const error = this._form.querySelector(`#${input.id}-error`);
      input.classList.add(this._inputErrorClass);
      error.textContent = errorMessage;
      error.classList.add(this._errorClass);
   }

   _hideInputError(input) {
      const error = this._form.querySelector(`#${input.id}-error`);
      input.classList.remove(this._inputErrorClass);
      error.classList.remove(this._errorClass);
      error.textContent = '';
   }

   _checkInputValidity(input) {
      if (!input.validity.valid) {
         this._showInputError(input, input.validationMessage);
      } else {
         this._hideInputError(input);
      }
   }

   _hasInvalidInput() {
      return this._inputList.some((input) => !input.validity.valid);
   }

   _toggleSubmitState() {
      const button = this._submit;
      button.disabled = this._hasInvalidInput();
      button.classList.toggle(this._submitDisabled, this._hasInvalidInput());
   }

   _setEventListeners() {
      this._inputList.forEach((input) => {
         input.addEventListener('input', () => {
            this._checkInputValidity(input);
            this._toggleSubmitState();
         });
      });
   }

   setInitialState() {
      this._inputList.forEach((input) => {
         this._hideInputError(input);
         this._toggleSubmitState();
      });
   }

   enableValidation() {
      this._setEventListeners();
      this._toggleSubmitState();
   }
}
