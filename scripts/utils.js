function openPopup(popup) {
   document.addEventListener('keydown', handleEscClose);
   popup.classList.add('popup_is_opened');
   
}

function closePopup(popup) {
   document.removeEventListener('keydown', handleEscClose);
   popup.classList.remove('popup_is_opened');
}

function handleEscClose(event) {
   if (event.key === 'Escape') {
      const element = document.querySelector('.popup_is_opened');
      closePopup(element);
   }
}

export { openPopup, closePopup, handleEscClose};