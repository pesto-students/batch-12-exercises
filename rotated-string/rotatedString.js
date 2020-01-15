
function rotatedString(stringOne, stringTwo) {
  if (stringOne.length != stringTwo.length) return false;

  let clock_rot = ""
  let anticlock_rot = ""
  let l = stringTwo.length;

  anticlock_rot = (anticlock_rot + stringTwo.substring(l - 2, l) + stringTwo.substring(0, l - 2));

  clock_rot = clock_rot + stringTwo.substring(2) + stringTwo.substring(0, 2);

  return (stringOne == clock_rot || stringOne == anticlock_rot);
}

export {
  rotatedString,
};
