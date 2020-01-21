
function ackermann(object) {
  let { m: x, n: y } = object;
  if (x === 0) {
    return y + 1;
  }
  if (y === 0) {
    return ackermann({
      m: x - 1,
      n: 1,
    });
  }
  return ackermann({
    m: x - 1,
    n: ackermann({
      m: x,
      n: y - 1,
    }),
  });
}

export {
  ackermann,
};
