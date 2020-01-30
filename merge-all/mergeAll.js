const reducer = (accumulator, currentValue) => Object.assign(accumulator, currentValue);
const mergeAll = (array) => (array.reduce(reducer, {}));

export {
  mergeAll,
};
