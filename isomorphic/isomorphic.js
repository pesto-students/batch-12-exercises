
Array.prototype.equals = function (arrayToCompare) {
  if (this.length !== arrayToCompare.length) {
    return false;
  }
  const result = this.every((value, index) => {
    if (value === arrayToCompare[index]) {
      return true;
    }
  })
  return result;
}

const getIndexesOf = (word, charToFind) => {
  const positionsOfChars = [];
  let index = 0;
  for (const char of word) {
    if (charToFind === char) {
      positionsOfChars.push(index)
    }
    index += 1;
  }
  return positionsOfChars;
}

function isomorphic(words) {
  const firstWord = words[0];
  const secondWord = words[1];

  if (firstWord.length !== secondWord.length) {
    return false;
  }

  let index = 0;
  
  for (const char of firstWord) {
    const positionsOfCharA = getIndexesOf(firstWord, char);
    const positionsOfCharB = getIndexesOf(secondWord, secondWord.charAt(index));
    if(!positionsOfCharA.equals(positionsOfCharB)){
      return false;
    }
    index+=1;
  }
  return true;
}

export {
  isomorphic,
};
