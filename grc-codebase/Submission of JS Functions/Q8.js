"use strict";

// Add custom method to Array prototype
Array.prototype.myMap = function(callback) {

    // Create empty result array
    const result = [];

    // Loop through array elements
    for (let index = 0; index < this.length; index++) {

        // Apply callback to each element
        result.push(
            callback(this[index], index, this)
        );
    }

    // Return new array
    return result;
};

// Original array
const numbers = [1, 2, 3];

// Double each number
const doubledNumbers = numbers.myMap(
    number => number * 2
);

// Square each number
const squaredNumbers = numbers.myMap(
    number => number * number
);

// Display results
console.log("Original Array:", numbers);

console.log("Doubled Array:", doubledNumbers);

console.log("Squared Array:", squaredNumbers);