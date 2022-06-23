import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
   constructor(popupSelector) {
      super(popupSelector);
      this._button = this._popup.querySelector('.popup__submit-btn');
   }

   loadingBtn(status) {
      if (status) {
         this._button.textContent = 'Удаление...'
      } else {
         this._button.textContent = 'Да';
      }
   }

   setConfirmation(remove) {
      this._handleConfirmation = remove;
   }

   setEventListeners() {
      super.setEventListeners();
      this._popup.addEventListener('submit', evt => {
         evt.preventDefault();
         this._handleConfirmation();
      })
   }
}