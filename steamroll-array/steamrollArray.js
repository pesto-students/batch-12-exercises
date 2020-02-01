
function steamrollArray(array) {
  return array.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? steamrollArray(curr) : curr), []);
}

export {
  steamrollArray,
};
