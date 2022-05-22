
import initialCards from './constants.js';
import { openPopup, closePopup } from './utils.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const profileButton = document.querySelector('.profile__button');
const modalWindowEdit = document.querySelector('.popup_type_edit');
const modalCloseBtn = modalWindowEdit.querySelector('.popup__button_edit');
const cardButton = document.querySelector('.profile__add-button');
const modalWindowCard = document.querySelector('.popup_type_new-card');
const cardCloseBtn = modalWindowCard.querySelector('.popup__button_card');
const modalWindowImg = document.querySelector('.popup_type_image');
const modalThreeCloseBtn = modalWindowImg.querySelector('.popup__button_img');
const listElements = document.querySelector('.elements__list');
const formTypeCard = document.querySelector('.form-card');
const inputValueArea = formTypeCard.querySelector('.popup__input_type_area');
const inputValueUrl = formTypeCard.querySelector('.popup__input_type_img');
const formTypeEdit = document.querySelector('.form-edit');
const nameInput = formTypeEdit.querySelector('.popup__input_type_name');
const jobInput = formTypeEdit.querySelector('.popup__input_type_profession');
const profileInfoName = document.querySelector('.profile__info-name');
const profileInfoProfession = document.querySelector('.profile__info-profession');

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
};

const ProfileValidator = new FormValidator(config, modalWindowEdit);
ProfileValidator.enableValidation();

const CardValidator = new FormValidator(config, modalWindowCard);
CardValidator.enableValidation();

function onOverlayClick(event) {
    if (event.target === event.currentTarget) {
        const element = document.querySelector('.popup_is_opened');
        closePopup(element);
    }
}

function profileOpenHadler() {
    nameInput.value = profileInfoName.textContent;
    jobInput.value = profileInfoProfession.textContent;
    openPopup(modalWindowEdit);
}

function profileSubmitHandler(event) {
    event.preventDefault();
    profileInfoName.textContent = nameInput.value;
    profileInfoProfession.textContent = jobInput.value;
    closePopup(modalWindowEdit);
}

const cardData = (data) => {
    const card = new Card(data, '.card-template');
    return card.generateCard();
}

function handleAddCard(data) {
    const card = cardData(data ?? { name: inputValueArea.value, link: inputValueUrl.value });
    closePopup(modalWindowCard);
    listElements.prepend(card);
    formTypeCard.reset()
}

initialCards.forEach((data) => {
    handleAddCard(data);
});

profileButton.addEventListener('click', profileOpenHadler);
modalCloseBtn.addEventListener('click', () => closePopup(modalWindowEdit));
cardButton.addEventListener('click', () => openPopup(modalWindowCard));
cardCloseBtn.addEventListener('click', () => closePopup(modalWindowCard));
modalThreeCloseBtn.addEventListener('click', () => closePopup(modalWindowImg));

modalWindowEdit.addEventListener('click', onOverlayClick);
modalWindowCard.addEventListener('click', onOverlayClick);
modalWindowImg.addEventListener('click', onOverlayClick);

formTypeEdit.addEventListener('submit', profileSubmitHandler);
formTypeCard.addEventListener('submit', (e) => handleAddCard(e.preventDefault()));