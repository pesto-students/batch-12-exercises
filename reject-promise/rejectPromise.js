
function rejectPromise() {
  const promise = new Promise(function executor(resolve,reject){
    resolve("REJECTED!"); // Why resolving ?
  })
  return promise;
}

export {
  rejectPromise,
};
