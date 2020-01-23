// TODO : Refactor this code.
const hasProperty = (target, key) => Object.prototype.hasOwnProperty.call(target, key);
const handler = {
  get: (target, key) => {
    if (hasProperty(target, key)) {
      throw new TypeError(`Unknown property: ${key}`);
    } else {
      return Reflect.get(target, key);
    }
  },
};

const knownProp = (target) => (new Proxy(target, handler));

export {
  knownProp,
};
