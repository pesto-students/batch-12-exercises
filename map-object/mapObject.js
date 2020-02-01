
function mapObject(inputObject, inputFunction) {
  const outputObject = {};
  for (const key in inputObject) {
    if (Object.prototype.hasOwnProperty.call(inputObject, key)) {
      outputObject[key] = inputFunction(inputObject[key]);
    }
  }
  return outputObject;
}

export {
  mapObject,
};
