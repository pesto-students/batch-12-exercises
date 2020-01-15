
function applyOperator(operator, ...numbers) {
  switch (operator) {
    case '+':
      return numbers.reduce((a, b) => a + b, 0);

    case '-':
      return numbers.reduce((a, b) => a - b, 0);

    case '*':
      return numbers.reduce((a, b) => a * b, 1);

    case '%':
      return numbers.reduce((a, b) => a % b);

    case '/':
      return parseFloat(numbers.reduce((a, b) => a / b).toFixed(4));

    default:
      throw new Error(`Received invalid operator ${operator}. Expected one of +,-,*,/,%`);
  }
}

export {
  applyOperator,
};
