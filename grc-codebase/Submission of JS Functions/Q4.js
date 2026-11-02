"use strict";

// Constructor function
function Car(brand, model) {

    this.brand = brand;
    this.model = model;
}

// Add method to prototype
Car.prototype.getDetails = function() {

    console.log(
        `Brand: ${this.brand}, Model: ${this.model}`
    );
};

// Create car objects
const car1 = new Car("Toyota", "Fortuner");

const car2 = new Car("Mahindra", "Thar");

// Call prototype method
car1.getDetails();

car2.getDetails();

// Check prototype sharing
console.log(
    "Same Prototype Method:",
    car1.getDetails === car2.getDetails
);