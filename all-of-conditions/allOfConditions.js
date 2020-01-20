
const allOfConditions = (...callbackFunctions) => ((input) => {
  if (typeof callbackFunctions === 'function') {
    return callbackFunctions(input);
  }
  for (const callbackFunction of callbackFunctions) {
    const result = callbackFunction(input);
    if (Boolean(result) === false) {
      break;
    }
  }
  return null;
});
export {
  allOfConditions,
};
