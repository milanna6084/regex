export default class Validator {
  constructor(userName) {
    if (Validator.validateUsername(userName)) {
      this.userName = userName;
    } else {
      throw new Error('Invalid user name');
    }
  }

  static validateUsername(str) {
    const check1 = /^[a-z][\w-]*[a-z]$/i.test(str);
    const check2 = /\d{4,}/.test(str);

    return check1 && !check2;
  }

  static createUser(str) {
    return new Validator(str);
  }
}
