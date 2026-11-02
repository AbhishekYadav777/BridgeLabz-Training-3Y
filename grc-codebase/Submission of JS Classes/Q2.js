"use strict";

// Create form dynamically
document.body.innerHTML = `
    <h2>Student Registration Form</h2>

    <form id="studentForm">

        <input type="text" id="name" placeholder="Name">
        <p id="nameError"></p>

        <input type="text" id="email" placeholder="Email">
        <p id="emailError"></p>

        <input type="text" id="phone" placeholder="Phone">
        <p id="phoneError"></p>

        <input type="password" id="password" placeholder="Password">
        <p id="passwordError"></p>

        <button type="submit">Register</button>

    </form>

    <p id="result"></p>
`;

// Select form
const studentForm = document.getElementById("studentForm");

// Validation function
function validateField(input, regex, errorId, message) {

    const errorElement = document.getElementById(errorId);

    if (regex.test(input.value.trim())) {

        input.style.border = "2px solid green";
        errorElement.textContent = "";

        return true;

    } else {

        input.style.border = "2px solid red";
        errorElement.textContent = message;
        errorElement.style.color = "red";

        return false;
    }
}

// Handle form submission
studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    // Regular expressions
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

    // Validate all fields
    const validName = validateField(
        name, nameRegex, "nameError", "Only alphabets allowed"
    );

    const validEmail = validateField(
        email, emailRegex, "emailError", "Invalid email address"
    );

    const validPhone = validateField(
        phone, phoneRegex, "phoneError", "Enter exactly 10 digits"
    );

    const validPassword = validateField(
        password, passwordRegex, "passwordError",
        "Password needs uppercase, number and special character"
    );

    // Display final result
    if (validName && validEmail && validPhone && validPassword) {

        document.getElementById("result").textContent =
            "Registration Successful!";

        document.getElementById("result").style.color = "green";

    } else {

        document.getElementById("result").textContent =
            "Please correct the errors.";

        document.getElementById("result").style.color = "red";
    }
});