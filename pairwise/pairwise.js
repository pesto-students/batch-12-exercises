
function pairwise(inputArray, sumForPair) {
  let sumOfPosition = 0;
  let totalPairs = 0;
  let inputArrayLength = inputArray.length;
  let indexArray = [];
  if (inputArrayLength === 2) return 0;
  for (let i = 0; i < inputArrayLength - 1; i++) {
    for (let j = i + 1; j < inputArrayLength; j++) {
      if (inputArray[i] + inputArray[j] === sumForPair) {
        if (!indexArray.includes(i) && !indexArray.includes(j)) {
          indexArray.push(i);
          indexArray.push(j);
        }
      }
    }
  }
  return indexArray.reduce((a, b) => a + b, 0);
}

export {
  pairwise,
};
