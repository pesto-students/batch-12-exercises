

function alienAlphabet(words) {
  var chars = words.join('').split('');
  var charKey = [];
  for (var index = 0; index < chars.length; index += 1) {
    if (!charKey.includes(chars[index])) {
      charKey.push(chars[index]);
    }
  }
  return charKey;
}

export {
  alienAlphabet,
};
