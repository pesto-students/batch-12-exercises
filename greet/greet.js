
function greet(string) {
  const p = new Promise((res) => {
    res(`Hey ${string}`);
  });
  return p;
}

export {
  greet,
};
