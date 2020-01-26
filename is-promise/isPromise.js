
function isPromise(object) {
  const promise = Promise.resolve(object);
  return promise === object;
}

export {
  isPromise,
};
