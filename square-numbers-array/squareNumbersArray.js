
function squareNumbersArray(array) {
  return array.map((ele) => {
    if (typeof ele !== 'number') {
      throw new Error('My custom error');
    }
    return ele * ele;
  });
}

export {
  squareNumbersArray,
};
