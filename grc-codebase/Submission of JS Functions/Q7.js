"use strict";

// Outer function
function makeMultiplier(multiplier) {

    // Inner function
    function multiply(number) {

        return number * multiplier;
    }

    // Return inner function
    return multiply;
}

// Create multiplier functions
const triple = makeMultiplier(3);

const double = makeMultiplier(2);

const quadruple = makeMultiplier(4);

// Execute functions
console.log("Triple:", triple(5));

console.log("Double:", double(5));

console.log("Quadruple:", quadruple(5));