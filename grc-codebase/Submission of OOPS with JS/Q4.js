class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name + " is doing general work.");
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    // Method overriding
    work() {
        console.log(this.name + " is managing the team.");
    }
}

// Creating objects
let e1 = new Employee("Rahul", "IT");
let m1 = new Manager("Aman", "HR");

// Runtime polymorphism
e1.work();
m1.work();