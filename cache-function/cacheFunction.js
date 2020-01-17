
function cacheFunction(predicateFn) {
  const cache = {};
  return ((...args) => {
    if (!(args in cache)) {
      cache[args] = predicateFn(args);
    }
    return cache[args];
  });
}

export {
  cacheFunction,
};
