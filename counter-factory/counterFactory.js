
const counterFactory = (function () {
  let c = 0;
  return {
    increment: () => {
      c += 1;
      return c;
    },
    decrement: () => {
      c -= 1;
      return c;
    },
  };
});

export {
  counterFactory,
};
