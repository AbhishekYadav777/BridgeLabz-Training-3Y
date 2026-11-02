"use strict";

// -------------------------------
// PART 1: Nested Callbacks
// -------------------------------

function design(callback) {

    setTimeout(() => {

        console.log("Design completed");

        callback();

    }, 1000);
}

function build(callback) {

    setTimeout(() => {

        console.log("Build completed");

        callback();

    }, 1000);
}

function test(callback) {

    setTimeout(() => {

        console.log("Testing completed");

        callback();

    }, 1000);
}

function deploy(callback) {

    setTimeout(() => {

        console.log("Deployment completed");

        callback();

    }, 1000);
}

function celebrate(callback) {

    setTimeout(() => {

        console.log("Celebration started");

        callback();

    }, 1000);
}

// Nested callback execution
console.log("Callback Hell Started");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {
                    console.log("Project completed!");
                });
            });
        });
    });
});


// -------------------------------
// PART 2: Async/Await
// -------------------------------

// Reusable asynchronous stage
function runStage(stageName) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log(`${stageName} completed`);

            resolve();

        }, 1000);
    });
}

// Execute stages sequentially
async function runPipeline() {

    console.log("Async/Await Pipeline Started");

    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate");

    console.log("Project completed!");
}

// Start async pipeline separately
setTimeout(() => {
    runPipeline();
}, 5500);