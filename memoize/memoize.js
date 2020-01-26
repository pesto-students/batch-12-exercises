
function memoize(func) {
  const memo = {};
  return function (...args) {
    if (Object.keys(memo).includes(args.toString())) {
      return memo[args];
    } else {
      const response = func(...args);
      memo[args] = response;
      return response;
    }
  }
}

export {
  memoize,
};
