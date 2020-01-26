

function allPromises(objects = []) {
  const resolvedPromises = [];
  for (const object of objects) {
    const promise = Promise.resolve(object);
    promise.then((resolvedValue) => {
      resolvedPromises.push(resolvedValue)
    })
  }
  return Promise.resolve(resolvedPromises);
}

export {
  allPromises,
};
