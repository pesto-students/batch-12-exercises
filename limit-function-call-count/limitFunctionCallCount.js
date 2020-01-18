
function limitFunctionCallCount(fn, fnnvokeCount) {
  let invokeCount = fnnvokeCount;
  const callbackFunction = function (...args) {
    if (invokeCount) {
      invokeCount -= 1;
      return fn(...args);
    }
    return null;
  };
  return callbackFunction;
}

export {
  limitFunctionCallCount,
};
