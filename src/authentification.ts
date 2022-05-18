import { API } from './api.js';
import { UI_ELEMENTS, MESSAGES, closePopup, openPopup, resetInput } from './view.js';
import { getInputValue } from './message.js';
import { serverRequestValidation } from './network.js';
import Cookies from 'js-cookie';
import { serverConnection } from './main.js';

async function emailValidation(this: any): Promise<void> {
  try {
    const emailValidationResult = await serverRequestValidation(this, API.AUTHORIZATION, 'POST', 'email');
    const responseSucces = await emailValidationResult.succes;
    const responseError = await emailValidationResult.error;
  
    if (responseError) throw MESSAGES.ERROR.WRONG_HTTP_STATUS;
    
    Cookies.set('mail', responseSucces.email)

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

async function setUserName(this: any): Promise<void> {
  try {
    const setUserNameRequest = await serverRequestValidation(this, API.AUTHORIZATION, 'PATCH', 'name');
    const responseError = await setUserNameRequest.error;

    if (responseError) throw MESSAGES.ERROR.WRONG_HTTP_STATUS;

    serverConnection();
    closePopup(this);

  } catch (error) {
    console.log(error);
    return;
  } finally {
    resetInput(this);
  }
}

function sendAuthentificationCode(this: any) {
  const authorizationCode = getInputValue(this);

  if (!authorizationCode) return;

  Cookies.set('token', authorizationCode);

  resetInput(this);
  closePopup(this);
  openPopup(UI_ELEMENTS.MODAL.SETTINGS);
}

export { emailValidation, setUserName, sendAuthentificationCode } 