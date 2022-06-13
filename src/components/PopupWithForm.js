import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
   constructor(popupSelector, submitHandler) {
      super(popupSelector);
      this._submitHandler = submitHandler;
      this._form = this._popup.querySelector('.popup__form');
      this._button = this._form.querySelector('.popup__submit-btn');
      this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));
   }

   _getInputValues() {
      this._inputsValues = {};
      this._inputs.forEach((data) => {
         this._inputsValues[data.name] = data.value});
      return this._inputsValues;
   }

   setInputValues(values) {
      this._inputs.forEach(input => input.value = values[input.name])
   }

   setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         this._submitHandler(this._getInputValues());
      });
   }

   close() {
      this._form.reset();
      super.closePopup();
   }
}