// Declare current salary and annual increment
let currentSalary = 30000;
let incrementRate = 10;

// Store yearly salary records
let salaryReport = [];

// Calculate salary for 5 years
for (let year = 1; year <= 5; year++) {

    // Increase salary by 10%
    currentSalary += currentSalary * (incrementRate / 100);

    // Store formatted salary
    salaryReport.push({
        Year: year,
        Salary: Math.round(currentSalary)
    });
}

// Display salary projection
console.table(salaryReport);