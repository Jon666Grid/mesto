
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
const cardTemplateAdd = document.querySelector('.card-template');
const formTypeCard = document.querySelector('.form-card');
const inputValueArea = formTypeCard.querySelector('.popup__input_type_area');
const inputValueUrl = formTypeCard.querySelector('.popup__input_type_img');
const formTypeEdit = document.querySelector('.form-edit');
const nameInput = formTypeEdit.querySelector('.popup__input_type_name');
const jobInput = formTypeEdit.querySelector('.popup__input_type_profession');
const profileInfoName = document.querySelector('.profile__info-name');
const profileInfoProfession = document.querySelector('.profile__info-profession');


function enableValidation(config) {
    const form = Array.from(document.querySelectorAll(config.formSelector));
    form.forEach((item) => {
        item.addEventListener('submit', function (evt) {
            evt.preventDefault();
            toggleButton(config, item);
        });
        const inputs = Array.from(item.querySelectorAll(config.inputSelector));
        inputs.forEach((inputList) => {
            inputList.addEventListener('input', (event) => handleFormInput(event, config, item));
        });
        toggleButton(config, item);
    });
};
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
});


// const validationEdit = new FormValidator(enableValidation, profileButton);
// // const validationAdd = new FormValidator(enableValidation);

// validationEdit.toggleButton();
// // validationAdd.toggleButton();


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

function cardData(data) {
    const card = cardTemplateAdd.content.cloneNode(true);
    const titleCard = card.querySelector('.card__title');
    const imageCard = card.querySelector('.card__img');

    titleCard.textContent = data.name;
    imageCard.src = data.link;
    imageCard.alt = data.name;

    return card;
}

function handleAddCard(event) {
    event.preventDefault();
    const elemenCard = cardData({ name: inputValueArea.value, link: inputValueUrl.value });
    closePopup(modalWindowCard);
    listElements.prepend(elemenCard);
    formTypeCard.reset()
}

initialCards.forEach((item) => {
    const card = new Card(item, '.card-template');
    const cardElement = card.generateCard();
    document.querySelector('.elements__list').append(cardElement);
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
formTypeCard.addEventListener('submit', handleAddCard);