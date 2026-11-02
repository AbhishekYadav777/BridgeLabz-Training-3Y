// Create empty arrays
let numbers = [];
let results = [];

// Store numbers from 1 to 30
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Analyze each number
for (let number of numbers) {

    if (number % 3 === 0 && number % 5 === 0) {
        results.push(`${number} - FizzBuzz`);
    }
    else if (number % 2 === 0) {
        results.push(`${number} - Even`);
    }
    else {
        results.push(`${number} - Odd`);
    }
}

// Display results
console.log("Odd-Even Number Analysis");
console.table(results);