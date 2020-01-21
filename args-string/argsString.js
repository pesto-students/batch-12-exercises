
const replaceFunction = (toReplace) => (str,replacement) => str.replace(toReplace,replacement);
const replaceBrackets = replaceFunction("{}");

function argsString(string, replacements) {
  return replacements.reduce(replaceBrackets,string)
}

export {
  argsString,
};
