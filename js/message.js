import { UI_ELEMENTS, MESSAGES, getMessageTemplate, scrollDown, resetInput } from "./view.js";
import { getUserMessageData, getMessagesDataHistory } from './data.js';
import { sendRequest, isStatusOK } from "./network.js";
import { API } from './api.js';
import Cookies from "js-cookie";

function GetMessageNodeElements(messageNode) {
  this.messageWrapper = messageNode.querySelector('.message');
  this.messageContent = messageNode.querySelector('.text');
  this.userName = messageNode.querySelector('.username');
  this.messageTime = messageNode.querySelector('.time');
}

function fillMessage(messageElements, messageData) {
  messageElements.messageContent.textContent = messageData.messageText;
  messageElements.messageTime.textContent = messageData.messageTime;
  messageElements.userName.textContent = messageData.userName;
}

function sendMessage() {
  const messageNode = getMessageTemplate();

  const messageElements = new GetMessageNodeElements(messageNode);
  const messageData = getUserMessageData(this);
  fillMessage(messageElements, messageData)
  
  UI_ELEMENTS.MESSAGES_HISTORY.append(messageNode)

  resetInput(this);
  scrollDown();
}

// MESSAGES HISTORY

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

function showMessage(message) {
  const messageNode = getMessageTemplate();
  const messageElements = new GetMessageNodeElements(messageNode);
  const messageData = getMessagesDataHistory(message);
  fillMessage(messageElements, messageData);

  UI_ELEMENTS.MESSAGES_HISTORY.append(messageNode);

  scrollDown();
}

async function showMessagesHistory() {
  const messagesHistory = await getMessagesHistory();

  messagesHistory.messages.slice(-150).forEach(message => {
    showMessage(message);
  })
}

export { sendMessage, GetMessageNodeElements, fillMessage, showMessagesHistory }