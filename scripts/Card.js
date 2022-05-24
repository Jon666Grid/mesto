import { openPopup } from './utils.js';
import { modalWindowImg, titlePopup, imagePopup } from './index.js';

export default class Card {
   
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
      titlePopup.textContent = name;
      imagePopup.src = link;
      imagePopup.alt = name;
      openPopup(modalWindowImg);
   }

   _handleLikeCard() {
      this._element.querySelector('.card__like-button').classList.toggle('card__like-active');
   }

   _handleDelCard() {
      this._element.remove();
      this._element = null;
   }

   _setEventListeners() {
      const image = this._element.querySelector('.card__img');
      image.addEventListener('click', () => this._handleOpenCard(this._data));
      const likeButton = this._element.querySelector('.card__like-button');
      likeButton.addEventListener('click', () => this._handleLikeCard());
      const delButton = this._element.querySelector('.card__del-button');
      delButton.addEventListener('click', () => this._handleDelCard());
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

