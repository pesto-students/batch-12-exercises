
function sumPrimes(number) {
  if (typeof number !== 'number') {
    return false;
  }
  const primeNumbers = [];
  for (let i = 2; i <= number; i += 1) {
    let count = 0;
    for (let j = 2; j <= i; j += 1) {
      if (i % j === 0) {
        count += 1;
      }
    }
    if (count === 1) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers.reduce((x, y) => x + y, 0);
}

export {
  sumPrimes,
};
