"use strict";

// Create Product class
class Product {

    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount to product
    applyDiscount(discountPercent) {
        this.price -= this.price * discountPercent / 100;
    }

    // Display product details
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

// Create product objects
const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 800, "Accessories"),
    new Product(3, "Keyboard", 1500, "Accessories"),
    new Product(4, "Mobile", 20000, "Electronics")
];

// Apply 10% discount to first product
products[0].applyDiscount(10);

// Filter products with price greater than 1000
const expensiveProducts = products.filter(
    product => product.price > 1000
);

// Display products
console.log("E-Commerce Product List");

expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});