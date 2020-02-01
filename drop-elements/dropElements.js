
function dropElements(inputArray, inputFunction) {
  return inputArray.reduce((resultArray, currentValue) => {
    if (inputFunction(currentValue)) {
      resultArray.push(currentValue);
    }
    return resultArray;
  }, []);
}

export {
  dropElements,
};
