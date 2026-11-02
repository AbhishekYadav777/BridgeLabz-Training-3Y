"use strict";

// Parent constructor
function Person(name) {

    this.name = name;
}

// Person method
Person.prototype.showName = function() {

    console.log("Name:", this.name);
};

// Faculty constructor
function Faculty(name, department) {

    Person.call(this, name);

    this.department = department;
}

// Faculty inherits Person
Faculty.prototype = Object.create(Person.prototype);

Faculty.prototype.constructor = Faculty;

// Faculty method
Faculty.prototype.showDepartment = function() {

    console.log("Department:", this.department);
};

// Professor constructor
function Professor(name, department, subject) {

    Faculty.call(this, name, department);

    this.subject = subject;
}

// Professor inherits Faculty
Professor.prototype = Object.create(Faculty.prototype);

Professor.prototype.constructor = Professor;

// Professor method
Professor.prototype.showSubject = function() {

    console.log("Subject:", this.subject);
};

// Create professor object
const professor1 = new Professor(
    "Dr. Sharma",
    "Computer Science",
    "JavaScript"
);

// Access all methods
professor1.showName();

professor1.showDepartment();

professor1.showSubject();

// Check prototype chain
console.log(
    "Person:",
    professor1 instanceof Person
);

console.log(
    "Faculty:",
    professor1 instanceof Faculty
);

console.log(
    "Professor:",
    professor1 instanceof Professor
);