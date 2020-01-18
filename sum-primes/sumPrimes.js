
function isPrime(number) {
  var isPrimeNumber = true;
  for (var divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) { isPrimeNumber = false; }
  }
  return isPrimeNumber;
}

function getPrimeNumbers(number) {
  var primeNumbers = [];
  for (var initial = 2; initial <= number; initial++) {
    if(isPrime(initial)){
      primeNumbers.push(initial);
    }
  }
  return primeNumbers;
}

function sumPrimes(number) {
  const arrayOfPrimeNumbers = getPrimeNumbers(number);
  const sumOfPrimeNumbers = arrayOfPrimeNumbers.reduce((sum,primeNumber)=>sum+primeNumber,0);
  return sumOfPrimeNumbers;
}

export {
  sumPrimes,
};
