
const fibonacciIter = {
  [Symbol.iterator]() {
    let addition = 0;
    let value = 1;
    return {
      next() {
        const mem = value;
        value = addition + value;
        addition = mem;
        return {
          value,
          done: false
        }
      }
    }
  }
}

export {
  fibonacciIter,
};
