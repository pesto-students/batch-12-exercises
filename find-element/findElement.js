
function findElement(numberList, findFunction) {
  const filteredList = numberList.filter(findFunction);
  return filteredList[0];
}

export {
  findElement,
};
