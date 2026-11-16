function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype method
Product.prototype.applyDiscount = function(percent) {
    return this.price - (this.price * percent / 100);
};

// Creating products
let p1 = new Product("Laptop", 50000);
let p2 = new Product("Mobile", 20000);
let p3 = new Product("Headphones", 5000);

// Applying discounts
console.log(p1.name, p1.applyDiscount(10));
console.log(p2.name, p2.applyDiscount(20));
console.log(p3.name, p3.applyDiscount(15));