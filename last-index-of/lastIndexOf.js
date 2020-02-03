
const lastIndexOf = (element, array) => {
  let index = array.length - 1;
  // eslint-disable-next-line
  for (; index > -1; index += 1) {
    if (array[index] === element) {
      return index;
    }
  }
  return index;
};

export {
  lastIndexOf,
};
