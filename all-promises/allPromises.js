const allPromises = (promises) => new Promise((res) => {
  const allResolve = [];
  for (const promise of promises) {
    const resolved = Promise.resolve(promise);
    resolved.then((value) => allResolve.push(value));
  }
  return res(allResolve);
});
export {
  allPromises,
};
