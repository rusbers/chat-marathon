import { createOldMessageNode } from './message';
import { UI_ELEMENTS } from './view';

function scrollLoading(this: any) {
  const isScrollTop = (this.scrollTop === 0);
  const messagesToRenderStep: number = -20;
  const messagesToRenderWrapper = document.createElement('div');
  const messagesHistory: Array<any> = JSON.parse(localStorage.getItem('messagesHistory')!);

  const renderedMessages: Array<object> = JSON.parse(localStorage.getItem('rendered messages')!);
  let renderedMessagesCount: number = JSON.parse(localStorage.getItem('renderedMessagesCount')!);

  let oldMessagesToRender: Array<object> = [];

  if (isScrollTop) {
    oldMessagesToRender = messagesHistory.slice(renderedMessagesCount + messagesToRenderStep, renderedMessagesCount);

    oldMessagesToRender.forEach(message => {
      messagesToRenderWrapper.append(createOldMessageNode(message));
    })

    UI_ELEMENTS.MESSAGES_HISTORY.prepend(messagesToRenderWrapper);

    renderedMessages.unshift(oldMessagesToRender)
    localStorage.setItem('rendered messages', JSON.stringify(renderedMessages))
    renderedMessagesCount += messagesToRenderStep;
    localStorage.setItem('renderedMessagesCount', JSON.stringify(renderedMessagesCount));
  }
}

export { scrollLoading };