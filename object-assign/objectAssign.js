
const mergeValues = (result, single) => { return Object.assign(result, single) };

function objectAssign(target, ...values) {
  values.reduce(mergeValues, target);
  return target;
}

export {
  objectAssign,
};
