
function sumEvenArgs(...args) {
  return args.filter((ele) => ele % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}

export {
  sumEvenArgs,
};
