
function repeatStringNumTimes(stringToRepeat, noTimesRepeat) {
  let repeatedString = '';
  if (noTimesRepeat < 0) {
    return '';
  }
  while (noTimesRepeat > 0) {
    repeatedString = repeatedString.concat(stringToRepeat);
    noTimesRepeat--;
  }
  return repeatedString;
}

export {
  repeatStringNumTimes,
};
