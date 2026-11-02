"use strict";

// Parent class
class Person {

    constructor(name) {

        this.name = name;
    }

    // Parent method
    showName() {

        console.log("Name:", this.name);
    }
}

// Child class
class Student extends Person {

    constructor(name, branch) {

        // Call parent constructor
        super(name);

        this.branch = branch;
    }

    // Child method
    showBranch() {

        console.log("Branch:", this.branch);
    }
}

// Create student object
const student1 = new Student(
    "Abhishek",
    "Computer Science"
);

// Call parent and child methods
student1.showName();

student1.showBranch();

// Check inheritance
console.log(
    "Is Person:",
    student1 instanceof Person
);

console.log(
    "Is Student:",
    student1 instanceof Student
);