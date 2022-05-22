import { UI_ELEMENTS, MESSAGES, CLASSES, getMessageTemplate, scrollDown, resetInput } from "./view.js";
import { sendRequest, isStatusOK } from "./network.js";
import { API } from './api.js';
import { format } from 'date-fns';
import Cookies from "js-cookie";

function getInputValue(thisForm) {
  const thisInput = thisForm.querySelector(CLASSES.FORM_INPUT);
  return thisInput.value;
}

function GetMessageNodeElements(this: any, messageNode) {
  this.messageWrapper = messageNode.querySelector('.message');
  this.messageContent = messageNode.querySelector('.text');
  this.userName = messageNode.querySelector('.username');
  this.messageTime = messageNode.querySelector('.time');
}

function fillMessage(messageElements, messageDetails) {
  const isUserEmail = messageDetails.user.email === Cookies.get('mail');

  if (isUserEmail) {
    messageElements.messageWrapper.classList.add(CLASSES.USER_MESSAGE);
  }

  messageElements.messageContent.textContent = messageDetails.text;
  messageElements.userName.textContent = messageDetails.user.name;
  messageElements.messageTime.textContent =  format(new Date(messageDetails.createdAt), 'HH:mm dd/MM');
}

function sendMessage(socket: WebSocket, thisForm: HTMLFormElement) {
  const messageText = getInputValue(thisForm)

  socket.send(JSON.stringify({
    text: messageText,
  }));

  resetInput(thisForm);
}

function createOldMessageNode(messageDetails): HTMLElement {
  const messageNode = getMessageTemplate();
  const messageElements = new GetMessageNodeElements(messageNode);
  fillMessage(messageElements, messageDetails);

  return messageNode as HTMLElement;
}

function renderNewMessage(messageDetails): void {
  const messageNode = getMessageTemplate();
  const messageElements = new GetMessageNodeElements(messageNode);
  fillMessage(messageElements, messageDetails);

  UI_ELEMENTS.MESSAGES_HISTORY.append(messageNode);
  scrollDown();
}

async function showMessagesHistory() {
  const messagesHistoryRequest = await getMessagesHistory();
  const messagesHistory = await messagesHistoryRequest.messages;
  const renderedMessagesWrapper = document.createElement('div');
  const messagesToRender = messagesHistory.slice(-20);

  messagesToRender.forEach(message => {
    renderedMessagesWrapper.append(createOldMessageNode(message));
  })

  UI_ELEMENTS.MESSAGES_HISTORY.append(renderedMessagesWrapper);

  scrollDown();

  if (!localStorage.getItem('messagesHistory')) localStorage.setItem('messagesHistory', JSON.stringify(messagesHistory));
  if (!localStorage.getItem('rendered messages')) localStorage.setItem('rendered messages', JSON.stringify([messagesToRender]));
  if (!localStorage.getItem('renderedMessagesCount')) localStorage.setItem('renderedMessagesCount', JSON.stringify(-20));
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

export { sendMessage, fillMessage, showMessagesHistory, renderNewMessage, createOldMessageNode, getInputValue }