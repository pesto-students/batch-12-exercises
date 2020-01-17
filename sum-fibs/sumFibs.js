const memoFibs = {};

function calcFib(number) {
  if (number === 0 || number === 1) { return 1; }
  if (memoFibs.hasOwnProperty(number)) { return memoFibs[number]; }
  var calculatedFib = calcFib(number - 1) + calcFib(number - 2);
  memoFibs[number] = calculatedFib;
  return calculatedFib;
}

function sumFibs(number) {
  var summationOfFibs = 0;
  for (var initial = 0; calcFib(initial) < number; initial++) {
    var fib = calcFib(initial);
    if (fib % 2 !== 0) {
      summationOfFibs += fib;
    }
  }
  return summationOfFibs;
}

export {
  sumFibs,
};
