
function curry(fun) {
  function innerFunction(...args) {
    if (args.length >= fun.length) {
      return fun(...args);
    }
    return function innerCurried(...args2) {
      return innerFunction(...args.concat(...args2));
    };
  }
  return innerFunction;
}

export {
  curry,
};
