import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
   constructor(popupSelector, submitHandler) {
      super(popupSelector);
      this._submitHandler = submitHandler;
      this._form = this._popup.querySelector('.popup__form');
      this._button = this._form.querySelector('.popup__submit');
      this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));
      this.inputsValues = {};
   }

   _getInputValues() {
      this._inputs.forEach((input) => {
         this.inputsValues[input.name] = input.value
      });
      return this.inputsValues;
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