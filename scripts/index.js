import { initialCards, config } from './constants.js';
import { FormValidator } from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';


const profileButton = document.querySelector('.profile__button');
const modalWindowEdit = document.querySelector('.popup_type_edit');
const cardButton = document.querySelector('.profile__add-button');
const modalWindowCard = document.querySelector('.popup_type_new-card');
const listElements = document.querySelector('.elements__list');
const formTypeCard = document.querySelector('.form-card');
const inputArea = formTypeCard.querySelector('.popup__input_type_area');
const inputUrl = formTypeCard.querySelector('.popup__input_type_img');
const formTypeEdit = document.querySelector('.form-edit');
const nameInput = formTypeEdit.querySelector('.popup__input_type_name');
const jobInput = formTypeEdit.querySelector('.popup__input_type_profession');
const name = document.querySelector('.profile__info-name');
const profession = document.querySelector('.profile__info-profession');

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

const section = new Section({
    items: initialCards,
    renderer: (item) => {
        section.addItem(createCard(item));
    },
}, listElements);

section.renderItems();

const userInfo = new UserInfo({
    nameSelector: name,
    professionSelector: profession
});

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupWithFormEdit = new PopupWithForm('.popup_type_edit', handleSubmitEdit);
profileButton.addEventListener('click', () => { popupWithFormEdit.openPopup() });
popupWithFormEdit.setEventListeners();

const popupWithFormCard = new PopupWithForm('.popup_type_new-card', handleSubmitCard);
cardButton.addEventListener('click', () => { popupWithFormCard.openPopup() });
popupWithFormCard.setEventListeners();

function handleSubmitEdit() {
    userInfo.setUserInfo({ name: nameInput.value, about: jobInput.value });
    popupWithFormEdit.close();
    profileValidator.disableOpenSubmit();
}

function handleSubmitCard() {
    section.addItem(createCard({ name: inputArea.value, link: inputUrl.value }));
    popupWithFormCard.close();
    cardValidator.disableOpenSubmit();
}