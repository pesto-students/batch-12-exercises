

function promiseAllProps(promiseObject = {}) {
  const keys = Object.keys(promiseObject);
  const resolved = {};
  for (const key of keys) {
    promiseObject[key].then(value => { resolved[key] = value });
  }
  return Promise.resolve(resolved);
}

export {
  promiseAllProps,
};
