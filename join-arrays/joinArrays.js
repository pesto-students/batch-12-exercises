
function joinArrays(...collectionOfArray) {
  const flatenedArray = collectionOfArray.reduce((total, current) => total.concat(current));
  return flatenedArray;
}

export {
  joinArrays,
};
