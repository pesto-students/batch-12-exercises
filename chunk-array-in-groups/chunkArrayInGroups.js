
function chunkArrayInGroups(inputArray, arraySize) {
  const newArrayOfArray = [];
  while (inputArray.length > 0) {
    newArrayOfArray.push(inputArray.splice(0, arraySize));
  }
  return newArrayOfArray;
}

export {
  chunkArrayInGroups,
};
