"use strict";

// Function accepting array and callback
function applyOperation(numbers, operation) {

    // Apply callback to every array element
    return numbers.map(operation);
}

// Original array
const numbers = [1, 2, 3, 4];

// Callback to double numbers
function double(number) {
    return number * 2;
}

// Callback to square numbers
function square(number) {
    return number * number;
}

// Execute operations
const doubledNumbers = applyOperation(numbers, double);

const squaredNumbers = applyOperation(numbers, square);

// Display results
console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);
console.log("Squared Array:", squaredNumbers);