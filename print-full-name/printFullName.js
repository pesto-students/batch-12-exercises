
function printFullName(nameObject) {
  const {
    first: firstname,
    last: lastname,
  } = nameObject;
  return `My name is ${firstname} ${lastname}`;
}

export {
  printFullName,
};
