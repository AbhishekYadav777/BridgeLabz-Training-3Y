"use strict";

// Original user object
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Create editing form
document.body.innerHTML = `
    <h2>User Profile Updater</h2>

    <form id="userForm">

        <input type="text" id="name"
            placeholder="Enter Name"
            value="${user.name}">

        <br><br>

        <input type="email" id="email"
            placeholder="Enter Email"
            value="${user.email}">

        <br><br>

        <input type="number" id="age"
            placeholder="Enter Age"
            value="${user.age}">

        <br><br>

        <button type="submit">Update Profile</button>

    </form>

    <h3>Updated User Details:</h3>

    <pre id="userDetails"></pre>
`;

// Select form
const userForm = document.getElementById("userForm");

// Display original object
document.getElementById("userDetails").textContent =
    JSON.stringify(user, null, 2);

// Handle form submission
userForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Update existing object properties
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    // Display updated object
    document.getElementById("userDetails").textContent =
        JSON.stringify(user, null, 2);

    console.log("Updated User Object:", user);
});