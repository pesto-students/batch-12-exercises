
const knownProp = (target) => new Proxy(target, {
  get(_, key) {
    if (key in target) {
      return Reflect.get(target, key);
    }
    const e = new TypeError('/Unknown property/');
    throw e;
  },
});

export {
  knownProp,
};
