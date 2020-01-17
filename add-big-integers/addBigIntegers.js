
function addBigIntegers(string) {
  const array = string.split('\n');
  const countOfIntegers = parseInt(array.shift());
  const sum = array.reduce((sum, n) => (sum + parseInt(n)), 0);
  return sum.toString();

}

export {
  addBigIntegers,
};
