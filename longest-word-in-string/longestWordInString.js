
function longestWordInString(paragraph) {
  const wordLengthList = paragraph.split(' ').map((eachword) => eachword.length);
  return Math.max(...wordLengthList);
}

export {
  longestWordInString,
};
