
function greet(name) {
  const p = new Promise((res, rej) => {
    if (typeof name !== 'string') {
      rej(new Error('No Name Provided'));
    }
    res(`Hey ${name}`);
  });
  return p;
}

export {
  greet,
};
