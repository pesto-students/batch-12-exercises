
function rotatedString(string, maybeRotated) {
  if (string === maybeRotated) {
    return false;
  }
  const doubleString = string + string;
  return doubleString.includes(maybeRotated);
}

export {
  rotatedString,
};
