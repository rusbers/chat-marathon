const UI_ELEMENTS = {
  MESSAGES_HISTORY: document.querySelector('.messages'),
  MESSAGE_INPUT: document.getElementById('form__input'),

  FORMS: {
    SEND_MESSAGE: document.querySelector('.message-field__form'),
    AUTHENTIFICATION: document.querySelector('.authorization-form'),
    AUTHENTIFICATION_CODE: document.querySelector('.authorization-code-form'),
    SETTING_NAME: document.querySelector('.name-form'),
  },

  CONTROLS: {
    SETTINGS: document.querySelector('.btn--settings'),
    AUTHORIZATION: document.querySelector('.btn--authorization'),
  },

  MODAL: {
    COLLECTION: document.querySelectorAll('.modal'),
    SETTINGS: document.querySelector('.modal-settings'),
    AUTHENTIFICATION: document.querySelector('.modal-authorization'),
    AUTHENTIFICATION_CODE: document.querySelector('.modal-authorization-code'),
    CLOSE_BTN: document.querySelectorAll('.close-modal'),
  },

  TEMPLATES: {
    MESSAGE: document.getElementById('message-template'),
  },
};

const CLASSES = {
  POPUP: 'modal',
  HIDE_POPUP: 'modal--hide',
  FORM_INPUT: 'input',
  USER_MESSAGE: 'message--user',
}

const MESSAGES = {
  ERROR: {
    WRONG_HTTP_STATUS: 'Неверный статус',
    USER_NAME: 'Неверное имя пользователя',
  },

  LOG_OUT: 'Выйти',
}

const MODAL = new Map([
  [UI_ELEMENTS.CONTROLS.SETTINGS, UI_ELEMENTS.MODAL.SETTINGS],
  [UI_ELEMENTS.CONTROLS.AUTHORIZATION, UI_ELEMENTS.MODAL.AUTHENTIFICATION]
])

MODAL.forEach((popup, button) => {
  button.addEventListener('click', function() {
    popup.classList.toggle(CLASSES.HIDE_POPUP)
  })
})

UI_ELEMENTS.MODAL.CLOSE_BTN.forEach((button) => {
  button.addEventListener('click', function() {
    UI_ELEMENTS.MODAL.COLLECTION.forEach(modalWindow => {
      modalWindow.classList.remove(CLASSES.HIDE_POPUP);
      modalWindow.classList.add(CLASSES.HIDE_POPUP);
    })
  })
})

function getMessageTemplate() {
  return UI_ELEMENTS.TEMPLATES.MESSAGE.content.cloneNode(true);
}

function scrollDown() {
  UI_ELEMENTS.MESSAGES_HISTORY.scrollTop = UI_ELEMENTS.MESSAGES_HISTORY.scrollHeight;
}

function closePopup(thisForm) {
  thisForm.closest(`.${CLASSES.POPUP}`).classList.add(CLASSES.HIDE_POPUP);
}

function openPopup(popup) {
  popup.classList.remove(CLASSES.HIDE_POPUP);
}

function resetInput(thisForm) {
  thisForm.reset();
}

export { UI_ELEMENTS, CLASSES, MESSAGES, getMessageTemplate, scrollDown, closePopup, resetInput, openPopup }
