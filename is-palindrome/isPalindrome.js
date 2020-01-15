
function isPalindrome(testValue) {
  var testFilteredAlphaNum = testValue.toString().replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  var reversedValue =  testFilteredAlphaNum.split('').reverse().join('').toLowerCase();
  return reversedValue === testFilteredAlphaNum;
}

export {
  isPalindrome,
};
