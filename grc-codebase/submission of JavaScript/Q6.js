// Declare purchase amount
let totalAmount = 12000;
let discount = 0;

// Calculate discount based on purchase amount
if (totalAmount >= 10000) {
    discount = 25;
}
else if (totalAmount >= 5000) {
    discount = 15;
}
else if (totalAmount >= 2000) {
    discount = 5;
}

// Calculate discount amount
let discountAmount = (totalAmount * discount) / 100;

// Calculate final price
let finalPrice = Math.round(totalAmount - discountAmount);

// Display results
console.log("Original Total: ₹" + totalAmount);
console.log("Discount: " + discount + "%");
console.log("Final Price: ₹" + finalPrice);