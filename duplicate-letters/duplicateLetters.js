
function duplicateLetters(word) {
  const duplicateMemo = {};
  let max = 0;
  for(const char of word){
    let countOfChar = 1;
    if(duplicateMemo[char] !== undefined){
      countOfChar = duplicateMemo[char];
      countOfChar+=1;
      if(countOfChar > max){
        max = countOfChar;
      }
    }
    duplicateMemo[char] = countOfChar;
  }

  if(max === 0){
    return false;
  }else{
    return max;
  }
}

export {
  duplicateLetters,
};
