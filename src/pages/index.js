import '../pages/index.css'

import {
    initialCards,
    config,
    profileButton,
    modalWindowEdit,
    cardButton,
    modalWindowCard,
} from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const profileValidator = new FormValidator(config, modalWindowEdit);
profileValidator.enableValidation();

const cardValidator = new FormValidator(config, modalWindowCard);
cardValidator.enableValidation();

const createCard = (data) => {
    const card = new Card(
        data,
        '.card-template',
        data => popupWithImage.open(data)
    );
    return card.generateCard();
}

const section = new Section(
    item => section.addItem(createCard(item)),
    '.elements__list'
);

section.renderItems(initialCards);

const userInfo = new UserInfo({
    nameSelector: '.profile__info-name',
    aboutSelector: '.profile__info-profession'
});

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupWithFormEdit = new PopupWithForm('.popup_type_edit', handleSubmitEdit);
profileButton.addEventListener('click', () => {
    popupWithFormEdit.setInputValues(userInfo.getUserInfo());
    popupWithFormEdit.openPopup()});
popupWithFormEdit.setEventListeners();

const popupWithFormCard = new PopupWithForm('.popup_type_new-card', handleSubmitCard);
cardButton.addEventListener('click', () => { popupWithFormCard.openPopup() });
popupWithFormCard.setEventListeners();

function handleSubmitEdit(data) {
    userInfo.setUserInfo(data);
    popupWithFormEdit.close();
    profileValidator.disableOpenSubmit();
}

function handleSubmitCard(data) {
    section.addItem(createCard(data));
    popupWithFormCard.close();
    cardValidator.disableOpenSubmit();
}