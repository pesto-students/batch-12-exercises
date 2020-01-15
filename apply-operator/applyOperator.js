/* eslint-disable prefer-const */

function applyOperator(...args) {
  let operator = args[0];
  args.shift();
  if (args.length === 0) {
    return 0;
  }
  if (operator === '+') {
    let sum = 0;
    for (let x of args) {
      sum = x + sum;
    }
    return sum;
  }
  if (operator === '-') {
    let sum = 0;
    for (let x of args) {
      sum = x + sum;
    }
    sum -= (2 * sum);
    return sum;
  }
  if (operator === '*') {
    let mul = 1;
    for (let x of args) {
      // eslint-disable-next-line operator-assignment
      mul = x * mul;
    }
    return mul;
  }
  if (operator === '/') {
    let div = 1;
    // eslint-disable-next-line no-plusplus
    for (let x = 0; x < args.length; x++) {
      // eslint-disable-next-line operator-assignment
      div = div / args[x];
    }
    return Number(div.toFixed(4));
  }
  if (operator === '%') {
    if (args.length > 1) {
      return args.reduce((a, b) => a % b);
    }
    return args[0];
  }
  throw new Error();
}

export {
  applyOperator,
};
