
function chunkArrayInGroups(fullArray,chunkSize) {
  var chunks = [];
  while(fullArray.length > 0){
    chunks.push(fullArray.splice(0,chunkSize));
  }
  return chunks;
}

export {
  chunkArrayInGroups,
};
