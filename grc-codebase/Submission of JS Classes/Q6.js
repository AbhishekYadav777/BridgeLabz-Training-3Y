"use strict";

// Create Employee class
class Employee {

    constructor(id, name, department, salary) {

        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply bonus
    applyBonus(percent) {

        this.salary += this.salary * percent / 100;
    }
}

// Create 5 employee objects
const employees = [
    new Employee(1, "Amit", "HR", 30000),
    new Employee(2, "Sara", "IT", 45000),
    new Employee(3, "Rahul", "Finance", 35000),
    new Employee(4, "Kiran", "Sales", 40000),
    new Employee(5, "Neha", "IT", 50000)
];

// Apply 10% bonus to each employee
employees.forEach(employee => {
    employee.applyBonus(10);
});

// Display employee details
employees.forEach(employee => {

    console.log(
        `ID: ${employee.id}, Name: ${employee.name}, Department: ${employee.department}, Monthly Salary: ₹${employee.salary.toFixed(2)}, Annual Salary: ₹${employee.getAnnualSalary().toFixed(2)}`
    );
});

// Calculate total annual company payout
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

// Display total payout
console.log(
    "Total Annual Company Payout: ₹" +
    totalAnnualPayout.toFixed(2)
);