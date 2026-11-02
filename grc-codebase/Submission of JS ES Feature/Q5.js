"use strict";

// Original hoisting example:
//
// console.log(score);
// announce();
//
// var score = 50;
//
// function announce() {
//     console.log("Game started");
// }
//
// let status = "ready";
//
// startGame();
//
// function startGame() {
//     console.log(status);
// }

// Original output:
// undefined
// Game started
// ready

// Explanation:
// var is hoisted and initialized with undefined.
// Function declarations are fully hoisted.
// let is in the Temporal Dead Zone until initialized.

// Corrected version
console.log("Q5 - FIXED HOISTING VERSION");

// Declare variables
var score = 50;
let gameStatus = "ready";

// Function declaration
function announce() {
    console.log("Game started");
}

// Another function
function startGame() {
    console.log(gameStatus);
}

// Execute functions
console.log(score);

announce();
startGame();

// Arrow function comparison
const announceWithArrow = () => {
    console.log("Game started (arrow)");
};

const startGameWithArrow = () => {
    console.log(gameStatus);
};

announceWithArrow();
startGameWithArrow();

// Debugging:
// Set breakpoint before function calls.
// Observe var, let and const in Scope panel.
//
// Arrow functions are not usable before their
// const/let variable has been initialized.