
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const charArray = this.dateOfBirth.split('');
    const digitArray = charArray.filter((char) => char !== '/').map((char) => Number(char));
    const sum = digitArray.reduce((a, b) => a + b, 0);
    return sum;
  }
}

export {
  Person,
};
