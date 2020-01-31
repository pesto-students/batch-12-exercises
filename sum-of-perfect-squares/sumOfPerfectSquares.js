
const isSquare = (value) => Math.floor(value ** 0.5) === (value ** 0.5);
const getSquare = (value) => value ** 2;

function sumOfPerfectSquares(value) {
  // There can only be 4 possible solutions -> 1,2,3,4
  // Check if perfect square , then return 1
  if (isSquare(value)) {
    return 1;
  }

  // Manually checking for result 2
  for (let index = 0; index <= value; index += 1) {
    // if x=n-index * index   and x is a valid square then OBVIOUSLY
    // n=index^2 +sqrt(x)^2  ,so n is a square of two numbers
    if (isSquare(value - getSquare(index))) {
      return 2;
    }
  }

  // Legendre's three square theorem: A natural number n can be represented as
  // the sum of three squares of integers if and only if : n!= 4^x ( 8*m+7)
  let i = value;
  while ((i % 4) === 0) {
    i /= 4;
  }
  if (i % 8 === 7) {
    return 4;
  }

  // otherwise
  return 3;
}

export {
  sumOfPerfectSquares,
};
