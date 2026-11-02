// Declare monthly expenses
let expenses = {
    food: 5000,
    travel: 2000,
    rent: 8000,
    bills: 1500,
    leisure: 1000
};

// Calculate total expenses
let total = 0;

for (let category in expenses) {
    total += expenses[category];
}

// Calculate average expenses
let average = total / 5;

// Add 10% tax
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

// Display results
console.log("Monthly Expense Report");
console.log("Total Expenses: ₹" + total.toFixed(2));
console.log("Average Expenses: ₹" + average.toFixed(2));
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Amount: ₹" + finalAmount.toFixed(2));