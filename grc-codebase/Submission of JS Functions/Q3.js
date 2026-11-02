"use strict";

// Create user object
const user = {

    name: "Abhishek",

    // Arrow function
    showName: () => {
        console.log("Arrow Function:", this.name);
    }
};

// Call arrow function
user.showName();

// Fix using normal function
const user2 = {

    name: "Abhishek",

    // Normal function
    showName: function() {
        console.log("Normal Function:", this.name);
    }
};

// Call normal function
user2.showName();