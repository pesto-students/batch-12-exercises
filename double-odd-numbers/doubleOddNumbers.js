
function doubleOddNumbers(array) {
  return array.filter((ele) => ele % 2 !== 0)
    .map((ele) => ele * 2);
}

export {
  doubleOddNumbers,
};
