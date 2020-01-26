
function slasher(array, slicecount) {
  const slashedArray = array.splice(slicecount);
  console.log(array);
  return slashedArray;
}

export {
  slasher,
};
