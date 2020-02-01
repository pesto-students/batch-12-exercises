
function sequentialPromise(array) {
  return new Promise((resolve) => {
    resolve(array.reduce((acc, curr) => acc.then((data) => curr(data)), Promise.resolve()));
  });
}

export {
  sequentialPromise,
};
