
function factorial(number) {
  // factorial of 0 is 1
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

export {
  factorial,
};
