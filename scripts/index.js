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


const profoleButtonActive = document.querySelector('.profile__button');
const modalWindow = document.querySelector('.popup_type_edit');
const modalCloseBtn = modalWindow.querySelector('.popup__close');
// const formSubmitBtn = modalWindow.querySelector('.form__submit-btn');

const cardButtonActive = document.querySelector('.profile__add-button');
const modalWindowTwo = document.querySelector('.popup_type_new-card');
const modalTwoCloseBtn = modalWindowTwo.querySelector('.popup__close');
// const formTwoSubmitBtn = modalWindowTwo.querySelector('.form__submit-btn');

profoleButtonActive.addEventListener('click', () => togglePopup(modalWindow));
modalCloseBtn.addEventListener('click', () => togglePopup(modalWindow));

cardButtonActive.addEventListener('click', () => togglePopup(modalWindowTwo));
modalTwoCloseBtn.addEventListener('click', () => togglePopup(modalWindowTwo));

function togglePopup(popup) {
    popup.classList.toggle('popup_is_opened');
}


function onOverlayClick(event) {
    if (event.target === event.currentTarget) {
        modalWindow.classList.remove('popup_is_opened');
        modalWindowTwo.classList.remove('popup_is_opened');
    }
}

modalWindow.addEventListener('click', onOverlayClick);
modalWindowTwo.addEventListener('click', onOverlayClick);


const formTypeEdit = document.querySelector('.forum_type_edit');
const nameInput = formTypeEdit.querySelector('.form__text_type_name');
const jobInput = formTypeEdit.querySelector('.form__text_type_profession');
const profileInfoName = document.querySelector('.profile__info-name');
const profileInfoProfession = document.querySelector('.profile__info-profession');

function formSubmitHandler(event) {
    event.preventDefault();
    profileInfoName.textContent = nameInput.value;
    profileInfoProfession.textContent = jobInput.value;
    togglePopup(modalWindow); 
}

formTypeEdit.addEventListener('submit', formSubmitHandler);


const listElements = document.querySelector('.elements__list');
const cardTemplateAdd = document.querySelector('.card-template');

const formTypeCard = document.querySelector('.forum_type_card');
const ImputImgAdd = formTypeCard.querySelector ('.form__text_type_img');


function render() {
    const html = initialCards.map(getCard);
    listElements.append(...html);
}

function getCard(item) {
    const getTemplateList = cardTemplateAdd.content.cloneNode(true);
    const titleCard = getTemplateList.querySelector('.card__title');
    const imageCard = getTemplateList.querySelector('.card__img');
    const cardDelButton = getTemplateList.querySelector ('.card__del-button')
    const cardLikeButton = getTemplateList.querySelector ('.card__like-button')
    cardDelButton.addEventListener('click', handleRemoveElement);
    cardLikeButton.addEventListener('click', () => cardLikeButton.classList.toggle('card__like-active'));
    titleCard.textContent = item.name;
    imageCard.src = item.link;
    return getTemplateList;
}

function handleAddCard(event) {
    event.preventDefault();
    const inputValueArea = document.querySelector('.form__text_type_area').value;
    const inputValueUrl = document.querySelector('.form__text_type_img').value;
    const elemenCard = getCard({ name: inputValueArea, link: inputValueUrl });
    listElements.prepend(elemenCard); 
    togglePopup(modalWindowTwo);
}

formTypeCard.addEventListener('submit', handleAddCard);

render();

function handleRemoveElement (event) {
    const button = event.target.closest('.card');
    button.remove();
}