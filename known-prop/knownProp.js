

function knownProp(value) {
  const proxyValue = new Proxy(value, {
    get(target, key) {
      if (!Object.keys(target).includes(key)) {
        throw new TypeError('Unknown property'); 
      }
      return Reflect.get(target, key);
    }
  })
  return proxyValue;
}

export {
  knownProp,
};
