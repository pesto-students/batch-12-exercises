
function sumAll(numberlist) {
  const [lowerNumber, higherNumber] = numberlist.sort((a, b) => a - b);
  let addedNumber = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = lowerNumber; i <= higherNumber; i++) {
    addedNumber += i;
  }
  return addedNumber;
}

export {
  sumAll,
};
