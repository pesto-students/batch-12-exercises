
function objectPairs(object) {
  const resultArray = [];
  for (const [key, value] of Object.entries(object)) {
    resultArray.push([key, value]);
  }
  return resultArray;
}

export {
  objectPairs,
};
