
function applyOperator(Operator, ...operands) {
  const z = 0;
  return Operator === '+' ? operands.reduce((acc, el) => acc + el, 0)
    : Operator === '-' ? operands.reduce((acc, el) => acc - el, 0)
      : Operator === '*' ? operands.reduce((acc, el) => acc * el, 1)
        : Operator === '/' ? Number(operands.reduce((acc, el) => acc / el, 1).toFixed(4))
          : Operator === '%' ? operands.reduce((acc, el) => acc % el)
            : throwError();
  // return;
}

function throwError() {
  throw new Error("Operator not found, Expected one of +, -, *, /, %");
}

export {
  applyOperator,
};
