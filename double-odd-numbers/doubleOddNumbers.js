
function doubleOddNumbers(numberArray) {
  const oddArry = numberArray.filter((number) => number % 2 !== 0);
  const doubleOddArray = oddArry.map((oddnumber) => oddnumber * 2);
  return doubleOddArray;
}

export {
  doubleOddNumbers,
};
