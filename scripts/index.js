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


const profoleButtonAdd = document.querySelector('.profile__add-button');




const modalWindowCard = document.querySelector('.popup_type_new-card');
const modalCloseBtnCard = modalWindowCard.querySelector('.popup__close');
const formSubmitBtnCard = modalWindowCard.querySelector('.form__submit-btn');

const profoleButtonActive = document.querySelector('.profile__button');

function popup(e) {
    const modalEdit = document.querySelector('.popup_type_edit');
    const modalCloseBtn = modalEdit.querySelector('.popup__close');
    const formSubmitBtn = modalEdit.querySelector('.form__submit-btn');
    modalEdit.classList.add ('popup_is_opened');
}

// function openModal() {
//     modalWindow.classList.toggle('popup_is_opened');
//     modalWindowCard.classList.toggle('popup_is_opened');
// }

// profoleButtonActive.addEventListener('click', openModal);
// modalCloseBtn.addEventListener('click', openModal);

// profoleButtonAdd.addEventListener('click', openModal);

// function onOverClick(event) {
//     if (event.target === event.currentTarget) {
//         openModal();
//     }
// }

// modalWindow.addEventListener('click', onOverClick);

const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.form__text_type_name');
const jobInput = formElement.querySelector('.form__text_type_profession');
const profileInfoName = document.querySelector('.profile__info-name');
const profileInfoProfession = document.querySelector('.profile__info-profession');

function formSubmitHandler(event) {
    event.preventDefault();

    profileInfoName.textContent = nameInput.value;
    profileInfoProfession.textContent = jobInput.value;
    toggleModalWindow();
}

formElement.addEventListener('submit', formSubmitHandler);
