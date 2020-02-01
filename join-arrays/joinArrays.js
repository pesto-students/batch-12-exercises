
function joinArrays(...nestedArrays) {
  return nestedArrays.reduce((acc, curr) => acc.concat(curr), []);
}

export {
  joinArrays,
};
