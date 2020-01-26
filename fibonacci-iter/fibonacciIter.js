
const fibonacciIter = {
  [Symbol.iterator]() {
    let prevValue = -1;
    let curvalue = 1;
    const iterable = {
      next() {
        while (true) {
          prevValue = curvalue;
          curvalue = curvalue + prevValue;
          return {
            value: curvalue,
            done: false,
          };
        }
      },
    };
    return iterable;
  }
};

export {
  fibonacciIter,
};
