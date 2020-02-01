function isPrime(number) {
  let isPrimeNumner = true;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      isPrimeNumner = false;
      return isPrimeNumner;
    }
  }

  return isPrimeNumner;
}

function sumPrimes(number) {
  let sumOfPrime = 0;

  for (let i = 2; i <= number; i += 1) {
    if (isPrime(i)) {
      sumOfPrime += i;
    }
  }

  return sumOfPrime;
}

export {
  sumPrimes,
};
