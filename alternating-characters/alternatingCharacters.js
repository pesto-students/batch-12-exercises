
function getAlternatingCharsCount(string) {
  const characterArray = string.split('');
  let deletionsCount = 0;
  characterArray.reduce((previousChar, currentChar) => {
    if (previousChar === currentChar) {
      deletionsCount += 1;
      return previousChar;
    }
    return currentChar;
  });
  return deletionsCount;
}

function alternatingCharacters(array) {
  return array.map(getAlternatingCharsCount);
}

export {
  alternatingCharacters,
};
