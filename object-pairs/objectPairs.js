
function objectPairs(sampleObject) {
  const arraysBySampleObject = [];
  for(var key in sampleObject){
    arraysBySampleObject.push([key, sampleObject[key]]);
  }
  return arraysBySampleObject;
}

export {
  objectPairs,
};
