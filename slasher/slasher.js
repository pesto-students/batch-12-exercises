
function slasher(array, number) {
  const newArray = array.reverse();
  for (let i = 0; i < number; i += 1) {
    newArray.pop();
  }
  return newArray.reverse();
}

export {
  slasher,
};
