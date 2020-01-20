
function joinArrays(...individualArrays) {
  const mergedArray =  individualArrays.reduce((bigArray,eachArray)=>bigArray.concat(eachArray),[]);
  return mergedArray;
}

export {
  joinArrays,
};
