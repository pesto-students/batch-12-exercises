
function arrayAddition(maybeNumberArray1, maybeNumberArray2) {
  if (!(maybeNumberArray1 instanceof Array) || !(maybeNumberArray2 instanceof Array)) {
    throw new Error('Either Of The Arguments Are Not Array');
  }
  if (maybeNumberArray1.length === 0 || maybeNumberArray2.length === 0) {
    throw new Error('Either of the Array is empty');
  }
  const concatenatedArray = maybeNumberArray1.concat(maybeNumberArray2);
  const isNumberArray = concatenatedArray.every((el) => typeof el === 'number');
  if (isNumberArray === false) {
    throw new Error('All Elements In Either Of The Array Are Not Of Number Type');
  }
  const numberArray1 = maybeNumberArray1;
  const numberArray2 = maybeNumberArray2;
  const biggerArrayLength = numberArray1.length > numberArray2.length ?
  numberArray1.length :
  numberArray2.length;

  const addedNumberArray = [];
  for (let i = 0; i < biggerArrayLength; i += 1) {
    if (numberArray1[i] === undefined) {
      numberArray1[i] = 0;
    }
    if (numberArray2[i] === undefined) {
      numberArray2[i] = 0;
    }
    addedNumberArray.push(numberArray1[i] + numberArray2[i]);
  }
  return addedNumberArray;
}

export {
  arrayAddition,
};
