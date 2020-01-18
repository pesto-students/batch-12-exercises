
function rectangleDiagonal(side1, side2) {
  const sumOfSquaresOfSides = (side1 * side1) + (side2 * side2);
  const squareRootOfSumOfSides = Math.sqrt(sumOfSquaresOfSides);
  return squareRootOfSumOfSides;
}

export {
  rectangleDiagonal,
};
