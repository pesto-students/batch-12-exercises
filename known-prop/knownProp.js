
function knownProp(target) {
  return new Proxy(target, {
    get(_, key) {
      if (Object.keys(target).includes(key)) {
        return Reflect.get(target, key);
      } else {
        const e = new TypeError('/Unknown property/');
        throw e;
      }
    },
  });
}

export {
  knownProp,
};
