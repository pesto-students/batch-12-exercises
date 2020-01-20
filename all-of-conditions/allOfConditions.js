
function allOfConditions(...functionArray) {
  return function (input) {
    functionArray.map((eachfn) => {
      if (!eachfn(input)) {
        return null;
      }
      // return eachfn(input);
    });
  };
}

export {
  allOfConditions,
};
