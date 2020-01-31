
const isPerfectlyDivisible = (number, value) => (number % value) === 0;

function isPrime(number) {
  if (number === 0) {
    return true;
  }
  if (number === 1) {
    return false;
  }
  const rootOfNumber = Math.floor(number ** 0.5);
  for (let index = 2; index <= rootOfNumber; index += 1) {
    if (isPerfectlyDivisible(number, index)) {
      return false;
    }
  }
  return true;
}

function sumPrimes(uptoNumber) {
  let sum = 0;
  for (let index = 0; index <= uptoNumber; index += 1) {
    if (isPrime(index)) {
      sum += index;
    }
  }
  return sum;
}

export {
  sumPrimes,
};
