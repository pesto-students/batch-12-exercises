

function curry(func) {
  return function curried(...args){
    if(args.length >= func.length){
      return func.call(null,...args)
    }else{
      return function(...args2){
        return curried.call(null, ...args.concat(...args2));
      }
    }
  }
}

export {
  curry,
};
