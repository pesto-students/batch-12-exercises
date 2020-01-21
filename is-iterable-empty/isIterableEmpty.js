
function isIterableEmpty(maybeEmpty) {
  const iterator = maybeEmpty[Symbol.iterator]();
  const hasNextValue = iterator.next().value !== undefined;
  return !hasNextValue;
}

export {
  isIterableEmpty,
};
