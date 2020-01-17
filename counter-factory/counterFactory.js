
function counterFactory() {
  var count = 0;
  const increment = function () {
    count += 1;
    return count;
  }
  const decrement = function () {
    count -= 1;
    return count;
  }
  return { increment, decrement };
}

export {
  counterFactory,
};
