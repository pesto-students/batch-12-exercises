
function largeOfFour(allArrays) {
  var currentArray, individualLargest, resultArray = [];
  for (var i = 0; i < allArrays.length; i++) {
    currentArray = allArrays[i];
    individualLargest = 0;
    for (var j = 0; j < currentArray.length; j++) {
      (currentArray[j] > individualLargest) ? (individualLargest = currentArray[j]) : individualLargest;
    }
    resultArray.push(individualLargest);
  }
  return resultArray;
}

export {
  largeOfFour,
};
