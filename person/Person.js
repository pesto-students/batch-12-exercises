class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const date = this.dateOfBirth;
    return date.split('/')
      .map((ele) => ele.length > 1 ? ele.split('') : ele)
      .reduce((acc, curr) => acc.concat(curr), [])
      .map((ele) => parseInt(ele, 10))
      .reduce((acc, curr) => acc + curr, 0);
  }
}

export {
  Person,
};
