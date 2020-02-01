
function cacheFunction(fn) {
  const cache = {};
  return function (params) {
    if (cache.args === params) {
      return cache.output;
    }
    cache.args = params;
    cache.output = fn(params);
    return cache.output;
  };
}

export {
  cacheFunction,
};
