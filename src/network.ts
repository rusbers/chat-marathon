import Cookies from "js-cookie";
import { getInputValue } from "./message";

interface fetchBody {
  [key: string]: string;
}

async function sendRequest(url: string, httpMethod: string = 'GET', body?: object) {
  return await fetch(url, {
    method: httpMethod,
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

async function serverRequestValidation(thisElement: any, apiLink: string, HttpMethod: string = 'GET', bodyRequestKey: string): Promise<any> {
  const bodyValue = getInputValue(thisElement);
  const requestBody: fetchBody = { [bodyRequestKey]: bodyValue };
  const fetchRequest = await sendRequest(apiLink, HttpMethod, requestBody);

  const requestResponse = {
    succes: isStatusOK(fetchRequest) ? fetchRequest.json() : null,
    error: !isStatusOK(fetchRequest)
  }

  return requestResponse;
}

export { sendRequest, isStatusOK, serverRequestValidation }