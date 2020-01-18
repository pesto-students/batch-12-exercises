
function calculateMinSquares(number) {

  if (number <= 3) {
    return number;
  }

  var minSqaures = number; // 1*1 + 1*1 ... n times

  for (var i = 1; i <= number; i++) {
    var sqaure = i * i;
    if (sqaure > number) {
      break;
    } else {
      minSqaures = Math.min(minSqaures, 1 + calculateMinSquares(number - sqaure))
    }
  }

  return minSqaure;
}

function sumOfPerfectSquares(number) {
  const minSqaureNeeded = calculateMinSquares(number);
  return minSqaureNeeded;
}

export {
  sumOfPerfectSquares,
};
