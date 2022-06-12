export default class Card {

   constructor(data, selector, handleOpenCard) {
      this._data = data;
      this._handleOpenCard = handleOpenCard;
      this._element = this._getTemplate(selector);
      this._image = this._element.querySelector('.card__img');
      this._title = this._element.querySelector('.card__title');
      this._likeButton = this._element.querySelector('.card__like-button');
      this._delButton = this._element.querySelector('.card__del-button');
   }

   _getTemplate(selector) {
      return document
         .querySelector(selector)
         .content
         .querySelector('.card')
         .cloneNode(true);
   }

   _handleLikeCard() {
      this._element.querySelector('.card__like-button').classList.toggle('card__like-active');
   }

   _handleDelCard() {
      this._element.remove();
      this._element = null;
   }

   _setEventListeners() {
      this._image.addEventListener('click', () => this._handleOpenCard(this._data));
      this._likeButton.addEventListener('click', () => this._handleLikeCard());
      this._delButton.addEventListener('click', () => this._handleDelCard());
   }

   generateCard() {
      this._setEventListeners();
      this._image.src = this._data.link;
      this._image.alt = this._data.name;
      this._title.textContent = this._data.name;
      
      return this._element;
   }
}

