
function doubleOddNumbers(array) {
  let oddNumbersArray = array.filter((eachNum) => eachNum % 2 != 0 ? true : false);
  let doubleOddNumbers = oddNumbersArray.map((eachNum) => eachNum * 2);
  return doubleOddNumbers;
}

export {
  doubleOddNumbers,
};
