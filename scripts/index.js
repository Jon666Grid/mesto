import { initialCards, config } from './constants.js';
import { openPopup, closePopup } from './utils.js';
import Card from './Card.js';
import { FormValidator } from './FormValidator.js';

const profileButton = document.querySelector('.profile__button');
const modalWindowEdit = document.querySelector('.popup_type_edit');
const modalCloseBtn = modalWindowEdit.querySelector('.popup__button_edit');
const cardButton = document.querySelector('.profile__add-button');
const modalWindowCard = document.querySelector('.popup_type_new-card');
const cardCloseBtn = modalWindowCard.querySelector('.popup__button_card');
const modalWindowImg = document.querySelector('.popup_type_image');
const titlePopup = modalWindowImg.querySelector('.popup__title');
const imagePopup = modalWindowImg.querySelector('.popup__img');
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
    ProfileValidator.disableOpenSubmit();
}

function profileSubmitHandler(event) {
    event.preventDefault();
    profileInfoName.textContent = nameInput.value;
    profileInfoProfession.textContent = jobInput.value;
    closePopup(modalWindowEdit);
}

const dataCard = (data) => {
    const card = new Card(data, '.card-template');
    return card.generateCard();
}

const handleAddCard = (event) => {
    event.preventDefault();
    const card = dataCard({ name: inputValueArea.value, link: inputValueUrl.value });
    listElements.prepend(card);
    closePopup(modalWindowCard);
    formTypeCard.reset()
}

const itemAddCards = (item) => {
    const card = dataCard(item);
    listElements.append(card);
}

initialCards.forEach((item) => {
    itemAddCards(item);
});

profileButton.addEventListener('click', profileOpenHadler);
modalCloseBtn.addEventListener('click', () => closePopup(modalWindowEdit));
cardButton.addEventListener('click', () => openPopup(modalWindowCard, CardValidator.disableOpenSubmit()));
cardCloseBtn.addEventListener('click', () => closePopup(modalWindowCard));
modalThreeCloseBtn.addEventListener('click', () => closePopup(modalWindowImg));

modalWindowEdit.addEventListener('click', onOverlayClick);
modalWindowCard.addEventListener('click', onOverlayClick);
modalWindowImg.addEventListener('click', onOverlayClick);

formTypeEdit.addEventListener('submit', profileSubmitHandler);
formTypeCard.addEventListener('submit', handleAddCard);

export { modalWindowImg, titlePopup, imagePopup };