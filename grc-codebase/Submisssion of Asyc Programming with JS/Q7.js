"use strict";

// Load profile
function loadProfile() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.3) {
                reject("Profile loading failed");
            } else {
                resolve("Profile Loaded");
            }

        }, 2000);
    });
}

// Load posts
function loadPosts() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.3) {
                reject("Posts loading failed");
            } else {
                resolve("Posts Loaded");
            }

        }, 1500);
    });
}

// Load messages
function loadMessages() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.3) {
                reject("Messages loading failed");
            } else {
                resolve("Messages Loaded");
            }

        }, 1000);
    });
}

// Execute all modules
async function loadDashboard() {

    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    const endTime = Date.now();

    console.log("Dashboard Loading Report:");

    // Display results
    results.forEach((result, index) => {

        const modules = [
            "Profile",
            "Posts",
            "Messages"
        ];

        if (result.status === "fulfilled") {

            console.log(
                `${modules[index]}: SUCCESS - ${result.value}`
            );

        } else {

            console.log(
                `${modules[index]}: FAILED - ${result.reason}`
            );
        }
    });

    // Calculate total execution time
    console.log(
        "Total Time:",
        (endTime - startTime) / 1000,
        "seconds"
    );
}

// Execute dashboard
loadDashboard();