"use strict";

console.log("Start");

// Macrotask
setTimeout(() => {
    console.log("Timeout callback");
}, 0);

// Microtask
Promise.resolve().then(() => {
    console.log("Promise callback");
});

// Synchronous operation
console.log("Synchronous log");

console.log("End");

// Expected Output:
//
// Start
// Synchronous log
// End
// Promise callback
// Timeout callback

// Explanation:
// 1. Synchronous code executes first.
// 2. Promise.then() creates a microtask.
// 3. setTimeout() creates a macrotask.
// 4. After synchronous execution, JavaScript
//    processes microtasks before macrotasks.