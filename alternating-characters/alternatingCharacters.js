
function minCharRemovalForAlteration(string) {
  return string.split('').reduce((charDeletion, currentChar, index, charArray) => {
    if (currentChar === charArray[index + 1]) {
      charDeletion++;
    }
    return charDeletion;
  }, 0)
}

function alternatingCharacters(array) {
  return array.map(minCharRemovalForAlteration)
}

export {
  alternatingCharacters,
};
