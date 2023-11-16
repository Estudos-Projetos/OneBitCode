const Deposit = require("./Deposit");
const Installment = require("./Installment");

module.exports = class Loan extends Deposit {
   static #interestRate = 10;

   static get interestRate() {
      return `${Loan.#interestRate}%`;
   }

   static set newInterestRate(_newRate) {
      Loan.#interestRate = _newRate;
   }
   constructor(amountLoan, numInstallments) {
      super(amountLoan);
      this.installments = [];
      const amountInstallment = amountLoan / numInstallments;
      for (let i = 1; i <= numInstallments; i++) {
         this.installments.push(new Installment(amountInstallment, i));
      }
   }
};
