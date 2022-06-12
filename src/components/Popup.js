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
      evt.key == 'Escape'
         ? this.closePopup()
         : false;
   }

   _handleOverlayClose(evt) {
      evt.target === evt.currentTarget
         ? this.closePopup()
         : false;
   }

   setEventListeners() {
      this._popup.querySelector('.popup__button').addEventListener("mousedown", () => this.closePopup())
      this._popup.addEventListener("mousedown", (evt) => this._handleOverlayClose(evt));
   }
}