
function isEven(number) {
  var remainder = number;
  for (; remainder > 0;) {
    remainder -= 2;
  }
  return remainder === 0 ? true : false;
}

export {
  isEven,
};
