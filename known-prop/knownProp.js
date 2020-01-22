
const knownProp = (target) => new Proxy(target, {
  get(_, key) {
    if (key in target) {
      return Reflect.get(target, key);
    }
    throw new TypeError('/Unknown property/');
  },
});

export {
  knownProp,
};
