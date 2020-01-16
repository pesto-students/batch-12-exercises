
function dropElements(inputArray, inputFunction) {
  return inputArray.reduce((arr, crr) => {
    if (inputFunction(crr)) {
      arr.push(crr);
    }
    return arr;
  }, []);
}

export {
  dropElements,
};
