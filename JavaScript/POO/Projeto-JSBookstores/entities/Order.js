module.exports = class Order {
   #total;
   #items;
   #user;

   constructor(items, user) {
      items.forEach(({ product, quantity }) => {
         if (quantity > product.inStock) {
            throw console.log(`Quantidade de ${product.name} insuficientes!`);
         }
      });
      this.#items = items;
      this.#user = user;
      this.#total = items.reduce((_sum, { product, quantity }) => _sum + product.price * quantity, 0);
   }

   get data() {
      return {
         items: this.#items,
         total: this.#total,
         user: this.#user,
      };
   }
};
