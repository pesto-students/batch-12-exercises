
function longestWordInString(fullString) {
  var maxLengthOfWord = 0;
  fullString.split(" ").map((eachWord)=>
    { if(maxLengthOfWord<eachWord.length){
        maxLengthOfWord=eachWord.length;
      }
    }
  )
  return maxLengthOfWord;
}

export {
  longestWordInString,
};
