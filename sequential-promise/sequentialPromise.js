
function sequentialPromise(promiseArray) {
  const transformdata = promiseArray.reduce((p, f) => p.then(f), Promise.resolve());
  return transformdata;
}

export {
  sequentialPromise,
};
