
const counter = () => {
  let currentCounter = 0;
  return () => {
    currentCounter += 1;
    return currentCounter;
  };
};


export {
  counter,
};
