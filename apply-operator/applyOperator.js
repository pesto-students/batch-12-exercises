
function applyOperator(optr, ...args) {
  const z = 0;
  return optr === '+' ? args.reduce((acc, el) => acc + el, 0)
    : optr === '-' ? args.reduce((acc, el) => acc - el, 0)
      : optr === '*' ? args.reduce((acc, el) => acc * el, 1)
        : optr === '/' ? Number(args.reduce((acc, el) => acc / el, 1).toFixed(4))
          : optr === '%' ? args.reduce((acc, el) => acc % el)
            : 0
  // return;
}

export {
  applyOperator,
};
