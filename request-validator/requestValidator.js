
function requestValidator({ method, uri, version, message }) {
  if (method !== 'GET') {
    throw new Error('Invalid request header: Invalid Method');
  }
  if (message === undefined) {
    throw new Error('Invalid request header: Invalid Message');
  }
  const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  if (!uri.match(urlRegex)) {
    throw new Error('Invalid request header: Invalid URI');
  }
  return {
    method,
    uri,
    version,
    message,
  };
}

export {
  requestValidator,
};
