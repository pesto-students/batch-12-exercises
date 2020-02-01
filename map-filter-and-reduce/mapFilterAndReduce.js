
function mapFilterAndReduce(args) {
  return args.map((item) => item.firstName)
    .filter((ele) => ele.length < 5)
    .reduce((acc, curr) => {
      acc[curr] = curr.length;
      return acc;
    }, {});
  //
}

export {
  mapFilterAndReduce,
};
