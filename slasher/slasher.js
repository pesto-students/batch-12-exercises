
function slasher(array, slicecount) {
  const slashedArray = array.splice(slicecount);
  return slashedArray;
}

export {
  slasher,
};
