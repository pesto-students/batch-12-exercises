
function longestWordInString(inputString) {
  let wordsArray = inputString.split(' ');
  let largestWordLength = 0;
  for (let i = 0; i < wordsArray.length; i++) {
    wordsArray[i].length > largestWordLength ? largestWordLength = wordsArray[i].length : largestWordLength;
  }
  return largestWordLength;
}

export {
  longestWordInString,
};
