
function isTriangle(...sides) {
  if (sides.length !== 3) {
    throw new Error('Expected (3) lengths of the triangle');
  }
  const sideA = parseInt(sides[0]);
  const sideB = parseInt(sides[1]);
  const sideC = parseInt(sides[2]);
  return (sideA<sideB+sideC && sideB<sideA+sideC && sideC<sideB+sideA)
}

export {
  isTriangle,
};
