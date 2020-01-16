
function chunkArrayInGroups(valueList, maxNoOfValue) {
  const chunkedList = [];
  while (valueList.length) {
    chunkedList.push(valueList.splice(0, maxNoOfValue));
  }
  return chunkedList;
}

export {
  chunkArrayInGroups,
};
