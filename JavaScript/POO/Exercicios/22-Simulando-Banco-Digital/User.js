const Account = require("./entities/Account");

module.exports = class User {
   constructor(fullname, email, numAccount, password) {
      this.fullname = fullname;
      this.email = email;
      this.account = new Account(fullname, numAccount, password);
   }
};
