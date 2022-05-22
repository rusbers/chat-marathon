import { UI_ELEMENTS, MESSAGES } from "./view.js";
import { sendMessage, showMessagesHistory, renderNewMessage } from "./message.js";
import { API } from './api.js';
import Cookies from 'js-cookie';
import { emailValidation, sendAuthentificationCode, setUserName } from './authentification.js';
import { scrollLoading } from "./scrollLoading.js";

document.addEventListener('DOMContentLoaded', (): void => {
  serverConnection();
  showMessagesHistory();
});

UI_ELEMENTS.FORMS.AUTHENTIFICATION.addEventListener('submit', emailValidation);
UI_ELEMENTS.FORMS.AUTHENTIFICATION_CODE.addEventListener('submit', sendAuthentificationCode);
UI_ELEMENTS.FORMS.SETTING_NAME.addEventListener('submit', setUserName);
UI_ELEMENTS.MESSAGES_HISTORY.addEventListener('scroll', scrollLoading);

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
    renderNewMessage(JSON.parse(event.data));
  })
}

export { serverConnection };
