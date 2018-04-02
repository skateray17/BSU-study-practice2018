class UserRegistration {
  constructor(cnf) {
    this.email = cnf.email;
    this.nickname = cnf.nickname;
    this.password = cnf.password;
    this.passwordConfirm = cnf.passwordConfirm;
  }
}

module.exports = UserRegistration;
