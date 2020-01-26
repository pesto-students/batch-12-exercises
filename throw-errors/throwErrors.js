
function throwErrors() {
  try {
    throw new ReferenceError('Hello', 'someFile.js', 10);
  } catch (e) {
    return e;
  }
  // throw new ReferenceError('error');
}
// console.log(throwErrors() instanceof ReferenceError);
const errorName = throwErrors().name;

export { errorName };
