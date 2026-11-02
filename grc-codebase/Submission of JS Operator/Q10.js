// Department names and performance scores
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Create result array
let employeeResults = [];

// Evaluate each department
for (let department of departments) {

    let departmentName = department[0];
    let score = department[1];
    let performance;

    // Check performance using nested if-else
    if (score >= 90) {
        performance = "Excellent";
    }
    else {
        if (score >= 75) {
            performance = "Good";
        }
        else {
            if (score >= 60) {
                performance = "Average";
            }
            else {
                performance = "Needs Improvement";
            }
        }
    }

    // Store result
    employeeResults.push({
        Department: departmentName,
        Score: score,
        Performance: performance
    });
}

// Display evaluation report
console.log("Departmental Performance Report");
console.table(employeeResults);