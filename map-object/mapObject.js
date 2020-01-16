
function mapObject(numberObject, mapFunction) {
  // eslint-disable-next-line guard-for-in
  for (const key in numberObject) {
    numberObject[key] = mapFunction(numberObject[key]);
  }
  return numberObject;
}

export {
  mapObject,
};
