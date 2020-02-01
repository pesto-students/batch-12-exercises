function threeSum(array, number) {
  if (array.length < 3) {
    throw new Error('Array length is less than 3');
  }
  if (typeof number !== 'number') {
    throw new Error('Number must be of type Number');
  }
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      for (let k = j + 1; k < array.length; k += 1) {
        if (number === array[i] + array[j] + array[k]) {
          return [array[i], array[j], array[k]];
        }
      }
    }
  }
  return null;
}

export {
  threeSum,
};
