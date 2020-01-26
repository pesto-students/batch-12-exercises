
function SavingsAccount(accountNumber,emailAdd,firstName,lastName){
  if (accountNumber.length !== 6) {
    throw new Error('Account Number must be a 6-digit number');
  }

  const emailPattern = /\S+@\S+.\S+/gi;
  if (!(emailPattern.test(emailAdd))) {
    throw new Error('Invalid e-mail');
  }

  if (firstName.length < 3 || firstName.length > 20) {
    throw new Error('First name must be between 3 and 20 characters long');
  }

  const alphabetPattern = /^[a-zA-Z]+$/gi;
  if (!alphabetPattern.test(lastName)) throw new Error('Last name must contain english alphabets only');

  this._accountNumber = accountNumber;
  this._email = emailAdd;
  this._firstName = firstName;
  this._lastName = lastName;
  this.products = [];
}

export {
  SavingsAccount,
};
