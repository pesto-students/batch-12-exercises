
function alphabeticShift(string) {
  const stringArray = string.split('');
  const shiftedStringArray = stringArray.map((char) => String.fromCharCode(char.charCodeAt(0) + 1));
  const shiftedString = shiftedStringArray.join('');
  return shiftedString;
}

export {
  alphabeticShift,
};
