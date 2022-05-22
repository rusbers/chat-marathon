import { UI_ELEMENTS, MESSAGES, scrollDown } from "./view.js";
import { sendMessage, showMessagesHistory, renderMessage } from "./message.js";
import { API } from './api.js';
import Cookies from 'js-cookie';
import { emailValidation, sendAuthentificationCode, setUserName } from './authentification.js';

document.addEventListener('DOMContentLoaded', (): void => {
  serverConnection();
  showMessagesHistory();
});

UI_ELEMENTS.FORMS.AUTHENTIFICATION.addEventListener('submit', emailValidation);
UI_ELEMENTS.FORMS.AUTHENTIFICATION_CODE.addEventListener('submit', sendAuthentificationCode);
UI_ELEMENTS.FORMS.SETTING_NAME.addEventListener('submit', setUserName);

function serverConnection() {
  const authentificationToken = Cookies.get('token');

  if (!authentificationToken) return;

  UI_ELEMENTS.CONTROLS.AUTHORIZATION.textContent = MESSAGES.LOG_OUT;

  const socketUrl = `${API.WEBSOCKET}${authentificationToken}`;

  const socketConnection = new WebSocket(socketUrl);

  socketConnection.addEventListener('open', function () {
    UI_ELEMENTS.FORMS.SEND_MESSAGE.addEventListener('submit', function(e) {
      e.preventDefault();
      sendMessage(socketConnection, this);
    });
  });

  socketConnection.addEventListener('message', function(event) {
    renderMessage(JSON.parse(event.data));
  })
}

UI_ELEMENTS.MESSAGES_HISTORY.addEventListener('scroll', function() {
  const isScrollTop = (this.scrollTop === 0);

  const renderedMessagesStep: number = -20;
  const messagesHistory: Array<any> = JSON.parse(localStorage.getItem('messagesHistory')!);
  const renderedMessagesWrapper = document.createElement('div');

  const renderedMessages: Array<object> = JSON.parse(localStorage.getItem('rendered messages')!);
  let renderedMessagesCount: number = JSON.parse(localStorage.getItem('renderedMessagesCount')!);

  let newMessagesToRenderOnScrollTop: Array<object> = [];

  if (isScrollTop) {
    newMessagesToRenderOnScrollTop = messagesHistory.slice(renderedMessagesCount + renderedMessagesStep, renderedMessagesCount);

    newMessagesToRenderOnScrollTop.forEach(message => {
      renderedMessagesWrapper.append(renderMessage(message));
    })

    UI_ELEMENTS.MESSAGES_HISTORY.prepend(renderedMessagesWrapper);

    renderedMessages.unshift(newMessagesToRenderOnScrollTop)
    localStorage.setItem('rendered messages', JSON.stringify(renderedMessages))
    renderedMessagesCount = renderedMessagesCount + renderedMessagesStep;
    localStorage.setItem('renderedMessagesCount', JSON.stringify(renderedMessagesCount));
  }
})

export { serverConnection };
