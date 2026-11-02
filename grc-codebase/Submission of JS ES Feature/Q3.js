"use strict";

// Transaction records
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays for valid and invalid transactions
const validTransactions = [];
const invalidTransactions = [];

// Custom error classes
class NullTransactionError extends Error {
    constructor(message) {
        super(message);
        this.name = "NullTransactionError";
    }
}

class MissingTransactionFieldError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingTransactionFieldError";
    }
}

class NegativeAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeAmountError";
    }
}

console.log("Q3 - TRANSACTION VALIDATOR");

// Check each transaction
for (const transaction of transactions) {

    try {

        // Check null entries
        if (transaction === null || transaction === undefined) {
            throw new NullTransactionError(
                "Transaction entry is null"
            );
        }

        // Check missing fields
        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new MissingTransactionFieldError(
                "Missing transaction id or amount"
            );
        }

        // Check negative amount
        if (transaction.amount < 0) {
            throw new NegativeAmountError(
                "Transaction amount is negative"
            );
        }

        // Store valid transaction
        validTransactions.push(transaction);

        console.log(
            `VALID: id=${transaction.id}, amount=₹${transaction.amount}`
        );

    } catch (error) {

        // Store invalid transaction and error category
        invalidTransactions.push({
            transaction: transaction,
            category: error.name,
            message: error.message
        });

        console.log(
            `INVALID [${error.name}]: ${error.message}`
        );
    }
}

// Display final report
console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);

console.log("Successful:", validTransactions.length);
console.log("Failed:", invalidTransactions.length);

// Debugging:
// Set breakpoint on the for loop.
// Watch transaction, validTransactions and invalidTransactions.