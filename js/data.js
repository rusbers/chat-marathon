import { format } from 'date-fns';
import { CLASSES } from './view.js';

function getInputValue(thisForm) {
  const thisInput = thisForm.querySelector(CLASSES.FORM_INPUT);

  return thisInput.value;
}

function getUserMessageData(thisForm) {
  return {
    messageText: getInputValue(thisForm),
    messageTime: format(new Date(), 'HH:mm'),
    userName: 'Incognito',
  }
}

function getMessagesDataHistory(message) {
  return {
    userName: message.user.name,
    messageText: message.text,
    messageTime: format(new Date(message.createdAt), 'HH:mm'),
  }
};

export { getUserMessageData, getInputValue, getMessagesDataHistory }