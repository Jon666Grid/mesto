import {
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
} from './constants.js';
import { FormValidator } from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

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