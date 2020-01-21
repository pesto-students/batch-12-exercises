
function objectAssign(targetObj = {}, sourceObj1 = {}, sourceObj2 = {}) {
  if (sourceObj1 === null) {
    sourceObj1 = {};
  }
  if (sourceObj2 === null) {
    sourceObj2 = {};
  }
  let combineSourceObj1 = Object.assign(targetObj, sourceObj1);
  return Object.assign(combineSourceObj1, sourceObj2);
}


export {
  objectAssign,
};
