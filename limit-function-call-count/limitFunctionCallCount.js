
function limitFunctionCallCount(cbFun, count) {
  let callLimit = count;
  function innerFunction(...args) {
    if (callLimit === 0) {
      return null;
    }
    callLimit -= 1;
    return cbFun(...args);
  }
  return innerFunction;
}

export {
  limitFunctionCallCount,
};
