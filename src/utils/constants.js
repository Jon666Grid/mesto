const config = {
   formSelector: '.popup__form',
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__submit-btn',
   inactiveButtonClass: 'popup__submit-btn_disabled',
   inputErrorClass: 'popup__input_type_error',
};

const profileButton = document.querySelector('.profile__button');
const modalWindowEdit = document.querySelector('.popup_type_edit');
const cardButton = document.querySelector('.profile__add-button');
const modalWindowCard = document.querySelector('.popup_type_new-card');
const delComfButton = document.querySelector('.card__del-button');
const avatarButton = document.querySelector('.profile__avatar');
const modalWindowAvatar = document.querySelector('.popup_type_avatar');

export { 
   config,
   profileButton,
   modalWindowEdit,
   cardButton,
   modalWindowCard,
   delComfButton,
   avatarButton,
   modalWindowAvatar
};