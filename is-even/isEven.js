
function isEven(number) {
  // If the last digit of the number is 0,2,4,6,8 then return true, else false
  const lastdigit = number.toString().slice(-1);
  switch (lastdigit) {
    case '2':
    case '4':
    case '6':
    case '8':
    case '0':
      return true;
    default:
      return false;
  }
}

export {
  isEven,
};
