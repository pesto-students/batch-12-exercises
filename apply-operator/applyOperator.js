
function applyOperator(...args) {
  const op = args.shift();
  switch (op) {
    case '+':
      return args.reduce((a, b) => a + b, 0);

    case '-':
      return args.reduce((a, b) => a - b, 0);

    case '*':
      return args.reduce((a, b) => a * b, 1);

    case '%':
      return args.reduce((a, b) => a % b);

    case '/':
      return parseFloat(args.reduce((a, b) => a / b).toFixed(4));

    default:
      throw new Error('Operator is not valid');
  }
}

export {
  applyOperator,
};
