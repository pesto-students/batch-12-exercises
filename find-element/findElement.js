
function findElement(inputArray,conditionFunction) {
  const filteredArray = inputArray.filter(conditionFunction);
  const firstElement = filteredArray[0];
  return firstElement;
}

export {
  findElement,
};
