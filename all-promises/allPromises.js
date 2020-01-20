function allPromises(array = []) {
  const promiseResolveArray = [];
  for (const item of array) {
    const promise = Promise.resolve(item);
    promise.then((value) => {
      promiseResolveArray.push(value);
    });
  }
  return Promise.resolve(promiseResolveArray);
}

export {
  allPromises,
};
