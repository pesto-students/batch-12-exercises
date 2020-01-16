
function objectToKeyValueArrays(object) {
  const objectkeys = Object.keys(object);
  const objectvalues = Object.values(object);
  return [objectkeys, objectvalues];
}

function objectInvert(object) {
  const intervtedObject = {};
  const [keyarray, valuearray] = objectToKeyValueArrays(object);
  // eslint-disable-next-line no-return-assign
  valuearray.forEach((key, i) => intervtedObject[key] = keyarray[i]);
  return JSON.parse(JSON.stringify(intervtedObject));
}

export {
  objectInvert,
};
