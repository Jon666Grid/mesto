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

const popup = document.querySelector('.popup');

const profoleButtonActive = document.querySelector('.profile__button');
const modalWindow = document.querySelector('.popup_type_edit');
const modalCloseBtn = modalWindow.querySelector('.popup__close');
const formSubmitBtn = modalWindow.querySelector('.form__submit-btn');

const cardButtonActive = document.querySelector('.profile__add-button');
const modalWindowTwo = document.querySelector('.popup_type_new-card');
const modalTwoCloseBtn = modalWindowTwo.querySelector('.popup__close');
const formTwoSubmitBtn = modalWindowTwo.querySelector('.form__submit-btn');

profoleButtonActive.addEventListener('click', ()=>togglePopup(0));
// modalCloseBtn.addEventListener('click', ()=>togglePopup(modalWindow));

cardButtonActive.addEventListener('click', ()=>togglePopup(1));



function togglePopup () {
    popup[0].classList.toggle('popup_is_opened')
}

// function closePopup () {
//     popup.classList.remove('popup_is_opened')
// }





// function onOverClick(event) {
//     if (event.target === event.currentTarget) {
//         popup.classList.remove('popup_is_opened');
//     }
// }

// popup.addEventListener('click', onOverClick);

// const formElement = document.querySelector('.form');
// const nameInput = formElement.querySelector('.form__text_type_name');
// const jobInput = formElement.querySelector('.form__text_type_profession');
// const profileInfoName = document.querySelector('.profile__info-name');
// const profileInfoProfession = document.querySelector('.profile__info-profession');

// function formSubmitHandler(event) {
//     event.preventDefault();

//     profileInfoName.textContent = nameInput.value;
//     profileInfoProfession.textContent = jobInput.value;
//     toggleModalWindow();
// }

// formElement.addEventListener('submit', formSubmitHandler);