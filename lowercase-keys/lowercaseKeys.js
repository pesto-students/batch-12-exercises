
function lowercaseKeys(object) {
  const objectToArray = Object.entries(object);
  const lowerCasedKeyObject = Object.fromEntries(
    objectToArray.map(([key, value]) => [key.toLocaleLowerCase(), value]),
  );
  return lowerCasedKeyObject;
}

export {
  lowercaseKeys,
};
