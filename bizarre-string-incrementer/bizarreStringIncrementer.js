function padZeroToString(numofZero, str) {
  if (numofZero === 0) {
    return str;
  }
  let i = 0;
  let string = '';
  while (i < numofZero) {
    string = `${string}0`;
    i += 1;
  }
  return `${string}${str}`;
}


function bizarreStringIncrementer(string) {
  const reverseCharArray = string.split('').reverse();
  let isFilterEnd = true;
  const trailingNumberList = reverseCharArray.filter((value) => {
    if (!isNaN(Number(value)) && isFilterEnd) {
      return true;
    }
    isFilterEnd = false;
  });
  
  const slicedCharArray = reverseCharArray.slice(trailingNumberList.length, reverseCharArray.length);
  const charArray = slicedCharArray.reverse().join('');

  const numberListToString = trailingNumberList.reverse().join('');

  const incrementedNumber = Number(numberListToString) + 1;
  const noOfZeroToPad = numberListToString.length - (String(incrementedNumber)).length;
  const paddedString = padZeroToString(noOfZeroToPad, String(incrementedNumber));

  return charArray + paddedString;
}


export {
  bizarreStringIncrementer,
};
