
function truthCheck(array, checkKey) {
  return array.every((item) => item[checkKey] && Boolean(item[checkKey]));
}

export {
  truthCheck,
};
