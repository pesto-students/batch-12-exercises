
function allOfConditions(...functions) {
  return (input) => functions.reduce((acc, fun) => acc && fun(input), true);
}

export {
  allOfConditions,
};
