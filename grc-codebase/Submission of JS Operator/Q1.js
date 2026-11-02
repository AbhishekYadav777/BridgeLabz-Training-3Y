// Global variable
let bonus = 5000;

// Function to calculate salary
function calculateSalary(isPermanent) {

    // Local variable
    let salary = 40000;

    // Add bonus only if employee is permanent
    if (isPermanent === true) {
        salary += bonus;
    }

    // Display total salary
    console.log(`Total Salary: ₹${salary}`);
}

// Test with different values
calculateSalary(true);
calculateSalary(false);

// Global bonus remains unchanged
console.log("Global Bonus:", bonus);