export default class Popup {
   constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this);
   }

   openPopup() {
      this._popup.classList.add('popup_is_opened');
      document.addEventListener('keydown', this._handleEscClose);
   }

   closePopup() {
      this._popup.classList.remove('popup_is_opened');
      document.removeEventListener('keydown', this._handleEscClose);
   }

   _handleEscClose(evt) {
      if (evt.key === 'Escape') {
         this.closePopup()
      }
   }

   _handleOverlayClose(evt) {
      if (evt.target === evt.currentTarget) {
         this.closePopup()
      }
   }

   setEventListeners() {
      this._popup.querySelector('.popup__button').addEventListener("click", () => this.closePopup())
      this._popup.addEventListener("click", (evt) => this._handleOverlayClose(evt));
   }
}