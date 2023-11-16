/* const areaEdit = document.querySelectorAll(".area-edit");
const areaDelete = document.querySelectorAll(".area-delete");
const allModals = document.querySelectorAll("dialog");

const btnDeletes = document.querySelectorAll(".btn-delete");
const btnEdits = document.querySelectorAll(".btn-edit");
const btnCancels = document.querySelectorAll("button.cancel");

btnEdits.forEach((button, index) => {
   button.addEventListener("click", () => {
      areaEdit[index].showModal();
   });
});

btnDeletes.forEach((button, index) => {
   button.addEventListener("click", () => {
      areaDelete[index].showModal();
   });
});

btnCancels.forEach((button, index) => {
   button.addEventListener("click", () => {
      allModals[index].close();
   });
});
 */
let transactions = [];
/* Criação de Elementos */
function createdTransactionConteiner(id) {
   const tr = document.createElement("tr");
   tr.classList.add("item-transaction");
   tr.id = `item-transaction-${id}`;

   return tr;
}

function createdTransactionName(name) {
   const td = document.createElement("td");
   td.classList.add("name");
   td.textContent = name;

   return td;
}

function createdTransactionAmount(amount, typeTransaction) {
   const td = document.createElement("td");
   td.classList.add("value");

   const formated = Intl.NumberFormat("pt-BR", {
      compactDisplay: "long",
      currency: "BRL",
      style: "currency",
   });

   const formatedAmount = formated.format(amount);

   if (typeTransaction === "cash-input") {
      td.classList.add("cash-input");
      td.textContent = `+ ${formatedAmount}`;
   } else if (typeTransaction === "cash-output") {
      td.classList.add("cash-output");
      td.textContent = `- ${formatedAmount}`;
   }
   return td;
}

function createdGrupActionsButton() {
   const tdConteiner = document.createElement("td");

   tdConteiner.classList.add("grup-btns");

   return tdConteiner;
}

function createdEditBtn(transaction) {
   const editBtn = document.createElement("button");
   editBtn.classList.add("btn-edit");
   editBtn.textContent = "Editar";

   editBtn.addEventListener("click", () => {
      document.querySelector("input#name-transaction").value = transaction.name;
      document.querySelector("input#value-transaction").value = transaction.amount;
      document.querySelector("input#id").value = transaction.id;
      document.querySelector("select#type-transaction").value = transaction.typeTransaction;
   });

   return editBtn;
}
function createdDeleteBtn(transaction) {
   const deleteBtn = document.createElement("button");
   deleteBtn.classList.add("btn-delete");
   deleteBtn.textContent = "Excluir";

   deleteBtn.addEventListener("click", async () => {
      await fetch(`http://localhost:3000/transactions/${transaction.id}`, { method: "DELETE" });
      document.parentElement.remove();
      const indexToRemoved = transactions.findIndex((t) => t.id === transaction.id);
      transactions.splice(indexToRemoved, 1);
      uptadeBalance();
   });

   return deleteBtn;
}

/* Renderizar Elementos */
function renderTransactions(transaction) {
   const conteiner = createdTransactionConteiner(transaction.id);
   const name = createdTransactionName(transaction.name);
   const amount = createdTransactionAmount(transaction.amount, transaction.typeTransaction);
   const editBtn = createdEditBtn(transaction);
   const deleteBtn = createdDeleteBtn(transaction);
   const grupBtns = createdGrupActionsButton();

   grupBtns.append(editBtn, deleteBtn);
   conteiner.append(amount, name, grupBtns);

   document.querySelector("tbody#history-list").append(conteiner);
}

/* Requisições e Atualização de dados */
function uptadeBalance() {
   const span = document.querySelector("span#balance-amount");
   const sumAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

   const formated = Intl.NumberFormat("pt-BR", {
      compactDisplay: "long",
      currency: "BRL",
      style: "currency",
   });

   span.textContent = formated.format(sumAmount);
}

async function fetchTransactions() {
   return await fetch("http://localhost:3000/transactions").then((res) => res.json());
}

async function setup() {
   const result = await fetchTransactions();
   transactions.push(...result);
   transactions.forEach(renderTransactions);
   uptadeBalance();
}

async function saveTransaction(ev) {
   ev.preventDefault();

   const id = document.querySelector("input#id").value;
   const name = document.querySelector("input#name-transaction").value;
   const amount = parseFloat(document.querySelector("input#value-transaction").value);
   const typeTransaction = document.querySelector("select#type-transaction").value;

   if (id) {
      const response = await fetch(`http://localhost:3000/transactions/${id}`, {
         method: "PUT",
         body: JSON.stringify({ name, amount, typeTransaction }),
         headers: {
            "Content-Type": "application/json",
         },
      });

      const transaction = await response.json();
      const indexToRemoved = transactions.findIndex((t) => t.id === id);
      transactions.splice(indexToRemoved, 1, transaction);
      document.querySelector(`#item-transaction-${id}`).remove();
      renderTransactions(transaction);
      // transactions.push(transaction);
   } else {
      const response = await fetch("http://localhost:3000/transactions", {
         method: "POST",
         body: JSON.stringify({ name, amount, typeTransaction }),
         headers: {
            "Content-Type": "application/json",
         },
      });

      const transaction = await response.json();
      transactions.push(transaction);
      renderTransactions(transaction);
   }

   ev.target.reset();
   uptadeBalance;
}

/* Chamadas Principais */
document.addEventListener("DOMContentLoaded", setup);
document.querySelector("#form-newTransaction").addEventListener("submit", saveTransaction);
