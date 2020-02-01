
function reverseString(string) {
  const chars = string.split('');
  const reducer = (accumulator, currentValue) => currentValue + accumulator;
  return chars.reduce(reducer, '');
}

export {
  reverseString,
};
