const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");

module.exports = class Account {
   #balanceBank = 0;

   get balanceBank() {
      return this.#balanceBank;
   }
   constructor(nameHolder, numAccount, password) {
      this.nameHolder = nameHolder;
      this.numAccount = numAccount;
      this.password = password;

      this.deposits = [];
      this.transfers = [];
      this.loans = [];
   }

   newDeposit(_amount) {
      this.#balanceBank += _amount;
      this.deposits.push(new Deposit(_amount));
   }

   newLoan(_amountLoan, _numInstallments) {
      this.#balanceBank += _amountLoan;
      this.loans.push(new Loan(_amountLoan, _numInstallments));
   }

   newTransfer(_userSender, _userRecipent, _amount) {
      if (_userRecipent.numAccount === _userSender.numAccount) {
         this.#balanceBank += _amount;
      } else {
         this.#balanceBank -= _amount;
      }
      this.transfers.push(new Transfer(_userSender, _userRecipent, _amount));
   }
};
