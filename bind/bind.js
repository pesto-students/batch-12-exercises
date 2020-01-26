
function bind(fn, obj, ...params) {
  return fn.bind(obj, ...params);
}

export {
  bind,
};
