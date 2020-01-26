
function* generatorIterable() {
  let num = 1;
  while (num <= 5) {
    yield num;
    num += 1;
  }
}

export {
  generatorIterable,
};
