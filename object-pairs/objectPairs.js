
function objectPairs(object) {
  const objectPairCollection = [];
  // eslint-disable-next-line guard-for-in
  for (const key in object) {
    objectPairCollection.push([key, object[key]]);
  }
  return objectPairCollection;
}

export {
  objectPairs,
};
