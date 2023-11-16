module.exports = class Database {
   #storage = {
      authors: [],
      books: [],
      orders: [],
      posters: [],
      users: [],
   };

   find(key) {
      return this.#storage[key];
   }

   save_author(_author) {
      this.#storage.authors.push(_author);
   }
   remove_author(_authorName) {
      const indexAuthorRemoved = this.#storage.authors.findIndex((a) => a.name === _authorName);
      if (indexAuthorRemoved != -1) {
         this.#storage.authors.splice(indexAuthorRemoved, 1);
      }
   }

   find_book_by_name(_bookName) {
      return this.#storage.books.find((b) => b.name === _bookName);
   }
   save_book(_book) {
      const bookExists = this.find_book_by_name(_book.name);
      if (!bookExists) {
         this.#storage.books.push(_book);
      }
   }

   add_book_in_stock(_bookName, _quantity) {
      const book = this.find_book_by_name(_bookName);
      book?.add_in_stock(_quantity);
   }
   remove_book_from_stock(_bookName, _quantity) {
      const book = this.find_book_by_name(_bookName);
      book?.remove_from_stock(_quantity);
   }

   find_poster_by_name(_posterName) {
      return this.#storage.posters.find((p) => p.name === _posterName);
   }
   save_poster(_poster) {
      const posterExists = this.find_poster_by_name(_poster.name);
      if (!posterExists) {
         this.#storage.posters.push(_poster);
      }
   }

   add_poster_in_stock(_posterName, _quantity) {
      const poster = this.find_poster_by_name(_posterName);
      poster?.add_in_stock(_quantity);
   }
   remove_poster_from_stock(_posterName, _quantity) {
      const poster = this.find_poster_by_name(_posterName);
      poster?.remove_from_stock(_quantity);
   }

   save_user(_user) {
      const userExists = this.#storage.users.find((u) => u.email === _user.email);
      if (!userExists) {
         this.#storage.users.push(_user);
      }
   }
   save_order(_order) {
      this.#storage.orders.push(_order);
   }

   show_storage() {
      console.table(this.#storage.authors);
      console.table(this.#storage.books);
      console.table(this.#storage.posters);
      console.table(this.#storage.users);
      console.table(this.#storage.orders.map((order) => order.data));
   }
};
