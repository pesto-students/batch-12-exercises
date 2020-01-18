function fibonacciSeries(number) {
  const fiboArray = [1, 1];
  let [, lastElement] = fiboArray;
  while (lastElement < number) {
    fiboArray.push(
      fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2],
    );
    lastElement = fiboArray[fiboArray.length - 1];
  }
  return fiboArray;
}

function sumFibs(number) {
  const fibonacciArray = fibonacciSeries(number);
  const oddfibonacciArray = fibonacciArray.filter((no) => no % 2 !== 0 && no < number);
  if (oddfibonacciArray.length) {
    return oddfibonacciArray.reduce((a, b) => a + b);
  }
  return 0;
}

export {
  sumFibs,
};
