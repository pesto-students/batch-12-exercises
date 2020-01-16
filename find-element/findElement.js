
function findElement(inputArray, validationFunction) {
  return inputArray.find((n) => validationFunction(n));
}

export {
  findElement,
};
