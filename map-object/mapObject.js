
function mapObject(numberObject, mapFunction) {
  // eslint-disable-next-line guard-for-in
  for (const key in numberObject) {
    // eslint-disable-next-line no-param-reassign
    numberObject[key] = mapFunction(numberObject[key]);
  }
  return numberObject;
}

export {
  mapObject,
};
