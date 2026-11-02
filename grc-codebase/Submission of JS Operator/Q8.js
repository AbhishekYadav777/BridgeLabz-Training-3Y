// Shopping cart
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate original cart total
let totalCartValue = cart.reduce(
    (total, product) => total + product.price, 0
);

// Calculate discounts
let finalTotal = 0;

// Apply category-wise discounts
for (let product of cart) {

    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    }
    else if (product.category === "fashion") {
        discount = 5;
    }

    // Calculate discounted product price
    let discountedPrice = product.price -
        (product.price * discount / 100);

    finalTotal += discountedPrice;

    console.log(
        `${product.item}: ₹${discountedPrice.toFixed(2)}`
    );
}

// Apply additional 5% discount if original cart total > 50000
if (totalCartValue > 50000) {
    finalTotal -= finalTotal * 0.05;
}

// Display final report
console.log("Original Cart Value: ₹" + totalCartValue);
console.log("Final Cart Value: ₹" + finalTotal.toFixed(2));