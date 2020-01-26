
var isDigit = (digit) => !isNaN(digit);

class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const digits = this.dateOfBirth.split('').filter(isDigit);
    const sum = digits.reduce((total, digit) => total += parseInt(digit), 0);
    return sum;
  };
}

export {
  Person,
};
