"use strict";

console.log("Q10 - NESTED HOISTING AND CLOSURES");

// Outer function
function outer() {

    // count is hoisted but initialized with undefined
    console.log(
        "Outer count before assignment:",
        count
    );

    var count = 5;

    // Inner function
    function inner() {

        // Inner count is separately hoisted
        console.log(
            "Inner count before assignment:",
            count
        );

        // Local variable shadows outer count
        var count = 10;

        console.log(
            "Inner count after assignment:",
            count
        );
    }

    // Call inner function
    inner();

    console.log(
        "Outer count after inner():",
        count
    );
}

// Execute outer function
outer();

// Expected output:
//
// Outer count before assignment: undefined
// Inner count before assignment: undefined
// Inner count after assignment: 10
// Outer count after inner(): 5


// Arrow function comparison
function outerWithArrow() {

    var count = 5;

    // Arrow function uses lexical scope
    const innerArrow = () => {

        console.log(
            "Arrow reads outer count:",
            count
        );
    };

    innerArrow();
}

outerWithArrow();

// Output:
// Arrow reads outer count: 5

// Explanation:
// Outer and inner functions have separate scopes.
// Inner var count shadows outer count.
// Arrow function accesses outer count because
// it does not declare its own count variable.
//
// Debugging:
// Set breakpoint inside outer().
// Step into inner() using F11.
// Observe Call Stack and Local/Closure scopes.