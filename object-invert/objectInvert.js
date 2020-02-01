
function objectInvert(object) {
  const newObject = {};
  for (const [key, value] of Object.entries(object)) {
    newObject[value] = key;
  }
  return newObject;
}

export {
  objectInvert,
};
