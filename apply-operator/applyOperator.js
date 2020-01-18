
function applyOperator(operator, ...numbers) {
  switch (operator) {
    case '+':
      return numbers.reduce((result, number) =>result + number, 0);
      case '-':
      return numbers.reduce((result, number) =>result - number, 0);
    case '*':
      return numbers.reduce((result, number) =>result * number, 1);
    case '/':
      return parseFloat(numbers.reduce((result, number) =>result / number, 1).toFixed(4));
    case '%':
      const initialOperand = numbers[0];
      const restOperand = numbers.slice(1);
      return restOperand.reduce((result, number) =>result % number, initialOperand);
    default:
      throw new Error('Expected: "+","-","*","/","%". Recieved: ${operator}');
  }
}

export {
  applyOperator,
};
