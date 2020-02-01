
function objectKeys(object) {
  const resultArray = [];
  for (const [key] of Object.entries(object)) {
    resultArray.push(key);
  }
  return resultArray;
}

export {
  objectKeys,
};
