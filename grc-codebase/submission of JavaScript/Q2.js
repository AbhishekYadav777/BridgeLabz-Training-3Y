// Declare variables of different data types
let userName = "Abhishek";
let age = 21;
let isStudent = true;
let subjects = ["Java", "Python", "JavaScript"];
let student = { name: "Abhishek", age: 21 };
let address = null;
let result;

// Create a formatted data report
let report = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "Array" : typeof subjects },
    { Label: "Student Object", Value: JSON.stringify(student), Type: typeof student },
    { Label: "Address", Value: address, Type: "null" },
    { Label: "Result", Value: result, Type: typeof result }
];

// Display report
console.table(report);