"use strict";

// Promise-based bug fetching function
function getBugs() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Simulate random API failure
            const apiFailed = Math.random() < 0.3;

            if (apiFailed) {

                reject("Bug API request failed!");

            } else {

                const bugs = [
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ];

                resolve(bugs);
            }

        }, 1000);
    });
}

// Fetch bugs
getBugs()
    .then((bugs) => {

        console.log("Bug Report:");

        // Display bugs in table
        console.table(bugs.map((bug, index) => ({
            ID: index + 1,
            Bug: bug
        })));

    })
    .catch((error) => {

        console.log("Error:", error);

    });