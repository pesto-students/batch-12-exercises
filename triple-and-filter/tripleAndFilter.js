
function tripleAndFilter(array) {
  return array.map((ele) => ele * 3).filter((ele) => ele % 5 === 0);
}

export {
  tripleAndFilter,
};
