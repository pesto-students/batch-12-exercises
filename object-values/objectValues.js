
function objectValues(sampleObject) {
  const allValuesOfObject = [];
  for(var key in sampleObject){
    allValuesOfObject.push(sampleObject[key]);
  }
  return allValuesOfObject;
}

export {
  objectValues,
};
