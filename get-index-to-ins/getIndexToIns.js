
function getIndexToIns(unsortedArray, number) {
  var length = unsortedArray.length, i, j, sortedArray;
  for (i = 0; i < length; i++) {
    for (j = 0; j < length - i; j++) {
      if (unsortedArray[j] > unsortedArray[j + 1]) {
        var temp = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j + 1];
        unsortedArray[j + 1] = temp;
      }
    }
  }
  sortedArray = unsortedArray;
  for (i = 0; i < length; i++) {
    if (number <= sortedArray[i] && i === 0) {
      return i
    }
    if (number <= sortedArray[i] && number > sortedArray[i - 1]) {
      return i
    }
    if (number > sortedArray[length - 1]) {
      return length
    }
  }

}

export {
  getIndexToIns,
};
