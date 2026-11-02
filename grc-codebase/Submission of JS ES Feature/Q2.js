"use strict";

// Employee details
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("Q2 - EMPLOYEE BONUS CALCULATOR");

// Process employee records
for (const employee of employees) {

    try {

        // Validate employee properties
        if (
            !employee ||
            employee.name === undefined ||
            employee.salary === undefined ||
            employee.years === undefined
        ) {
            throw new Error("Missing employee property");
        }

        // Convert string values into numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        // Validate converted values
        if (
            !Number.isFinite(salary) ||
            !Number.isFinite(years)
        ) {
            throw new TypeError("Invalid salary or experience");
        }

        // Calculate bonus
        const bonus = years > 3
            ? salary * 0.10
            : salary * 0.05;

        // Calculate total salary
        const totalPay = salary + bonus;

        // Display employee details
        console.log(
            `${employee.name}: Salary=₹${salary.toFixed(2)}, Experience=${years} years, Bonus=₹${bonus.toFixed(2)}, Total=₹${totalPay.toFixed(2)}`
        );

    } catch (error) {

        console.log("ERROR:", error.message);

    }
}

// Strict mode prevents accidental global variables.