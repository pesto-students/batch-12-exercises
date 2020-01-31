
function limitFunctionCallCount(anyFunction, maxInvocationCounter) {
  let currentInvocationCounter = maxInvocationCounter;
  return function (...inputs) {
    // decrement counter on function call
    currentInvocationCounter -= 1;
    if (currentInvocationCounter > 0) {
      return anyFunction(...inputs);
    }
    return null;
  };
}

export {
  limitFunctionCallCount,
};
