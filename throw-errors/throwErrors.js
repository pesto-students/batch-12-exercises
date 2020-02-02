
function throwErrors() {
  try {
    throw new ReferenceError('Hello', 'someFile.js', 10);
  } catch (e) {
    return e;
  }
}

const errorName = throwErrors().name;

export { errorName };
