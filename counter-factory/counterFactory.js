
function counterFactory() {
  let step = 0;
  return {
    increment: () => {
      step += 1;
      return step;
    },
    decrement: () => {
      step -= 1;
      return step;
    },
  };
}

export {
  counterFactory,
};
