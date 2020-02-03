
function lastIndexOf(element, array) {
  if (array.includes(element)) {
    let index = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] === element) {
        index = i;
      }
    }
    return index;
  }
  return -1;
}

export {
  lastIndexOf,
};
