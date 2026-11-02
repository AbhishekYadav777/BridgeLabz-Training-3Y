"use strict";

// Create multi-step form
document.body.innerHTML = `
    <h2>Student Registration</h2>

    <form id="registrationForm">

        <!-- Step 1 -->
        <div class="step" id="step1">
            <h3>Step 1: Personal Details</h3>

            <input type="text" id="name"
                placeholder="Enter Name">

            <p id="nameError"></p>
        </div>

        <!-- Step 2 -->
        <div class="step" id="step2" hidden>
            <h3>Step 2: Email Details</h3>

            <input type="email" id="email"
                placeholder="Enter Email">

            <p id="emailError"></p>
        </div>

        <!-- Step 3 -->
        <div class="step" id="step3" hidden>
            <h3>Step 3: Password Details</h3>

            <input type="password" id="password"
                placeholder="Enter Password">

            <p id="passwordError"></p>
        </div>

        <button type="button" id="backButton">Back</button>

        <button type="button" id="nextButton">Next</button>

        <div id="summary"></div>

    </form>
`;

// Select elements
const steps = document.querySelectorAll(".step");

const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

const summary = document.getElementById("summary");

let currentStep = 0;

// Display current step
function showStep() {

    steps.forEach((step, index) => {

        step.hidden = index !== currentStep;
    });

    backButton.style.display =
        currentStep === 0 ? "none" : "inline-block";

    nextButton.textContent =
        currentStep === 2 ? "Submit" : "Next";
}

// Validate current step
function validateStep() {

    let isValid = true;

    // Step 1 validation
    if (currentStep === 0) {

        const name = document.getElementById("name");

        const nameError = document.getElementById("nameError");

        if (name.value.trim() === "") {

            nameError.textContent = "Name is required";

            nameError.style.color = "red";

            isValid = false;

        } else {

            nameError.textContent = "";
        }
    }

    // Step 2 validation
    else if (currentStep === 1) {

        const email = document.getElementById("email");

        const emailError = document.getElementById("emailError");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.value.trim())) {

            emailError.textContent = "Enter valid email";

            emailError.style.color = "red";

            isValid = false;

        } else {

            emailError.textContent = "";
        }
    }

    // Step 3 validation
    else if (currentStep === 2) {

        const password = document.getElementById("password");

        const passwordError =
            document.getElementById("passwordError");

        if (password.value.length < 6) {

            passwordError.textContent =
                "Password must contain at least 6 characters";

            passwordError.style.color = "red";

            isValid = false;

        } else {

            passwordError.textContent = "";
        }
    }

    return isValid;
}

// Next or Submit button
nextButton.addEventListener("click", function () {

    if (!validateStep()) {
        return;
    }

    if (currentStep < 2) {

        currentStep++;

        showStep();

    } else {

        // Display registration summary
        summary.innerHTML = `
            <h3>Registration Successful!</h3>

            <p>Name: ${document.getElementById("name").value}</p>

            <p>Email: ${document.getElementById("email").value}</p>

            <p>Password: ${"*".repeat(
                document.getElementById("password").value.length
            )}</p>
        `;

        steps.forEach(step => step.hidden = true);

        nextButton.style.display = "none";

        backButton.style.display = "none";
    }
});

// Back button
backButton.addEventListener("click", function () {

    if (currentStep > 0) {

        currentStep--;

        showStep();
    }
});

// Initial display
showStep();
