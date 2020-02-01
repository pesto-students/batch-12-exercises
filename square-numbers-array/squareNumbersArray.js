
function squareNumbersArray(NumberArray) {
  const isNumberArray = NumberArray.every((eachnumber) => typeof eachnumber === 'number');
  if (!isNumberArray) {
    throw new Error('Please ensure all elements of array are number');
  }
  return NumberArray.map((number) => number * number);
}

export {
  squareNumbersArray,
};
