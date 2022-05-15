const UI_ELEMENTS = {
  MESSAGES_HISTORY: <HTMLDivElement>document.querySelector('.messages'),
  MESSAGE_INPUT: <HTMLInputElement>document.getElementById('form__input'),

  FORMS: {
    SEND_MESSAGE: <HTMLFormElement>document.querySelector('.message-field__form'),
    AUTHENTIFICATION: <HTMLElement>document.querySelector('.authorization-form'),
    AUTHENTIFICATION_CODE: <HTMLElement>document.querySelector('.authorization-code-form'),
    SETTING_NAME: <HTMLElement>document.querySelector('.name-form'),
  },

  CONTROLS: {
    SETTINGS: <HTMLElement>document.querySelector('.btn--settings'),
    AUTHORIZATION: <HTMLElement>document.querySelector('.btn--authorization'),
  },

  MODAL: {
    COLLECTION: <NodeListOf<Element>>document.querySelectorAll('.modal'),
    SETTINGS: <HTMLElement>document.querySelector('.modal-settings'),
    AUTHENTIFICATION: <HTMLElement>document.querySelector('.modal-authorization'),
    AUTHENTIFICATION_CODE: <HTMLElement>document.querySelector('.modal-authorization-code'),
    CLOSE_BTN: <NodeListOf<Element>>document.querySelectorAll('.close-modal'),
  },

  TEMPLATES: {
    MESSAGE: <HTMLTemplateElement>document.getElementById('message-template'),
  },
};

const CLASSES = {
  POPUP: <string>'modal',
  HIDE_POPUP: <string>'modal--hide',
  FORM_INPUT: <string>'input',
  USER_MESSAGE: <string>'message--user',
}

const MESSAGES = {
  ERROR: {
    WRONG_HTTP_STATUS: <string>'Неверный статус',
    USER_NAME: <string>'Неверное имя пользователя',
  },

  LOG_OUT: <string>'Выйти',
}

const MODAL = new Map([
  [UI_ELEMENTS.CONTROLS.SETTINGS, UI_ELEMENTS.MODAL.SETTINGS],
  [UI_ELEMENTS.CONTROLS.AUTHORIZATION, UI_ELEMENTS.MODAL.AUTHENTIFICATION]
])

MODAL.forEach((popup: HTMLElement, button: HTMLElement): void => {
  button.addEventListener('click', function() {
    popup.classList.toggle(CLASSES.HIDE_POPUP)
  })
})

UI_ELEMENTS.MODAL.CLOSE_BTN.forEach((button: Element) => {
  button.addEventListener('click', function() {
    UI_ELEMENTS.MODAL.COLLECTION.forEach((modalWindow: Element): void => {
      modalWindow.classList.remove(CLASSES.HIDE_POPUP);
      modalWindow.classList.add(CLASSES.HIDE_POPUP);
    })
  })
})

function getMessageTemplate(): Node {
  return UI_ELEMENTS.TEMPLATES.MESSAGE.content.cloneNode(true);
}

function scrollDown(): void {
  UI_ELEMENTS.MESSAGES_HISTORY.scrollTop = UI_ELEMENTS.MESSAGES_HISTORY.scrollHeight;
}

function closePopup(thisForm: HTMLFormElement): void {
  thisForm.closest(`.${CLASSES.POPUP}`)!.classList.add(CLASSES.HIDE_POPUP);
}

function openPopup(popup: HTMLElement): void {
  popup.classList.remove(CLASSES.HIDE_POPUP);
}

function resetInput(thisForm: HTMLFormElement): void {
  thisForm.reset();
}

export { UI_ELEMENTS, CLASSES, MESSAGES, getMessageTemplate, scrollDown, closePopup, resetInput, openPopup }
