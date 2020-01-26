
function roundTo(number, roundRadix) {
  return Number.parseFloat(number.toPrecision(roundRadix));
}

export {
  roundTo,
};
