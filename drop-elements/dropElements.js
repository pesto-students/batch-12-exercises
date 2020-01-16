
function dropElements(inputArray,conditionFunction) {
  var filteredArray =  inputArray.filter(conditionFunction);
  return filteredArray;
}

export {
  dropElements,
};
