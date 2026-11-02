"use strict";

// Function to simulate boiling water
function boilWater() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Simulate random failure
            if (Math.random() < 0.2) {
                reject("Water boiling failed!");
            } else {
                console.log("Water boiled successfully!");
                resolve();
            }

        }, 1500);
    });
}

// Function to brew coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.2) {
                reject("Coffee brewing failed!");
            } else {
                console.log("Coffee brewed successfully!");
                resolve();
            }

        }, 1500);
    });
}

// Function to pour coffee
function pourCoffee() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.2) {
                reject("Pouring coffee failed!");
            } else {
                console.log("Coffee poured into cup!");
                resolve();
            }

        }, 1500);
    });
}

// Execute asynchronous coffee process
boilWater()
    .then(() => {
        return brewCoffee();
    })
    .then(() => {
        return pourCoffee();
    })
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Error:", error);
    });