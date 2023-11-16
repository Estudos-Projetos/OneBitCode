module.exports = class Product {
  constructor(name, description, price, inStock = 0) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = inStock;
  }

  add_in_stock(_quantity) {
    this.inStock += _quantity;
  }

  remove_from_stock(_quantity) {
    this.inStock -= _quantity;
  }
};
