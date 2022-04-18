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
const modalCloseBtn = modalWindow.querySelector('.popup__close_edit');

const cardButtonActive = document.querySelector('.profile__add-button');
const modalWindowTwo = document.querySelector('.popup_type_new-card');
const modalTwoCloseBtn = modalWindowTwo.querySelector('.popup__close_card');

const modalWindowThree = document.querySelector('.popup_type_image');
const modalThreeCloseBtn = modalWindowThree.querySelector('.popup__close_img');
const titlePopup = modalWindowThree.querySelector('.popup__title');
const imagePopup = modalWindowThree.querySelector('.popup__img');


const listElements = document.querySelector('.elements__list');
const cardTemplateAdd = document.querySelector('.card-template');

const formTypeCard = document.querySelector('.form_card');
const ImputImgAdd = formTypeCard.querySelector('.form__text_type_img');

const formTypeEdit = document.querySelector('.form_edit');
const nameInput = formTypeEdit.querySelector('.form__text_type_name');
const jobInput = formTypeEdit.querySelector('.form__text_type_profession');
const profileInfoName = document.querySelector('.profile__info-name');
const profileInfoProfession = document.querySelector('.profile__info-profession');


profoleButtonActive.addEventListener('click', () => togglePopup(modalWindow));
modalCloseBtn.addEventListener('click', () => togglePopup(modalWindow));

cardButtonActive.addEventListener('click', () => togglePopup(modalWindowTwo));
modalTwoCloseBtn.addEventListener('click', () => togglePopup(modalWindowTwo));

modalThreeCloseBtn.addEventListener('click', () => togglePopup(modalWindowThree));

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

function formSubmitHandler(event) {
    event.preventDefault();
    profileInfoName.textContent = nameInput.value;
    profileInfoProfession.textContent = jobInput.value;
    togglePopup(modalWindow);
}

formTypeEdit.addEventListener('submit', formSubmitHandler);

function render() {
    const html = initialCards.map(getCard);
    listElements.append(...html);
}

function getCard(item) {
    const getTemplateList = cardTemplateAdd.content.cloneNode(true);
    const titleCard = getTemplateList.querySelector('.card__title');
    const imageCard = getTemplateList.querySelector('.card__img');
    const cardDelButton = getTemplateList.querySelector('.card__del-button');
    const cardLikeButton = getTemplateList.querySelector('.card__like-button');


    cardLikeButton.addEventListener('click', () => cardLikeButton.classList.toggle('card__like-active'));
    cardDelButton.addEventListener('click', (event) => event.target.closest('.card').remove());
    imageCard.addEventListener('click', openAddImgCard);

    titleCard.textContent = item.name;
    imageCard.src = item.link;


    function openAddImgCard() {
        modalWindowThree.classList.add('popup_is_opened');
        titlePopup.textContent = titleCard.textContent;
        imagePopup.src = imageCard.src;
    }
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