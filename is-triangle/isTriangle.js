
function isTriangle(...number) {
  number.sort((a, b) => a - b);
  const [triangleside1, triangleside2, trianglebiggerside3] = number;
  return triangleside1 ** 2 + triangleside2 ** 2 === trianglebiggerside3 ** 2;
}

// isTriangle(5, 3, 4);


export {
  isTriangle,
};
