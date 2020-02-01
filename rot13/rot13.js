
function rot13(inputString) {
  var output = '';
  for (var i = 0; i < inputString.length; i++) {
    var character = inputString[i];
    if (character.match(/[a-z]/i)) {
      var code = inputString.charCodeAt(i);
      if ((code >= 65) && (code <= 90)) {
        character = String.fromCharCode(((code - 65 + 13) % 26) + 65);
      }
    }
    output += character;
  }
  return output;
}

export {
  rot13,
};
