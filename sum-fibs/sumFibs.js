
function* fibonacciGenerator() {
  let firstFibonacci = 0;
  let secondFibonacci = 1;
  while (true) {
    firstFibonacci += secondFibonacci;
    secondFibonacci = firstFibonacci - secondFibonacci;
    yield firstFibonacci;
  }
}

function getOddFibonacciUpto(uptoNumber) {
  const oddFibonacciNumbers = [];
  const getFibonacci = fibonacciGenerator();
  let nextFibonacci = getFibonacci.next().value;
  while (nextFibonacci < uptoNumber) {
    if ((nextFibonacci % 2) !== 0) {
      oddFibonacciNumbers.push(nextFibonacci);
    }
    nextFibonacci = getFibonacci.next().value;
  }
  return oddFibonacciNumbers;
}

function sumFibs(uptoNumber) {
  const oddFibonacciNumbers = getOddFibonacciUpto(uptoNumber);
  const sumFibonacciNumbers = oddFibonacciNumbers.reduce((a, b) => (a + b), 0);
  return sumFibonacciNumbers;
}

export {
  sumFibs,
};
