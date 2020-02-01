
function objectValues(object) {
  const resultArray = [];
  for (const [, value] of Object.entries(object)) {
    resultArray.push(value);
  }
  return resultArray;
}

export {
  objectValues,
};
