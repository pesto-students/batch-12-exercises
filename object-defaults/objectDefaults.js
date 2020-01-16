
function objectDefaults(primaryObj,secondaryObj) {
  const mergeObj = {...secondaryObj,...primaryObj};
  return mergeObj;
}

export {
  objectDefaults,
};
