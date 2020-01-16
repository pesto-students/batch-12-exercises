
function limitFunctionCallCount(anyFunction, maxInvocationCounter) {
  return function(...inputs) {
    // decrement counter on function call
    maxInvocationCounter -= 1;
    if (maxInvocationCounter > 0) {
      return anyFunction(...inputs);
    }
    return null;
  };
}

export {
  limitFunctionCallCount,
};
