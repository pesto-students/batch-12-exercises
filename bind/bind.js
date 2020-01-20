
const bind = (dynamicFunction, reference, ...args) => dynamicFunction.bind(reference, ...args);

export {
  bind,
};
