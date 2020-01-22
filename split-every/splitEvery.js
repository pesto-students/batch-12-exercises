
function splitEvery(chunkSize, list) {
  if (chunkSize < 1) {
    throw new Error('chunk size should be greater than 0');
  }
  let fromIndex = 0;
  const chunkedArray = [];
  let toIndex = chunkSize;

  // let chunkedArray = list.reduce((accumlator, _, curIndex) => {
  //   let chunkedArrat = list.slice((curIndex), toIndex);
  //   curIndex = curIndex + chunkSize;
  //   toIndex = toIndex + chunkSize;
  //   if([...accumlator, chunkedArrat].length > 0) {
  //     return [...accumlator, chunkedArrat];
  //   }
  // }, []);
  while (fromIndex < list.length) {
    const slicedChunk = list.slice(fromIndex, toIndex);
    fromIndex += chunkSize;
    toIndex += chunkSize;
    chunkedArray.push(slicedChunk);
  }
  return chunkedArray;
}

export {
  splitEvery,
};
