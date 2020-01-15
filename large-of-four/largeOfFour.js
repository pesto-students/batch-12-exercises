
function largeOfFour(unorderedArrays) {
  return unorderedArrays.map((singleArray)=>Math.max(...singleArray))
}

export {
  largeOfFour,
};
