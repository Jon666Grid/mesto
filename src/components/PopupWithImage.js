import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
   constructor(popupSelector) {
      super(popupSelector);
      this._imagePopup = this._popup.querySelector(".popup__img");
      this._titlePopup = this._popup.querySelector(".popup__title");
   }

   open(data) {
      this._titlePopup.textContent = data.name;
      this._imagePopup.src = data.link;
      this._imagePopup.alt = data.link;
      super.openPopup();
   }
}
