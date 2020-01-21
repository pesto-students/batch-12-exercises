
function* apertureG(arr, apertureVal) {
  var i = 0;
  var temp = apertureVal;
  while (i <= arr.length) {
    yield arr.slice(i, temp);
    i += 1;
    temp += 1;
  }
}

function aperture(apertureVal, array) {
  if (apertureVal > array.length) {
    return [];
  }
  const emptyArr = [];
  var i = 0;
  while (i <= array.length) {
    var temp = apertureG(array, apertureVal).next().value;
    console.log(temp);
    emptyArr.push(temp);
    i += 1;
  }
  return emptyArr;
}

const sevenLs = [1, 2, 3, 4, 5, 6, 7];
aperture(2, sevenLs);

// export {
//   aperture,
// };
