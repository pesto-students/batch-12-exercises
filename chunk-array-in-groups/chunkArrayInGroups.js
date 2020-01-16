
function chunkArrayInGroups(inputArray, chunkSize) {
  const answer = [];
  for (let i = 0; i < inputArray.length; i += chunkSize) {
    answer.push(inputArray.slice(i, i + chunkSize));
  }
  return answer;
}

export {
  chunkArrayInGroups,
};
