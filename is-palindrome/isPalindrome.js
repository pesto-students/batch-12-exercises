
function isPalindrome(value) {
  const matchNonAlphanumeric = /[^A-Za-z0-9]/g;
  const lowerCaseString = String(value).toLowerCase().replace(matchNonAlphanumeric, '');
  const reversestring = lowerCaseString.split('').reverse().join('');
  return reversestring === lowerCaseString;
}

export {
  isPalindrome,
};
