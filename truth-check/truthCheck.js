
function truthCheck(objectarray, predicate) {
  return objectarray.reduce((acc, curobject) => acc && Boolean(curobject[predicate]), true);
}

export {
  truthCheck,
};
