
function objectDefaults(defaultObj, addonObj) {
  const newObject = defaultObj;
  for (const [key, value] of Object.entries(addonObj)) {
    if (!Object.prototype.hasOwnProperty.call(newObject, key)) {
      newObject.key = value;
    }
  }
  return newObject;
}

export {
  objectDefaults,
};
