
class SavingsAccount {
  constructor(accountno, email, firstname, lastname) {
    this._accountNumber = accountno;
    this._email = email;
    this._firstName = firstname;
    this._lastName = lastname;
    this.products = [];
  }

  get accountNumber() {
    if (this._accountNumber.length < 6) {
      throw new Error("Account Number must be a 6-digit number");
    }
    return this._accountNumber;
  }

  set accountNumber(accountno) {
    if (accountno.length < 6) {
      throw new Error("Account Number must be a 6-digit number");
    }
    this._accountNumber = accountno;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }

  get firstname() {
    return this._firstName;
  }

  set firstname(firstname) {
    this._firstName = firstname;
  }

  get lastname() {
    return this._lastName;
  }

  set lastname(lastname) {
    this._lastName = lastname;
  }
}

export {
  SavingsAccount,
};

// const actualAccount = new SavingsAccount('123456', 'kohli@gmail.com', 'Virat', 'Kohli');