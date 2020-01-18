
function isTriangle(...number) {
  number.sort((a, b) => a - b);
  const [triangleside1, triangleside2, trianglebiggerside3] = number;
  return triangleside1 ** 2 + triangleside2 ** 2 === trianglebiggerside3 ** 2;
}

export {
  isTriangle,
};
