
function sumAll(inputArray) {
  let resultSum = 0;
  if (inputArray[0] < inputArray[1]) {
    for (let i = inputArray[0]; i <= inputArray[1]; i++) {
      resultSum += i;
    }
    return resultSum;
  }
  for (let i = inputArray[0]; i >= inputArray[1]; i--) {
    resultSum += i;
  }
  return resultSum;
}

export {
  sumAll,
};
