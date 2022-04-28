const profoleButtonActive = document.querySelector('.profile__button');
const modalWindowEdit = document.querySelector('.popup_type_edit');
const modalCloseBtn = modalWindowEdit.querySelector('.popup__button_edit');

const cardButtonActive = document.querySelector('.profile__add-button');
const modalWindowCard = document.querySelector('.popup_type_new-card');
const cardCloseBtn = modalWindowCard.querySelector('.popup__button_card');

const modalWindowImg = document.querySelector('.popup_type_image');
const modalThreeCloseBtn = modalWindowImg.querySelector('.popup__button_img');
const titlePopup = modalWindowImg.querySelector('.popup__title');
const imagePopup = modalWindowImg.querySelector('.popup__img');

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

function openPopup(popup) {
    popup.classList.add('popup_is_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_is_opened');
}

function onOverlayClick(event) {
    if (event.target === event.currentTarget || event.key === 'Escape') {
        const element = document.querySelector('.popup_is_opened');
        closePopup(element);
    }
}

function formSubmitHandler(event) {
    event.preventDefault();
    profileInfoName.textContent = nameInput.value || profileInfoName.textContent;
    profileInfoProfession.textContent = jobInput.value || profileInfoProfession.textContent;
    closePopup(modalWindowEdit);
}

function render() {
    const html = initialCards.map(getCard);
    listElements.append(...html);
}

function getCard(item) {
    const card = cardTemplateAdd.content.cloneNode(true);
    const titleCard = card.querySelector('.card__title');
    const imageCard = card.querySelector('.card__img');
    const cardDelButton = card.querySelector('.card__del-button');
    const cardLikeButton = card.querySelector('.card__like-button');

    titleCard.textContent = item.name;
    imageCard.src = item.link;
    imageCard.alt = item.name;

    cardLikeButton.addEventListener('click', handleLikeCard);
    cardDelButton.addEventListener('click', handleDelCard);
    imageCard.addEventListener('click', () => handleOpenCard(item));

    return card;
}

function handleOpenCard(item) {
    titlePopup.textContent = item.name;
    imagePopup.src = item.link;
    imagePopup.alt = item.name;
    openPopup(modalWindowImg);
}

function handleLikeCard(event) {
    event.target.classList.toggle('card__like-active');
}

function handleDelCard(event) {
    event.target.closest('.card').remove();
}

function handleAddCard(event) {
    event.preventDefault();
    const elemenCard = getCard({ name: inputValueArea.value, link: inputValueUrl.value });
    closePopup(modalWindowCard);
    listElements.prepend(elemenCard);
    formTypeCard.reset()
}

render();

profoleButtonActive.addEventListener('click', () => openPopup(modalWindowEdit));
modalCloseBtn.addEventListener('click', () => closePopup(modalWindowEdit));
cardButtonActive.addEventListener('click', () => openPopup(modalWindowCard));
cardCloseBtn.addEventListener('click', () => closePopup(modalWindowCard));
modalThreeCloseBtn.addEventListener('click', () => closePopup(modalWindowImg));

modalWindowEdit.addEventListener('click', onOverlayClick);
modalWindowCard.addEventListener('click', onOverlayClick);
modalWindowImg.addEventListener('click', onOverlayClick);

formTypeEdit.addEventListener('submit', formSubmitHandler);
formTypeCard.addEventListener('submit', handleAddCard);
document.addEventListener('keydown', onOverlayClick);