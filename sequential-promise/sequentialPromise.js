function sequentialPromise(promises) {
  // var index = 0;
  function accumulator(value,promise){
    const promiseWithUpdatedMessage = value.then((resolvedMessage)=>{
      //console.log(message);
      return promise(resolvedMessage);
    })
    return promiseWithUpdatedMessage;
  }
  let response = promises.reduce(accumulator, Promise.resolve(''));
  return Promise.resolve(response);
}

// async function sequentialPromise(promises){
//   let response = '';
//   let v1 = await promises[0](response);
//   console.log(v1);
//   let v2 = await promises[1](v1);
//   console.log(v2);
//   let v3 = await promises[2](v2);
//   console.log(v3);
//   return Promise.resolve(v3);
// }

export {
  sequentialPromise,
};
