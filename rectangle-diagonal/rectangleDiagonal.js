
const square = (value) => value ** 2;
const squareroot = (value) => parseFloat(value ** 0.5, 2);
const rectangleDiagonal = (length, breadth) => squareroot(square(length) + square(breadth));

export {
  rectangleDiagonal,
};
