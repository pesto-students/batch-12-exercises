
function diffArray(arrayOne, arrayTwo) {
  return arrayOne
    .filter((selectedElement) => !arrayTwo.includes(selectedElement))
    .concat(arrayTwo.filter((selectedElement) => !arrayOne.includes(selectedElement)));
}

export {
  diffArray,
};
