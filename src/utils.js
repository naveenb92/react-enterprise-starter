class RequestError extends Error {
  constructor(response) {
    super('Request Failed');
    this.name = 'RequestError';
    this.response = response;
  }
}

function statusHelper(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return response.json().then(data => {
    const error = data;
    error.status = response.status;
    return Promise.reject(new RequestError(error));
  });
}

// Wrapping fetch
export function request(method, endpoint, body, headers) {
  return fetch(endpoint, {
    method,
    headers,
    body,
  });
}

// JSON Wrapper - The body has to be json, the response will be a parsed json
function jsonRequest(method, endpoint, body, headers = {}) {
  const requestHeaders = headers;
  let requestEndpoint = endpoint;

  requestHeaders.Accept = 'application/json';
  requestHeaders['Content-Type'] = 'application/json';

  return request(method, requestEndpoint, body, requestHeaders)
    .then(statusHelper)
    .then(response => response.json())
    .then(data => Immutable.fromJS(data));
}

// GET, PUT, POST, DEL, PATCH helper methods
export function get(endpoint) {
  return jsonRequest('GET', endpoint);
}

// eslint-disable-next-line
export function post(endpoint, body) {
  return jsonRequest('POST', endpoint, body);
}

// eslint-disable-next-line
export function put(endpoint, body) {
  return jsonRequest('PUT', endpoint, body);
}

// eslint-disable-next-line
export function patch(endpoint, body) {
  return jsonRequest('PATCH', endpoint, body);
}

// eslint-disable-next-line
export function del(endpoint) {
  return jsonRequest('DELETE', endpoint);
}