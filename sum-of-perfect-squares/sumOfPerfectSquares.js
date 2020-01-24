function isPerfectSquare(number) {
  if (number < 1) {
    return false;
  }
  return Number.isInteger(Math.sqrt(number));
}

function sumOfPerfectSquares(number) {
  if (isPerfectSquare(number)) {
    return 1;
  }
  let arrayOfPerfectSquares = [];
  for (let i = 1; i < number; i += 1) {
    if (isPerfectSquare(i)) {
      arrayOfPerfectSquares.push(i);
    }
  }
  console.log(arrayOfPerfectSquares);
  
}

// export {
//   sumOfPerfectSquares,
// };

console.log(sumOfPerfectSquares(19));
// console.log(sumOfPerfectSquares(15));
// console.log(sumOfPerfectSquares(15));
// console.log(sumOfPerfectSquares(18));