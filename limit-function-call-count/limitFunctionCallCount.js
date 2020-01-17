
function limitFunctionCallCount(callBackFunc, maxCallsOfFunc) {
  var maxLimit = maxCallsOfFunc;
  const limitedCallBackFunc = function (...params) {
    if (maxLimit > 0) {
      maxLimit -= 1;
      return callBackFunc(...params);
    }
    return null;
  }
  return limitedCallBackFunc;
}

export {
  limitFunctionCallCount,
};
