"use strict";

// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Main function with callback parameter
function greetUser(name, callback) {

    console.log(`Hello ${name}`);

    // Execute callback function
    callback();
}

// Call function and pass callback
greetUser("Abhishek", showEndMessage);