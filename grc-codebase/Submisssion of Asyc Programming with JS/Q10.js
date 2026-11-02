"use strict";

// Reusable function for delivery steps
function deliveryStep(stepName, successMessage) {

    return new Promise((resolve, reject) => {

        // Random delay between 1 and 2 seconds
        const delay = Math.floor(
            Math.random() * 1000
        ) + 1000;

        setTimeout(() => {

            // Random success or failure
            const isSuccessful = Math.random() >= 0.2;

            if (isSuccessful) {

                console.log(successMessage);

                resolve(stepName + " completed");

            } else {

                reject(stepName + " failed");
            }

        }, delay);
    });
}

// Step 1: Take order
function takeOrder() {

    return deliveryStep(
        "Order",
        "Step 1: Order taken"
    );
}

// Step 2: Prepare food
function prepare() {

    return deliveryStep(
        "Preparation",
        "Step 2: Food prepared"
    );
}

// Step 3: Pack food
function pack() {

    return deliveryStep(
        "Packing",
        "Step 3: Package ready"
    );
}

// Step 4: Dispatch order
function dispatch() {

    return deliveryStep(
        "Dispatch",
        "Step 4: Out for delivery"
    );
}

// Step 5: Deliver order
function deliver() {

    return deliveryStep(
        "Delivery",
        "Delivery completed!"
    );
}

// Main asynchronous pipeline
async function runPipeline() {

    console.log("Start Pipeline");

    try {

        // Execute steps sequentially
        await takeOrder();

        await prepare();

        await pack();

        await dispatch();

        await deliver();

        console.log("All delivery steps completed successfully!");

    } catch (error) {

        // Handle failure at any step
        console.log("Pipeline failed!");

        console.log("Error:", error);
    }
}

// Start delivery process
runPipeline();



// 7. If any step rejects, control moves to catch.