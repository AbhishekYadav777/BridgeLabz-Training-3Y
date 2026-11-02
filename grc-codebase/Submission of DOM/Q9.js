"use strict";

// Create registration form
document.body.innerHTML = `
    <h2>Registration Form</h2>

    <form id="registrationForm">

        <label>Name:</label>

        <input type="text" id="name"
            placeholder="Enter Name">

        <p id="nameError"></p>

        <label>Email:</label>

        <input type="text" id="email"
            placeholder="Enter Email">

        <p id="emailError"></p>

        <label>Password:</label>

        <input type="password" id="password"
            placeholder="Enter Password">

        <p id="passwordError"></p>

        <button type="submit">Submit</button>

    </form>

    <h3 id="successMessage"></h3>
`;

// Select elements
const registrationForm =
    document.getElementById("registrationForm");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const successMessage =
    document.getElementById("successMessage");

// Validate individual fields
function validateName() {

    const nameError = document.getElementById("nameError");

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Name is required";

        nameError.style.color = "red";

        return false;

    } else {

        nameError.textContent = "";

        return true;
    }
}

function validateEmail() {

    const emailError = document.getElementById("emailError");

    if (
        emailInput.value.trim() === "" ||
        !emailInput.value.includes("@")
    ) {

        emailError.textContent =
            "Enter a valid email containing @";

        emailError.style.color = "red";

        return false;

    } else {

        emailError.textContent = "";

        return true;
    }
}

function validatePassword() {

    const passwordError =
        document.getElementById("passwordError");

    if (passwordInput.value.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters";

        passwordError.style.color = "red";

        return false;

    } else {

        passwordError.textContent = "";

        return true;
    }
}

// Validate fields when user types
nameInput.addEventListener("input", function () {

    validateName();

    successMessage.textContent = "";
});

emailInput.addEventListener("input", function () {

    validateEmail();

    successMessage.textContent = "";
});

passwordInput.addEventListener("input", function () {

    validatePassword();

    successMessage.textContent = "";
});

// Handle form submission
registrationForm.addEventListener("submit", function (event) {

    // Prevent default form submission
    event.preventDefault();

    // Validate all fields
    const validName = validateName();

    const validEmail = validateEmail();

    const validPassword = validatePassword();

    // Check all validation results
    if (validName && validEmail && validPassword) {

        successMessage.textContent =
            "Form Submitted Successfully";

        successMessage.style.color = "green";

        console.log("Form Submitted Successfully");

    } else {

        successMessage.textContent =
            "Please correct the errors";

        successMessage.style.color = "red";
    }
});