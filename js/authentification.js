import { API } from './api.js';
import { MESSAGES, closePopup, openPopup, resetInput } from './view.js';
import { getInputValue } from './message.js';
import { sendRequest, isStatusOK } from './network.js';

async function userAuthentification() {
  const mail = getInputValue(this);

  if(!mail) return;

  const mailBody = {
    email: mail,
  }

  Cookies.set('mail', mail);

  try {
    const authentificationRequest = await sendRequest(API.AUTHORIZATION, 'POST', mailBody);

    if (!isStatusOK(authentificationRequest)) throw MESSAGES.ERROR.WRONG_HTTP_STATUS;

    closePopup(this);
    openPopup(UI_ELEMENTS.MODAL.AUTHENTIFICATION_CODE);

    UI_ELEMENTS.CONTROLS.AUTHORIZATION.textContent = MESSAGES.LOG_OUT;
  } catch (error) {
    console.log(error);
    return;
  } finally {
    resetInput(this);
  }
}

async function setUserName() {
  const userName = getInputValue(this);
  const nameBody = {
    name: userName,
  }

  if (!userName) throw MESSAGES.ERROR.USER_NAME;

  try {
    const setUserNameRequest = await sendRequest(API.AUTHORIZATION, 'PATCH', nameBody);

    if (!isStatusOK(setUserNameRequest)) throw MESSAGES.ERROR.WRONG_HTTP_STATUS;

    closePopup(this);

  } catch (error) {
    console.log(error);
    return;
  } finally {
    resetInput(this);
  }
}

function sendAuthentificationCode() {
  const authorizationCode = getInputValue(this);

  if (!authorizationCode) return;

  Cookies.set('token', authorizationCode);

  resetInput(this);
  closePopup(this);
}

export { userAuthentification, setUserName, sendAuthentificationCode}