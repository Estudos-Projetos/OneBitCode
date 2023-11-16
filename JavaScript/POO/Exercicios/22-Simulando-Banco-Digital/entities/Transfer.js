const Deposit = require("./Deposit");

module.exports = class Transfer extends Deposit {
   constructor(userSender, userRecipent, amount) {
      super(amount);
      this.userSender = userSender;
      this.userRecipent = userRecipent;
   }
};
