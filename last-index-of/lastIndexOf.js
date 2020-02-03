
const lastIndexOf = (element, array) => {
  let lastIndex = -1;
  for (const index in array) {
    if ((array[index] === element) && (lastIndex < index)) {
      lastIndex = index;
    }
  }
  return parseInt(lastIndex, 10);
};

export {
  lastIndexOf,
};
