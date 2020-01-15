
function binaryAgent(binarystring) {
  let binarylist = binarystring.split(' ');
  // eslint-disable-next-line max-len
  binarylist = binarylist.map((eachbinarystring) => String.fromCharCode(parseInt(eachbinarystring, 2)));
  return binarylist.join('');
}

export {
  binaryAgent,
};
