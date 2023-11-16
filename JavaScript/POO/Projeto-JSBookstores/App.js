const Database = require("./Database");
const Author = require("./entities/Author");
const Book = require("./entities/Book");
const Order = require("./entities/Order");
const Poster = require("./entities/Poster");
const User = require("./entities/User");

module.exports = class App {
   static #database = new Database();

   create_user(_name, _email, _password) {
      const user = new User(_name, _email, _password);
      App.#database.save_user(user);
   }
   get_users() {
      return App.#database.find("users");
   }

   create_author(_name, _nationality, _bio) {
      const author = new Author(_name, _nationality, _bio);
      App.#database.save_author(author);
   }
   get_authors() {
      return App.#database.find("authors");
   }

   create_book(_title, _synopsis, _genre, _pages, _author, _description, _price, _inStock = 0) {
      const book = new Book(_title, _synopsis, _genre, _pages, _author, _description, _price, _inStock);
      App.#database.save_book(book);
   }
   get_books() {
      return App.#database.find("books");
   }

   create_poster(_name, _description, _height, _wight, _price, _inStock = 0) {
      const poster = new Poster(_name, _description, _height, _wight, _price, _inStock);
      App.#database.save_poster(poster);
   }
   get_posters() {
      return App.#database.find("posters");
   }

   create_order(_items, _user) {
      const order = new Order(_items, _user);
      App.#database.save_order(order);
   }
   get_orders() {
      return App.#database.find("orders");
   }

   show_database() {
      App.#database.show_storage();
   }
};
