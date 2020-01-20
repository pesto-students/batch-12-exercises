
var shiftToNextChar = (char) => {
  let charCode = char.charCodeAt(0);
  charCode += 1;
  return String.fromCharCode(charCode);
}

function alphabeticShift(string) {
  const chars = string.split('');
  const shiftedCharsArray = chars.map(shiftToNextChar);
  return shiftedCharsArray.join('');
}

export {
  alphabeticShift,
};
