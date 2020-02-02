
function sequentialPromise(promiseArray) {
  const transformdata = promiseArray.reduce((promise, cb) => promise.then(cb), Promise.resolve());
  return transformdata;
}

export {
  sequentialPromise,
};
