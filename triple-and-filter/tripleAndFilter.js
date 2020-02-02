
function tripleAndFilter(numberArray) {
  const tripleNumberArray = numberArray.map((number) => number * 3);
  return tripleNumberArray.filter((number) => number % 5 === 0);
}

export {
  tripleAndFilter,
};
