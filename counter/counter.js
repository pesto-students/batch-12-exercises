
function counter() {
  let counterVariable = 0;
  return () => {
    counterVariable++;
    return counterVariable;
  }
}

export {
  counter,
};
