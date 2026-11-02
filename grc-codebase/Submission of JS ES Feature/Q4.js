"use strict";

// Original faulty code:
//
// function showMessage() {
//     greeting = "Welcome";
//     console.log(greeting);
// }
//
// showMessage();

// Problem:
// greeting is not declared.
// Strict mode throws ReferenceError.

// Corrected code
function showMessage() {

    // Declare local variable
    let greeting = "Welcome";

    // Watch variable for debugging
    const watchGreeting = greeting;

    console.log(greeting);

    console.log("Watch Variable:", watchGreeting);
}

// Function call
showMessage();

// Explanation:
// let creates a local variable.
// Strict mode does not allow undeclared assignments.
// Add watchGreeting in VS Code Watch panel.