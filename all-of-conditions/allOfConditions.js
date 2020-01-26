
function allOfConditions(...functionArray) {
  return function (input) {
    functionArray.every((eachfn) => eachfn(input));
  };
}

export {
  allOfConditions,
};
