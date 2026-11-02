"use strict";

// Available operations
const operations = [
    "add",
    "divide",
    "power",
    "root",
    "subtract"
];

// Input numbers
const num1 = 25;
const num2 = 0;

// Custom error class
class InvalidOperationError extends Error {}

// Calculator function
function calculate(operation, firstNumber, secondNumber) {

    switch (operation) {

        case "add":
            return firstNumber + secondNumber;

        case "divide":

            if (secondNumber === 0) {
                throw new RangeError("Cannot divide by zero");
            }

            return firstNumber / secondNumber;

        case "power":
            return Math.pow(firstNumber, secondNumber);

        case "root":

            if (firstNumber < 0) {
                throw new RangeError(
                    "Cannot calculate square root of negative number"
                );
            }

            return Math.sqrt(firstNumber);

        case "subtract":
            return firstNumber - secondNumber;

        default:
            throw new InvalidOperationError(
                `Unknown operation: ${operation}`
            );
    }
}

console.log("Q7 - SMART CALCULATOR");

// Execute all operations
for (const operation of operations) {

    try {

        const result = calculate(
            operation,
            num1,
            num2
        );

        console.log(
            `${operation.toUpperCase()}: ${result}`
        );

    } catch (error) {

        console.log(
            `${operation.toUpperCase()} ERROR [${error.name}]: ${error.message}`
        );

    }
}

// Division by zero generates an error.
// Root of 25 returns 5.