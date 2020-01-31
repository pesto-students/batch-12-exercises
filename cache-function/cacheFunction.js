
function cacheFunction(fun) {
  const cacheResults = {};
  function innerFunction(...args) {
    if (args in cacheResults) {
      return cacheResults[args];
    }
    const result = fun(args);
    cacheResults[args] = result;
    return result;
  }
  return innerFunction;
}

export {
  cacheFunction,
};
