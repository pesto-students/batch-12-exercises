
function threeSum(numbers, sumOfTriplet) {

  if (numbers.length < 3) {
    throw new Error('Length of the Array is less than 3.');
  }

  if (typeof sumOfTriplet !== "number") {
    throw new Error('Expected Sum as \"Number\". Recieved Type : ' + typeof sumOfTriplet);
  }

  const sizeOfNmbers = numbers.length;
  for (var i = 0; i < sizeOfNmbers - 2; i++) {
    var numA = numbers[i];
    for (var j = 1; j < sizeOfNmbers - 1; j++) {
      var numB = numbers[j];
      for (var k = 2; k < sizeOfNmbers; k++) {
        var numC = numbers[k];
        if (numA + numB + numC === sumOfTriplet) {
          return [numA, numB, numC];
        }
      }
    }
  }
  return null;
}

export {
  threeSum,
};
