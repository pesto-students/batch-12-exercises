const { sqrt } = Math;
const power = (base, exponent) => {
  let powered = base;
  powered **= exponent;
  return powered;
};
const { round } = Math;

export {
  sqrt,
  power,
  round,
};
