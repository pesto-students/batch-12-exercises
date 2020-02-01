
function updateInventory(oldArray, newArray) {
  const resultArray = oldArray;
  newArray.forEach((element) => {
    let found = false;
    resultArray.forEach((ele) => {
      if (element[1] === ele[1]) {
        found = true;
        ele[0] += element[0];
      }
    });
    if (!found) {
      resultArray.push(element);
    }
  });
  return resultArray.sort((arr1, arr2) => {
    if (arr1[1] > arr2[1]) return 1;
    if (arr1[1] < arr2[1]) return -1;
    return 0;
  });
}

export {
  updateInventory,
};
