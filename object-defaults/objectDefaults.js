
function objectDefaults(obj, defaultobj) {
  Object.assign(defaultobj, obj);
  return defaultobj;
}

export {
  objectDefaults,
};
