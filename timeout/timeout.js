
function timeout(name) {
  const p = new Promise((res, rej) => {
    if (!name) {
      rej(new Error('no input given'));
    }
    setTimeout(() => res(`Hello ${name}`), 300);
  });
  return p;
}

export {
  timeout,
};
