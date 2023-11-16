const User = require("./User");
const Loan = require("./entities/Loan");

module.exports = class App {
   static #allUsers = [];

   static findUser(_email) {
      return App.#allUsers.find((u) => u.email === _email);
   }
   static createUser(_fullname, _email, _password, _numAccount) {
      const userExists = App.findUser(_email);
      if (!userExists) {
         const user = new User(_fullname, _email, _numAccount, _password);
         App.#allUsers.push(user);
      } else {
         console.log("Email já utilizado! tente outro email. . .");
      }
   }

   static deposit(_emailUser, _amount) {
      this.findUser(_emailUser)?.account.newDeposit(_amount);
   }

   static takeLoan(_emailUser, _amountLoan, _numInstallments) {
      this.findUser(_emailUser)?.account.newLoan(_amountLoan, _numInstallments);
   }

   static transfer(_emailUserSender, _userRecipent, _amount) {
      const user = this.findUser(_emailUserSender);
      user?.account.newTransfer(user, _userRecipent, _amount);
   }
   static changeRate(_newRate) {
      Loan.newInterestRate = _newRate;
   }
};
