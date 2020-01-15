
function counter(...args) {
  let step = 1;
  return function() {
    step += 1;
    return step;
  }
}

export {
  counter,
};
