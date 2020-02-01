
function requestValidator(request) {
  if (!(request.method === 'PUT' || request.method === 'GET' || request.method === 'POST' || request.method === 'PATCH' || request.method === 'DELETE')) {
    throw new Error('Invalid request header: Invalid Method');
  }
  const urlValidator = "^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$";
  if (!request.uri.match(urlValidator)) {
    throw new Error('Invalid request header: Invalid URI');
  }
  if (!(request.message || request.message === '')) {
    throw new Error('Invalid request header: Invalid Message');
  }
  return request;
}

export {
  requestValidator,
};
