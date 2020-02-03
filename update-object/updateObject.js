function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return function (...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}


function updateArray(index, toReplace, array) {
  if (index < 0) {
    index = array.length + index;
  }
  if (index >= array.length || index < 0) {
    return array;
  }
  const updatedArray = [...array.slice(0, index), toReplace, ...array.slice(index + 1)];
  return updatedArray;
}

const updateObject = curry(updateArray);


export {
  updateObject,
};
