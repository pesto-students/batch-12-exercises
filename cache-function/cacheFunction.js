
function cacheFunction(predicateFunction) {
  const cache = {};
  return (input) => {
    if ((input in cache) === false) {
      cache[input] = predicateFunction(input);
    }
    return cache[input];
  };
}

export {
  cacheFunction,
};
