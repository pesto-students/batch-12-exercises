
function binaryAgent(binaryString) {
  const binaryChars = binaryString.split(' ');
  const asciiChars = binaryChars.map((value) => parseInt(value, 2));
  const string = asciiChars.map((value) => String.fromCharCode(value)).join('');
  return string;
}

export {
  binaryAgent,
};
