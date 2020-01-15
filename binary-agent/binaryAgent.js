
function getStringFromBinary(binaryString){
  return binaryString.split(' ').map((binaryValue)=>String.fromCharCode(parseInt(binaryValue, 2))).join('');
}

function binaryAgent(binaryString) {
  return getStringFromBinary(binaryString);
}

export {
  binaryAgent,
};
