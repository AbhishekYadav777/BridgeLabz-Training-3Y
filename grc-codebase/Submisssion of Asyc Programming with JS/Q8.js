"use strict";

// Simulate order submission API
function submitOrder() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // 50% chance of failure
            const isSuccessful = Math.random() >= 0.5;

            if (isSuccessful) {

                resolve("Order submitted successfully");

            } else {

                reject("Order submission failed");
            }

        }, 1000);
    });
}

// Process order with retry mechanism
async function processOrder() {

    // Maximum 3 attempts
    const maximumAttempts = 3;

    for (
        let attempt = 1;
        attempt <= maximumAttempts;
        attempt++
    ) {

        try {

            // Wait for order submission
            const result = await submitOrder();

            console.log(`Attempt ${attempt}: Success`);

            console.log(result);

            return;

        } catch (error) {

            console.log(`Attempt ${attempt}: Failed`);

        }
    }

    // Throw error if all attempts fail
    throw new Error("Order could not be processed");
}

// Execute order processing
async function startOrder() {

    try {

        await processOrder();

        console.log("Order Process Completed");

    } catch (error) {

        console.log("Final Error:", error.message);

    }
}

// Start execution
startOrder();