import { openPopup } from './utils.js';

export default class Card {
   _modalWindowImg = document.querySelector('.popup_type_image');
   _titlePopup = this._modalWindowImg.querySelector('.popup__title');
   _imagePopup = this._modalWindowImg.querySelector('.popup__img');

   constructor(data, cardSelector) {
      this._data = data;
      this._cardSelector = cardSelector;
   }


   _getTemplate() {
      const cardElement = document
         .querySelector(this._cardSelector)
         .content
         .querySelector('.card')
         .cloneNode(true);

      return cardElement;
   }
   
   _handleOpenCard({ name, link }) {
      this._titlePopup.textContent = name;
      this._imagePopup.src = link;
      this._imagePopup.alt = name;
      openPopup(this._modalWindowImg);
   }

   _handleLikeCard() {
      this._element.querySelector('.card__like-button').classList.toggle('card__like-active');
   }

   _handleDelCard() {
      this._element.closest('.card').remove();
   }



   _setEventListeners() {
      const image = this._element.querySelector('.card__img');
      image.addEventListener('click', () => this._handleOpenCard(this._data));

      const likeButton = this._element.querySelector('.card__like-button');
      likeButton.addEventListener('click',() => this._handleLikeCard());

      const delButton = this._element.querySelector('.card__del-button');
      delButton.addEventListener('click',() => this._handleDelCard());
   }



   generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();

      const image = this._element.querySelector('.card__img');
      image.alt = this._data.name;
      image.src = this._data.link;

      this._element.querySelector('.card__title').textContent = this._data.name;

      return this._element;
   }
}

