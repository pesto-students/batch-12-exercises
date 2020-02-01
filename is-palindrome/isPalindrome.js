
function isPalindrome(checkPalindrome) {
  const checkPalindromeString = checkPalindrome.toString();
  const originalString = checkPalindromeString.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g, '').toLowerCase();
  const reverseString = originalString.split('').reverse().join('');
  return originalString === reverseString;
}

export {
  isPalindrome,
};
