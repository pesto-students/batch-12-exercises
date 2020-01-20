
function bind(func, refObject, ...params) {
  const objFuncBind = func.bind(refObject, ...params);
  return objFuncBind;
}

export {
  bind,
};
