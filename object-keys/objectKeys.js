
function objectKeys(sampleObject) {
  const allKeyOfSampleObject = [];
  for(var key in sampleObject){
    allKeyOfSampleObject.push(key);
  }
  return allKeyOfSampleObject;
}

export {
  objectKeys,
};
