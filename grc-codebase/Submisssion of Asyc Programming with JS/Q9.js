"use strict";

// Predicted Output:
//
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

// Macrotask
setTimeout(() => {

    console.log("Timeout callback");

}, 0);

// Microtask
Promise.resolve().then(() => {

    console.log("Promise callback");

});

// Synchronous statement
console.log("Script end");

// Explanation:
//
// Step 1: Script start executes first.
// Step 2: setTimeout callback goes to task queue.
// Step 3: Promise callback goes to microtask queue.
// Step 4: Script end executes.
// Step 5: JavaScript processes microtasks.
// Step 6: JavaScript processes the timer callback.
//
// Therefore, Promise callback executes before
// Timeout callback.