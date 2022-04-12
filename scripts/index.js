const profoleButtonActive = document.querySelector('.profile__button');
const modalWindow = document.querySelector('.popup_type_edit');
const modalCloseBtn = modalWindow.querySelector('.popup__close');
const formSubmitBtn = modalWindow.querySelector('.form__submit-btn');

function toggleModalWindow() {
    modalWindow.classList.toggle('popup_is_opened');
}

profoleButtonActive.addEventListener('click', toggleModalWindow);
modalCloseBtn.addEventListener('click', toggleModalWindow);

function onOverClick(event) {
    if (event.target === event.currentTarget) {
        toggleModalWindow();
    }
}

modalWindow.addEventListener('click', onOverClick);

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
