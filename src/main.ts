import { UI_ELEMENTS, MESSAGES } from "./view.js";
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

export { serverConnection };

function singInValidation(arg0: string, singInValidation: any) {
  throw new Error("Function not implemented.");
}