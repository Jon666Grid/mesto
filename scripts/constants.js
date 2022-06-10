const initialCards = [
   {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
   },
   {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
   },
   {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
   },
   {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
   },
   {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
   },
   {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   }
];

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
const listElements = document.querySelector('.elements__list');
const inputArea = document.querySelector('.popup__input_type_area');
const inputUrl = document.querySelector('.popup__input_type_img');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_profession');
const name = document.querySelector('.profile__info-name');
const profession = document.querySelector('.profile__info-profession');

export { 
   initialCards,
   config,
   profileButton,
   modalWindowEdit,
   cardButton,
   modalWindowCard, 
   listElements,
   inputArea,
   inputUrl,
   nameInput,
   jobInput,
   name,
   profession
};