
function allOfConditions(...functionArray) {
  return (input) => {
    functionArray.every((eachfn) => eachfn(input));
  };
}

export {
  allOfConditions,
};
