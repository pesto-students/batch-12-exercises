
function reverseString(inputString) {
  let reverseString = '';
  let stringArray = inputString.split("");
  let reverseArray = [];
  for (let i = stringArray.length - 1; i > -1; i--) {
    reverseArray.push(stringArray[i]);
  }
  reverseString = reverseArray.join('');
  return reverseString;
}

export {
  reverseString,
};
