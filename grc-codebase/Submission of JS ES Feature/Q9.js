"use strict";

// Raw JSON data
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

// Arrays for valid and under-18 users
const cleanData = [];
const under18Users = [];

console.log("Q9 - JSON AUDIT");

// Process JSON entries
for (let index = 0; index < rawData.length; index++) {

    const lineNumber = index + 1;

    try {

        // Convert JSON string into object
        const parsedEntry = JSON.parse(rawData[index]);

        // Check required keys
        if (
            parsedEntry.user === undefined ||
            parsedEntry.age === undefined
        ) {
            throw new Error(
                "Missing required key: user or age"
            );
        }

        // Convert age into number
        const numericAge = Number(parsedEntry.age);

        // Validate age
        if (!Number.isFinite(numericAge)) {
            throw new TypeError("Age is not a valid number");
        }

        // Store clean data
        const cleanEntry = {
            ...parsedEntry,
            age: numericAge
        };

        cleanData.push(cleanEntry);

        // Filter under-18 users
        if (numericAge < 18) {
            under18Users.push(cleanEntry);
        }

        console.log(
            `Line ${lineNumber}: VALID - ${cleanEntry.user}, age ${numericAge}`
        );

    } catch (error) {

        console.log(
            `Line ${lineNumber}: ERROR [${error.name}] - ${error.message}`
        );

    }
}

// Display final results
console.log("Clean Data:", cleanData);

console.log("Under-18 Users:", under18Users);

// Debugging:
// Set breakpoint inside try and catch.
// Watch index, rawData[index], parsedEntry and error.
//
// JSON.parse() throws SyntaxError for invalid JSON.
// Execution moves directly to catch when an error occurs.