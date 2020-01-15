
function largeOfFour(numberlists) {
  const largeNumberList = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numberlists.length; i++) {
    largeNumberList.push(Math.max(...numberlists[i]));
  }
  return largeNumberList;
}

export {
  largeOfFour,
};
