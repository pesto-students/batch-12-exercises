
function abbreviateString(string) {
  if ((typeof string) === 'String') {
    throw new Error(`Received ${string} of type ${typeof string}. Expected a string.`);
  }
  const words = string.split(' ');
  const firstWord = words[0];
  const acronym = words[words.length - 1][0];

  if (words.length > 1) {
    return `${firstWord} ${acronym.toUpperCase()}.`;
  }
  return string;
}

export {
  abbreviateString,
};
