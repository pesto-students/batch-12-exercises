
function memoize(fn) {
  const cache = {};
  // console.log(...args);
  return function(...args) {
    if (Object.keys(cache).includes(args.toString())) {
      return cache[args];
    } else {
      let response = fn(...args);
      cache[args] = response
      return response;
    }
  };
}

// export {
//   memoize,
// };

let called = 0;
const fib = memoize((n) => {
  called += 1;
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
});
fib(10);
console.log(called);