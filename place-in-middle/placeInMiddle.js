
function placeInMiddle(array1, array2) {
  const pointOfInsertion = Math.floor(array1.length / 2);
  return array1.slice(0, pointOfInsertion).concat(array2).concat(array1.slice(pointOfInsertion));
}

export {
  placeInMiddle,
};
