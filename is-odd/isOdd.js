
function isOdd(number) {
  // If the last digit of the number is 1,3,5,7,9 then return true, else false
  const lastdigit = number.toString().slice(-1);
  switch (lastdigit) {
    case '1':
    case '3':
    case '5':
    case '7':
    case '9':
      return true;
    default:
      return false;
  }
}

export {
  isOdd,
};
