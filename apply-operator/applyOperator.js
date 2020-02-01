/* eslint-disable prefer-const */

function applyOperator(...args) {
  let args1 = Array.prototype.slice.call(args);
  let [operator, ...operand] = args1;
  let expectedOperator = false;

  if (operator === '+') {
    let sum = 0;
    for (let x of operand) {
      sum = x + sum;
    }
    return sum;
  }
  if (operator === '-') {
    let sum = 0;
    for (let x of operand) {
      sum = x + sum;
    }
    sum -= (2 * sum);
    return sum;
  }
  if (operator === '*') {
    let mul = 1;
    for (let x of operand) {
      // eslint-disable-next-line operator-assignment
      mul = x * mul;
    }
    return mul;
  }
  if (operator === '/') {
    let div = 1;
    // eslint-disable-next-line no-plusplus
    for (let x = 0; x < operand.length; x++) {
      // eslint-disable-next-line operator-assignment
      div = div / operand[x];
    }
    return Number(div.toFixed(4));
  }
  if (operator === '%') {
    if (operand.length > 1) {
      return operand.reduce((a, b) => a % b);
    }
    return operand[0];
  }
  expectedOperator = true;
  if (expectedOperator) {
    throw new Error('Received invalid operator. Expected one of +,-,*,/,%');
  }
  if (operand.length === 0) {
    return 0;
  }
}

export {
  applyOperator,
};
