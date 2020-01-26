function objectInvert(object) {
  const objectMap = new Map();
  for (const [key, value] of Object.entries(object)) {
    objectMap.set(value, key);
  }
  const intervertedObj = Array.from(objectMap).reduce((obj, [key, value]) => {
    // eslint-disable-next-line no-param-reassign
    obj[key] = value;
    return obj;
  }, {});
  return intervertedObj;
}

export {
  objectInvert,
};
