export default class Card {

   constructor(data, selector, userId, handleOpenCard, handleDeleteCard, handleAddLike, handleRemoveLike) {
      this._data = data;
      this._userId = userId;
      this._cardId = this._data._id;
      this._ownerId = this._data.owner._id;
      this._likes = this._data.likes;
      this._element = this._getTemplate(selector);
      this._handleOpenCard = handleOpenCard;
      this._handleDeleteCard = handleDeleteCard;
      this._handleAddLike = handleAddLike;
      this._handleRemoveLike = handleRemoveLike;
      this._image = this._element.querySelector('.card__img');
      this._title = this._element.querySelector('.card__title');
      this._likeButton = this._element.querySelector('.card__like-button');
      this._delButton = this._element.querySelector('.card__del-button');
      this._likeCounter = this._element.querySelector('.card__like-counter');
   }

   _getTemplate(selector) {
      return document
         .querySelector(selector)
         .content
         .querySelector('.card')
         .cloneNode(true);
   }

   _setEventListeners() {
      this._image.addEventListener('click', () => this._handleOpenCard(this._data));
      this._delButton.addEventListener('click', () => this._handleDeleteCard(this._userId));
      this._likeButton.addEventListener('click', () => {
         if (this._likeButton.classList.contains('card__like-active')) {
            this._handleRemoveLike(this._cardId);
         } else {
            this._handleAddLike(this._cardId);
         }
      })
   }

   //изменение количества лайков
   handleLikeCard(data) {
      this._likes = data.likes;
      this._likeCounter.textContent = this._likes.length;
      this._likeButton.classList.toggle('card__like-active');
   }

   //проверка,удалет конпку delete
   _hasDeleteBtn() {
      if (this._userId !== this._ownerId) {
         this._delButton.classList.add('card__del-button_hidden');
      }
   }

   // Проверка,лайка на карточке
   _hasCardLiked() {
      if (this._likes.some((user) => {
         return this._userId === user._id;
      })) {
         this._likeButton.classList.add('card__like-active');
      }
   }

   deleteCard() {
      this._element.remove();
      this._element = null;
   }

   generateCard() {
      this._image.src = this._data.link;
      this._image.alt = this._data.name;
      this._title.textContent = this._data.name;
      this._likeCounter.textContent = this._likes.length;
      this._hasDeleteBtn();
      this._hasCardLiked();
      this._setEventListeners();

      return this._element;
   }
}

