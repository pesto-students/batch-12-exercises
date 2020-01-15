
function bouncer(mixedArray) {
  var truthyArray = mixedArray.filter((value)=> Boolean(value))
  return truthyArray;
}

export {
  bouncer,
};
