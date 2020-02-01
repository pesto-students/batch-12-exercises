
function abbreviateString(string) {
  const wordsArray = string.split(' ');
  const firstWord = wordsArray[0];
  const lastwordPosition = wordsArray.length - 1;
  const initial = `${(wordsArray[lastwordPosition].charAt(0)).toUpperCase()}.`;
  return `${firstWord} ${initial}`;
}

export {
  abbreviateString,
};
