
function counter() {
  let step = 0;
  // eslint-disable-next-line func-names
  return function() {
    step += 1;
    return step;
  };
}

export {
  counter,
};
