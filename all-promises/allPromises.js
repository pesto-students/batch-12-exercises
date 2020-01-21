
const allPromises = (array) => {
  return Promise.resolve(function() {
    return array.map((v) => {
      return Promise.resolve((v) => v);
    });
  }());
}

export {
  allPromises,
};
