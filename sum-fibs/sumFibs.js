function sumFibs(num) {
  if (typeof num !== 'number') {
    return false;
  }
  if (num < 0) return -1;
  if (num === 0 || num === 1) return 1;
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }
  return result;
}

export {
  sumFibs,
};
