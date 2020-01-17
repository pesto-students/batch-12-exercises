
function counter() {
  var count = 0;
  const incrementCount = function(){
    count+=1;
    return count;
  }
  return incrementCount;
}

export {
  counter,
};
