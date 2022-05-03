import { UI_ELEMENTS, MESSAGES, CLASSES, getMessageTemplate, scrollDown, resetInput } from "./view.js";
import { sendRequest, isStatusOK } from "./network.js";
import { API } from './api.js';
import { format } from 'date-fns';
import Cookies from "js-cookie";

function getInputValue(thisForm) {
  const thisInput = thisForm.querySelector(CLASSES.FORM_INPUT);

  return thisInput.value;
}

function GetMessageNodeElements(messageNode) {
  this.messageWrapper = messageNode.querySelector('.message');
  this.messageContent = messageNode.querySelector('.text');
  this.userName = messageNode.querySelector('.username');
  this.messageTime = messageNode.querySelector('.time');
}

function fillMessage(messageElements, messageDetails) {
  if (messageDetails.user.email === Cookies.get('mail')) {
    messageElements.messageWrapper.classList.add(CLASSES.USER_MESSAGE);
  }

  messageElements.messageContent.textContent = messageDetails.text;
  messageElements.userName.textContent = messageDetails.user.name;
  messageElements.messageTime.textContent =  format(new Date(messageDetails.createdAt), 'HH:mm');
}

function sendMessage(socket, thisForm) {
  const messageText = getInputValue(thisForm)

  socket.send(JSON.stringify({
    text: messageText,
  }));

  resetInput(thisForm);
}

function renderMessage(messageDetails) {
  const messageNode = getMessageTemplate();
  const messageElements = new GetMessageNodeElements(messageNode);

  fillMessage(messageElements, messageDetails);

  UI_ELEMENTS.MESSAGES_HISTORY.append(messageNode);

  scrollDown();
}

async function showMessagesHistory() {
  const messagesHistory = await getMessagesHistory();

  messagesHistory.messages.slice(-5).forEach(message => {
    renderMessage(message);
  })
}

async function getMessagesHistory() {
  try {
    const requestMessagesHistory = await sendRequest(API.MESSAGES, 'GET');
    if (!isStatusOK(requestMessagesHistory)) throw MESSAGES.ERROR.WRONG_HTTP_STATUS;

    return await requestMessagesHistory.json();
  } catch (error) {
    console.log(error);
    return;
  }
}

export { sendMessage, GetMessageNodeElements, fillMessage, showMessagesHistory, renderMessage, getInputValue }