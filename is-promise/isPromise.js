
function isPromise(promise) {
  const cast = Promise.resolve(promise);
  return (cast === promise);
}

export {
  isPromise,
};
