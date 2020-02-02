
function abbreviateString(fullname) {
  const nameArray = fullname.split(' ');
  const firstName = nameArray[0];
  const lastNameSig = nameArray[nameArray.length - 1][0].toUpperCase();
  return `${firstName} ${lastNameSig}.`;
}

export {
  abbreviateString,
};
