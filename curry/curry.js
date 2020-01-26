

function curry(funcToBeCurried) {
  return function curried(...args){
    if(args.length >= funcToBeCurried.length){
      return funcToBeCurried(...args)
    }else{
      return function(...args2){
        return curried(...args.concat(...args2));
      }
    }
  }
}

export {
  curry,
};
