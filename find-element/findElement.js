
function findElement(inputArray, inputFunction) {
  return inputArray.find((element) => inputFunction(element));
}

export {
  findElement,
};
