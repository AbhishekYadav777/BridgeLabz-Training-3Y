"use strict";

// Create Cart class
class Cart {

    constructor() {
        this.items = [];
    }

    // Add item to cart
    addItem(name, price, quantity) {

        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    // Calculate total cart value
    getTotal() {

        return this.items.reduce(
            (total, item) =>
                total + item.price * item.quantity,
            0
        );
    }

    // Apply coupon discount
    applyCoupon(couponCode) {

        // Validate coupon format
        const couponRegex = /^(SAVE|DISC)(\d+)$/;

        const match = couponCode.match(couponRegex);

        if (!match) {
            console.log("Invalid Coupon Code!");
            return this.getTotal();
        }

        // Extract discount percentage
        const discountPercent = Number(match[2]);

        // Validate discount range
        if (discountPercent <= 0 || discountPercent > 100) {
            console.log("Invalid Discount Percentage!");
            return this.getTotal();
        }

        // Calculate discount
        const total = this.getTotal();

        const discountAmount =
            total * discountPercent / 100;

        const finalTotal = total - discountAmount;

        console.log("Coupon Applied:", couponCode);
        console.log("Discount:", discountPercent + "%");
        console.log("Discount Amount: ₹" + discountAmount.toFixed(2));

        return finalTotal;
    }

    // Display cart items
    displayCart() {

        console.log("Shopping Cart Items:");

        this.items.forEach(item => {

            console.log(
                `${item.name} | Price: ₹${item.price} | Quantity: ${item.quantity}`
            );
        });
    }
}

// Create cart object
const cart = new Cart();

// Add products
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 1000, 2);
cart.addItem("Keyboard", 2000, 1);

// Display cart
cart.displayCart();

// Calculate original total
const originalTotal = cart.getTotal();

console.log("Original Total: ₹" + originalTotal.toFixed(2));

// Apply coupon
const couponCode = "SAVE20";

const finalTotal = cart.applyCoupon(couponCode);

// Display final amount
console.log("Final Total: ₹" + finalTotal.toFixed(2));