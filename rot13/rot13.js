function rotateCharBy13(char) {
  if (char.charCodeAt(0) > 90 || char.charCodeAt(0) < 65) {
    return char;
  }

  let charCodeAddedby13 = char.charCodeAt(0) + 13;
  if (charCodeAddedby13 > 90) {
    charCodeAddedby13 = charCodeAddedby13 - 90 + 64;
  }

  return String.fromCharCode(charCodeAddedby13);
}

function rot13(string) {
  const wordArray = string.split(' ');
  const rotatedWordArrayBy13 = wordArray.map((word) => word.split('').map((char) => rotateCharBy13(char)).join(''));
  return rotatedWordArrayBy13.join(' ');
}

export {
  rot13,
};
