
function promiseAllProps(promiseDic) {
  const promise = new Promise(() => {
    const newDic = {};
    for (const [key, value] of Object.entries(promiseDic)) {
      newDic[key] = value.then((promiseValue) => promiseValue);
    }
    return newDic;
  });
  return promise;
}

export {
  promiseAllProps,
};
