
function mapFilterAndReduce(objectArray) {
  const convertedObject = objectArray.map((obj) => ({
    [obj.firstName]: obj.firstName.length,
  }));
  const filterConvertedObject = convertedObject.filter((obj) => {
    if (Object.values(obj) < 5) {
      return true;
    }
    return false;
  });
  const finalObj = filterConvertedObject.reduce((acc, curValue) => {
    return Object.assign(acc, curValue);
  }, {});

  return finalObj;
}

export {
  mapFilterAndReduce,
};
