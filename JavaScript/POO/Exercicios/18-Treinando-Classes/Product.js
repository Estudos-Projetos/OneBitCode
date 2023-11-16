class Product {
  constructor(_name, _description, _price, _inStock = 0) {
    this.name = _name;
    this.description = _description;
    this.price = _price;
    this.inStock = _inStock;
  }

  add_to_stock(_qntAdd) {
    this.inStock += _qntAdd;
  }
  calculate_discount(_qntDiscount) {
    this.price = this.price - this.price * (_qntDiscount / 100);

    return console.log(`Discounted price: ${this.price}`);
  }
}

const product1 = new Product("Sapato", "Linha: 34233, Nike", 345, 2);
product1.add_to_stock(4);
product1.calculate_discount(10);
console.log(product1);
