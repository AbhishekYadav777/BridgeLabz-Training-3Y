"use strict";

// Original code:
//
// function demo(a, a) {
//     total = 10;
//     delete total;
// }
//
// demo(5, 10);

// Strict mode errors:
// 1. Duplicate parameters are not allowed.
// 2. Undeclared variable assignment is not allowed.
// 3. Deleting an unqualified variable is not allowed.

// Correct ES6 version
function demo(firstValue, secondValue) {

    // Declare variable properly
    let total = 10;

    console.log(
        `First=${firstValue}, Second=${secondValue}, Total=${total}`
    );

    // Delete object property instead of local variable
    const record = {
        total: total
    };

    delete record.total;

    console.log(
        "After deleting object property:",
        record
    );
}

// Function call
demo(5, 10);

