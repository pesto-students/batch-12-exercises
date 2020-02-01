
function binaryAgent(binaryString) {
  var outputString = '';

  binaryString.split(' ').map(function (binary) {
    outputString += String.fromCharCode(parseInt(binary, 2));
  });
  return outputString;
}

export {
  binaryAgent,
};
