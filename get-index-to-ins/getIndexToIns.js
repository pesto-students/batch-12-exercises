
function getIndexToIns(numberarray, number) {
  const sortedarray = numberarray.sort((a, b) => a - b);
  let indexToInclude;
  // eslint-disable-next-line array-callback-return
  sortedarray.filter((eachitem) => {
    if (number > eachitem) {
      indexToInclude = sortedarray.indexOf(eachitem) + 1;
    } else if (number === eachitem) {
      indexToInclude = sortedarray.indexOf(eachitem);
    }
  });
  return indexToInclude;
}

export {
  getIndexToIns,
};
