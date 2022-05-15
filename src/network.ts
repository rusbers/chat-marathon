import Cookies from "js-cookie";

async function sendRequest(url: string, method: string, body?: object) {
  return await fetch(url, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${Cookies.get('token')}`
    },
    body: JSON.stringify(body)
  })
}

function isStatusOK(requestStatus: Response): boolean {
  return (requestStatus.status >= 200 && requestStatus.status <= 299);
}

export { sendRequest, isStatusOK }