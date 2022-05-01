import Cookies from "js-cookie";

async function sendRequest(url, method, body) {
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

function isStatusOK(request) {
  return (request.status >= 200 && request.status <= 299);
}

export { sendRequest, isStatusOK }