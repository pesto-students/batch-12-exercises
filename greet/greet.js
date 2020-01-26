
function greet(name) {
  const greetPromise = Promise.resolve(`Hey ${name}`);
  return greetPromise;
}

export {
  greet,
};
