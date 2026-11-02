"use strict";

// Mixed API data
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays for valid and invalid values
const validNumbers = [];
const invalidValues = [];

console.log("Q1 - DYNAMIC DATA PARSER");

// Process each value
for (let index = 0; index < apiData.length; index++) {

    const originalValue = apiData[index];

    // Convert into different data types
    const numericValue = Number(originalValue);
    const booleanValue = Boolean(originalValue);
    const stringValue = String(originalValue);

    // Check blank strings separately
    const isBlankString =
        typeof originalValue === "string" &&
        originalValue.trim() === "";

    // Validate numeric value
    const isValidNumber =
        !Number.isNaN(numericValue) && !isBlankString;

    // Display conversion report
    console.log(
        `Entry ${index + 1}: original=${stringValue}, number=${numericValue}, boolean=${booleanValue}, string="${stringValue}"`
    );

    if (isValidNumber) {
        validNumbers.push(numericValue);
    } else {
        invalidValues.push(originalValue);
        console.log(`INVALID: ${stringValue}`);
    }
}

// Display final report
console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Values:", invalidValues);

console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidValues.length);

// Note:
// Number(null) = 0
// Number(undefined) = NaN
// Number(" ") = 0, but blank strings are treated as invalid.