
const alphabeticShift = (string) => {
  const chars = string.split('');
  const shiftedchars = chars.map((char) => String.fromCharCode(char.charCodeAt(0) + 1));
  return shiftedchars.join('');
};

export {
  alphabeticShift,
};
