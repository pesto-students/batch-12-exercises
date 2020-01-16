
function objectInvert(sampleObj) {
  const inverseObj = {};
  for(var key in sampleObj){
    const value = sampleObj[key];
    inverseObj[value] = key;
  }
  return inverseObj;
}

export {
  objectInvert,
};
