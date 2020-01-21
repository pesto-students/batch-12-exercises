
const map = (array1, array2) => {
  if (array1.length > array2.length) {
    return array1.map((ele, index) => ele + (array2[index] || 0))
  }
  return array2.map((ele, index) => ele + (array1[index] || 0))
}

const haveErrors = (first, second) => {
  if (first.length === 0 || second.length === 0) {
    throw new Error('Array received is empty. Expected length is more than 0');
  }
  if (!Array.isArray(first) || !Array.isArray(second)) {
    throw new Error(`Received values are not arrays. Array , first : ${Array.isArray(first)} second : ${Array.isArray(second)}`);
  }
  if (!first.every(Number.isInteger) || !second.every(Number.isInteger)) {
    throw new Error(`Received values are not numbers arrays. Array , first : ${first.every(Number.isInteger)} second : ${second.every(Number.isInteger)}`);
  }
  return false;
}
function arrayAddition(first, second) {
  if (!haveErrors(first, second)) {
    var sums = map(first, second);
  }
  return sums;
}


//console.log(arrayAddition([0, 1, 0, 4], [100, -200, 200, 400, 0, 99999]))
//console.log(99999 + (undefined || 0))
export {
  arrayAddition,
};
