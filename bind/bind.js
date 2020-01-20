
function bind(...args) {
  const objFuncBind = func.bind(obj, ...params);
  return objFuncBind;
}

export {
  bind,
};
