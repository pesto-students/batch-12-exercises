
function bouncer(anyArray) {
  return anyArray.reduce((trueArray, currentValue) => {
    if (currentValue) {
      trueArray.push(currentValue);
    }
    return trueArray;
  }, []);
}

export {
  bouncer,
};
