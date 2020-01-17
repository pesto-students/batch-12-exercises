
function fibonacciGenerator() {
  let a = 0;
  let b = 1;
  return (() => {
    b += a;
    a = b - a;
    return a;
  });
}

function getOddFibonaciiUpto(uptoNumber) {
  const fibonacciNumbers = [];
  const getNextFibonaci = fibonacciGenerator();
  let nextFibonacci = getNextFibonaci();
  while (nextFibonacci < uptoNumber) {
    fibonacciNumbers.push(nextFibonacci);
    nextFibonacci = getNextFibonaci();
  }
  const oddFibonacciNumbers = fibonacciNumbers.filter((n) => (n % 2) !== 0);
  return oddFibonacciNumbers;
}

function sumFibs(uptoNumber) {
  const oddFibonacciNumbers = getOddFibonaciiUpto(uptoNumber);
  const sumFibonacciNumbers = oddFibonacciNumbers.reduce((a, b) => (a + b), 0);
  return sumFibonacciNumbers;
}

export {
  sumFibs,
};
