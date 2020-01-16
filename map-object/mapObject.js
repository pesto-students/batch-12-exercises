
function mapObject(sampleObject, modificationFunction) {
  const updatedObject = {};
  for(var key in sampleObject){
    updatedObject[key] = modificationFunction(sampleObject[key]);
  }
  return updatedObject;
}

export {
  mapObject,
};
