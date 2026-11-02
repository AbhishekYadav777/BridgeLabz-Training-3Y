"use strict";

// Take input from Node.js command line.
// Default value is 5.
const requestedRows =
    (typeof process !== "undefined" && process.argv)
        ? Number(process.argv[2])
        : NaN;

const rowLimit =
    Number.isInteger(requestedRows) && requestedRows > 0
        ? requestedRows
        : 5;

console.log(`Q6 - PYRAMID PATTERN (${rowLimit} rows)`);

// Outer loop controls rows
for (let row = 1; row <= rowLimit; row++) {

    let pattern = "";

    // Inner loop prints stars
    for (let column = 1; column <= row; column++) {

        pattern += "* ";
    }

    console.log(pattern.trimEnd());
}

// Output for default value:
//
// *
// * *
// * * *
// * * * *
// * * * * *

// Debugging:
// Watch row, column and pattern.
//
// Replace let with var to observe scope differences.
// Output remains the same in this synchronous example.
// var is function-scoped.
// let is block-scoped.
//
// Strict mode catches undeclared variables.
// Example:
// for (i = 1; i <= rowLimit; i++)
// This throws ReferenceError.