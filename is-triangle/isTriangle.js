
function isTriangle(sideA, sideB, sideC) {
  const square = (number) => number * number;
  return ((square(sideA) + square(sideB)) === square(sideC));
}

export {
  isTriangle,
};
