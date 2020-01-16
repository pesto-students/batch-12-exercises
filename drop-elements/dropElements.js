
function dropElements(inputArray, reducer) {
  return inputArray.filter((n) => reducer(n));
}

export {
  dropElements,
};
