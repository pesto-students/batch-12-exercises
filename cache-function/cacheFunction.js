
function cacheFunction(funcToCache) {
  var memoOfComputation = {};
  const cachingFunction = function(paramter){
    var result;
    if(!memoOfComputation.hasOwnProperty(paramter)){
      result = funcToCache(paramter);
      memoOfComputation[paramter] = result;
    }else{
      result = memoOfComputation[paramter];
    }
    return result;
  }
  return cachingFunction;
}

export {
  cacheFunction,
};
