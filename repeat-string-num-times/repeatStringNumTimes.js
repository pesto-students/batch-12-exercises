
function repeatStringNumTimes(givenString, repeatCount) {
  let newString = '';
  if (repeatCount <= 0) {
    return '';
  }
  for (let i = 0; i < repeatCount; i++) {
    newString += givenString;
  }
  return newString;
}

export {
  repeatStringNumTimes,
};
