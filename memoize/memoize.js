
function memoize(fun) {
  const memo = {};
  return function innerFunction(...args) {
    if (args in memo) {
      return memo[args];
    }
    const result = fun(...args);
    memo[args] = result;
    return result;
  };
}

export {
  memoize,
};
