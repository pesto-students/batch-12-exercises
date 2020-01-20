
function alphabeticShift(string) {
  const tokenizedString = string.split('');
  const shiftedArray = tokenizedString.map((chr) => String.fromCharCode(chr.charCodeAt(0) + 1));
  return shiftedArray.join('');
}

export {
  alphabeticShift,
};
