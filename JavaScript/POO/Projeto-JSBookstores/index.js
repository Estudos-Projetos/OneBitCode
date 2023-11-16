const App = require("./App");

const app = new App();

app.create_author("J. R. R. Tolkien", "British", "...");
app.create_author("Rick Riordan", "American", "...");

const authors = app.get_authors();

app.create_book("O Hobbit", "...", "fantasy", 300, authors[0], "...", 19.99, 100);
app.create_book("A Sociedade do Anel", "...", "fantasy", 400, authors[0], "...", 24.99, 100);
app.create_book("O Ladrão de Raios", "...", "fantasy", 500, authors[1], "...", 24.99, 100);
app.create_book("A Pirâmide Vermelha", "...", "fantasy", 600, authors[1], "...", 24.99, 100);

const books = app.get_books();

app.create_user("Isaac", "isaac@email.com", "123456");

const users = app.get_users();

app.show_database();

const items = [
   {
      product: books[0],
      quantity: 2,
   },
   {
      product: books[1],
      quantity: 1,
   },
   {
      product: books[3],
      quantity: 1,
   },
];

app.create_order(items, users[0]);

app.show_database();
