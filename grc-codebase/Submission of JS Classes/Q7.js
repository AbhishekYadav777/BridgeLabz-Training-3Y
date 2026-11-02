"use strict";

// Create login form
document.body.innerHTML = `
    <h2>Login Form</h2>

    <form id="loginForm">

        <input type="text" id="username" placeholder="Username">
        <p id="usernameError"></p>

        <input type="password" id="password" placeholder="Password">
        <p id="passwordError"></p>

        <button type="submit">Login</button>

    </form>

    <h3 id="result"></h3>
`;

// Select form
const loginForm = document.getElementById("loginForm");

// Handle login submission
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Regular expressions
    const usernameRegex = /^.{5,}$/;

    const passwordRegex =
        /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/;

    // Get error elements
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    // Reset previous errors
    usernameError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Validate username
    if (!usernameRegex.test(username)) {

        usernameError.textContent =
            "Username must contain at least 5 characters.";

        usernameError.style.color = "red";

        isValid = false;
    }

    // Validate password
    if (!passwordRegex.test(password)) {

        passwordError.textContent =
            "Password must contain 8 characters, uppercase, lowercase, number and special character.";

        passwordError.style.color = "red";

        isValid = false;
    }

    // Display result
    const result = document.getElementById("result");

    if (isValid) {

        result.textContent = "Login Successful!";
        result.style.color = "green";

    } else {

        result.textContent = "Invalid Login Details";
        result.style.color = "red";
    }
});