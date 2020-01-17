
function perfectSquareGenerator() {
  let currentNumber = 0;
  return (() => {
    currentNumber += 1;
    return currentNumber ** 2;
  });
}

function getPerfectSquaresUpto(limit) {
  const perfectSquaresUpto = [];
  const getNextPerfectSquare = perfectSquareGenerator();
  let nextPerfectSquare = getNextPerfectSquare();
  while (nextPerfectSquare < limit) {
    perfectSquaresUpto.push(nextPerfectSquare);
    nextPerfectSquare = getNextPerfectSquare();
  }
  return perfectSquaresUpto;
}

function sumOfPerfectSquares(limit) {
  const perfectSquares = getPerfectSquaresUpto(limit);
  let requiredPerfectSquares = 0;
  let i = limit;
  while ((i > 0) && (perfectSquares.length > 0)) {
    if (perfectSquares[-1] > i) {
      perfectSquares.pop();
    } else {
      requiredPerfectSquares += 1;
      i -= perfectSquares[-1];
    }
  }
  return requiredPerfectSquares;
}

export {
  sumOfPerfectSquares,
};
