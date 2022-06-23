import '../pages/index.css';

import Api from '../components/Api.js';

import {
    config,
    profileButton,
    modalWindowEdit,
    cardButton,
    modalWindowCard,
    avatarButton,
    modalWindowAvatar
}
    from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-43',
    headers: {
        authorization: '2b06c501-6ac3-4929-adad-4a2d77e5d578',
        'Content-Type': 'application/json'
    }
});

let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then((data) => {
        const [userData, cardData] = data;
        userId = userData._id;
        userInfo.setUserInfo(userData);
        cardsList.renderItems(cardData.reverse());
    })
    .catch((err) => console.log(err))
    .finally(() => { })

const profileValidator = new FormValidator(config, modalWindowEdit);
profileValidator.enableValidation();

const cardValidator = new FormValidator(config, modalWindowCard);
cardValidator.enableValidation();

const AvatarValidator = new FormValidator(config, modalWindowAvatar);
AvatarValidator.enableValidation();

const createCard = (data) => {
    const card = new Card(
        data,
        '.card-template',
        userId,
        () => popupWithImage.open(data),
        () => {
            popupConfirmation.setConfirmation(() => {
                popupConfirmation.loadingBtn(true);
                api
                    .deleteCard(data._id)
                    .then(() => {
                        card.deleteCard();
                        popupConfirmation.closePopup();
                    })
                    .catch((err) => console.log(err))
                    .finally(() => popupConfirmation.loadingBtn(false))
            })
            popupConfirmation.openPopup()
        }, (id) => {
            api.addLike(id)
                .then((data) => {
                    card.handleLikeCard(data);
                })
                .catch((err) => console.log(err));
        }, (id) => {
            api.deleteLike(id)
                .then((data) => {
                    card.handleLikeCard(data);
                })
                .catch((err) => console.log(err));
        }
    );
    return card.generateCard();
};

const cardsList = new Section(
    (item, userId) => cardsList.addItem(createCard(item, userId)),
    '.elements__list'
);

const userInfo = new UserInfo({
    nameSelector: '.profile__info-name',
    aboutSelector: '.profile__info-profession',
    avatar: '.profile__avatar'
});

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupWithFormEdit = new PopupWithForm('.popup_type_edit', handleSubmitEdit);
profileButton.addEventListener('click', () => {
    popupWithFormEdit.setInputValues(userInfo.getUserInfo());
    popupWithFormEdit.openPopup()
});
popupWithFormEdit.setEventListeners();

const popupWithFormCard = new PopupWithForm('.popup_type_new-card', handleSubmitCard);
cardButton.addEventListener('click', () => { popupWithFormCard.openPopup() });
popupWithFormCard.setEventListeners();

const popupWithFormAvatar = new PopupWithForm('.popup_type_avatar', handleSubmitAvatar);
avatarButton.addEventListener('click', () => { popupWithFormAvatar.openPopup() });
popupWithFormAvatar.setEventListeners();

const popupConfirmation = new PopupWithConfirmation('.popup_type_delete-card');
popupConfirmation.setEventListeners();

function handleSubmitEdit(form) {
    popupWithFormEdit.loadingCard(true);
    api.changeInfo(form)
        .then((data) => {
            userInfo.setUserInfo(data);
            popupWithFormEdit.close();
            profileValidator.disableOpenSubmit();
        })
        .catch((err) => console.log(err))
        .finally(() => popupWithFormEdit.loadingCard(false))
}

function handleSubmitCard(input) {
    popupWithFormCard.loadingCard(true);
    api.addCard(input)
        .then((data) => {
            cardsList.addItem(createCard(data));
            popupWithFormCard.close();
            cardValidator.disableOpenSubmit();
        })
        .catch((err) => console.log(err))
        .finally(() => this.loadingCard(false));
}

function handleSubmitAvatar(input) {
    popupWithFormAvatar.loadingCard(true);
    api.changeAvatar(input)
        .then((data) => {
            userInfo.setUserInfo(data);
            popupWithFormAvatar.close();
            AvatarValidator.disableOpenSubmit();
        })
        .catch((err) => console.log(err))
        .finally(() => this.loadingCard(false));
}

