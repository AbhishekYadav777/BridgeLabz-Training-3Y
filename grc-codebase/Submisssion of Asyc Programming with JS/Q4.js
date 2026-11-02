"use strict";

// Server A takes 2 seconds
function serverA() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.2) {
                reject("Server A failed!");
            } else {
                resolve("Server A completed deployment");
            }

        }, 2000);
    });
}

// Server B takes 3 seconds
function serverB() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.2) {
                reject("Server B failed!");
            } else {
                resolve("Server B completed deployment");
            }

        }, 3000);
    });
}

// Promise.all() waits for all servers
Promise.all([serverA(), serverB()])
    .then((results) => {

        console.log(results);
        console.log("Deployment completed for all servers");

    })
    .catch((error) => {

        console.log("Deployment Error:", error);

    });

// Promise.race() returns the first settled result
Promise.race([serverA(), serverB()])
    .then((result) => {

        console.log("Fastest response:", result);

    })
    .catch((error) => {

        console.log("Fastest response failed:", error);

    });