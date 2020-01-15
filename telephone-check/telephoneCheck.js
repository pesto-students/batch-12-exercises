
function telephoneCheck(phoneNumber) {
  let usaNumberPattern = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
  return usaNumberPattern.test(phoneNumber);
}

export {
  telephoneCheck,
};
