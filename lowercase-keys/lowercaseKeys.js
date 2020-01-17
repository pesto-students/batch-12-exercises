
function lowercaseKeys(object) {
  const newObject = object;
  // eslint-disable-next-line
  Object.keys(newObject).map((key) => {
    newObject[key.toLowerCase()] = newObject[key];
    delete newObject[key];
  });
  return newObject;
}

export {
  lowercaseKeys,
};
