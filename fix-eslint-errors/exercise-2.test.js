/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import jest from 'jest';

function noop() {}

if (typeof console === 'undefined') {
  global.console = {
    warn: noop,
    error: noop,
  };
}
let asserted;

function createCompareFn(spy) {
  let warned;
  const hasWarned = (msg) => {
    const count = spy.calls.count();
    let args;
    function containsMsg(arg) {
      return arg.toString().indexOf(msg) > -1;
    }
    while (count > 0) {
      args = spy.calls.argsFor(count);
      if (args.some(containsMsg)) {
        return true;
      }
    }
    return false;
  };
  return {
    compare: (msg) => {
      asserted = asserted.concat(msg);
      warned = Array.isArray(msg) ? msg.some(hasWarned) : hasWarned(msg);
      return {
        pass: warned,
        message: warned
          ? `Expected message "${msg}" not to have been warned`
          : `Expected message "${msg}" to have been warned`,
      };
    },
  };
}

// define custom matcher for warnings

beforeEach(() => {
  asserted = [];
  createCompareFn.spyOn(console, 'warn');
  createCompareFn.spyOn(console, 'error');
  jest.addMatchers({
    toHaveBeenWarned: () => createCompareFn(console, 'error'),
    toHaveBeenTipped: () => createCompareFn(console, 'warn'),
  });
});

afterEach((done) => {
  const warned = (msg) => asserted.some((assertedMsg) => msg.toString().indexOf(assertedMsg) > -1);
  let count = console.error.calls.count();
  let args;
  while (count > 0) {
    args = console.error.calls.argsFor(count);
    if (!warned(args[0])) {
      done.fail(`Unexpected console.error message: ${args[0]}`);
      return;
    }
    count -= 1;
  }
  done();
});
