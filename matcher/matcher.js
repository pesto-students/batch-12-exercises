
function matcher(stringArray, patternArray) {
  const mergedRegex = `/(${patternArray.join(")|(")})/`;
  console.log(mergedRegex);
  function isValidString(string) {
    return Boolean(string.match(mergedRegex));
  }
  return isValidString(stringArray[0]);
  // return stringArray.filter(isValidString);
}


console.log(matcher(['foo', 'bar'], ['f*o']));



export {
  matcher,
};