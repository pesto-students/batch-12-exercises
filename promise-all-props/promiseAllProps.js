
function promiseAllProps(promiseObject) {
  const newObj = {};
  for (const key of Object.keys(promiseObject)) {
    promiseObject[key].then((value) => {
      newObj[key] = value;
    });
  }
  return Promise.resolve(newObj);
}

export {
  promiseAllProps,
};
