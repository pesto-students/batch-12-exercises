
const counter = () => {
  let c = 0;
  // eslint-disable-next-line
  return () => ++c;
};


export {
  counter,
};
