function alternatingCharactersInString(string) {
  const arrayOfCharacters = string.split('');
  let count = 0;
  arrayOfCharacters.reduce((acc, curr) => {
    if (acc === curr) {
      count += 1;
    }
    return curr;
  });
  return count;
}

function alternatingCharacters(array) {
  const countArray = [];
  return array.reduce((acc, curr) => {
    countArray.push(alternatingCharactersInString(curr));
    return countArray;
  }, array[0]);
}


export {
  alternatingCharacters,
};
