
function lowercaseKeys(dictionary) {
  const dictionaryWithLowerCaseKey = dictionary;
  for (const key in dictionaryWithLowerCaseKey) {
    if (Object.prototype.hasOwnProperty.call(dictionaryWithLowerCaseKey, key)) {
      dictionaryWithLowerCaseKey[key.toLowerCase()] = dictionaryWithLowerCaseKey[key];
    }
  }
  return dictionaryWithLowerCaseKey;
}

export {
  lowercaseKeys,
};
