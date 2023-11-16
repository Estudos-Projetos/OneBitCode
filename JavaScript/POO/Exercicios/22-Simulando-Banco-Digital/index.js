const App = require("./App");

App.createUser("Isaac Pontes", "isaac@email.com");
App.createUser("Lucas Queiroga", "lucas@email.com");
App.createUser("Juliana Conde", "juliana@email.com");

App.deposit("isaac@email.com", 100);

App.transfer("isaac@email.com", "lucas@email.com", 20);

App.changeRate(10);
App.takeLoan("juliana@email.com", 2000, 24);

console.log(App.findUser("isaac@email.com"));
console.log(App.findUser("isaac@email.com").account);
console.log(App.findUser("lucas@email.com"));
console.log(App.findUser("lucas@email.com").account);
console.log(App.findUser("juliana@email.com"));
console.log(App.findUser("juliana@email.com").account);
console.log(App.findUser("juliana@email.com").account.loans[0].installments);
