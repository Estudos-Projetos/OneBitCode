module.exports = class Installment {
   constructor(amountInstallment, numberInstallment) {
      this.amountInstallment = amountInstallment;
      this.numberInstallment = numberInstallment;
      this.status = "pending";
   }
   pay() {
      this.status = "paid";
   }
};
