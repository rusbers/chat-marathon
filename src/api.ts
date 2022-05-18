interface API_LINKS {
  [key: string]: string;
}

const API: API_LINKS = {
  AUTHORIZATION: 'https://mighty-cove-31255.herokuapp.com/api/user',
  MESSAGES: 'https://mighty-cove-31255.herokuapp.com/api/messages',
  WEBSOCKET: 'wss://mighty-cove-31255.herokuapp.com/websockets?',
}

export { API }