
const fibonacciIter = {
  [Symbol.iterator]() {
    let initial = 0;
    let value = 1;
    return {
      next() {
        const temp = value;
        value = initial + value;
        initial = temp;
        return {
          value,
          done: false,
        };
      },
    };
  },
};

export {
  fibonacciIter,
};
