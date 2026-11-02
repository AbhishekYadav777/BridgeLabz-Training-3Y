"use strict";

// Create custom dropdown
document.body.innerHTML = `
    <h2>Custom Dropdown</h2>

    <div id="dropdown">

        <button id="dropdownButton">
            Select Course ▼
        </button>

        <div id="dropdownOptions">

            <div class="option">Java</div>

            <div class="option">Python</div>

            <div class="option">JavaScript</div>

            <div class="option">C++</div>

        </div>

    </div>
`;

// Select elements
const dropdown = document.getElementById("dropdown");

const dropdownButton =
    document.getElementById("dropdownButton");

const dropdownOptions =
    document.getElementById("dropdownOptions");

// Add CSS
const style = document.createElement("style");

style.textContent = `
    #dropdown {
        position: relative;
        display: inline-block;
    }

    #dropdownButton {
        padding: 12px 20px;
        cursor: pointer;
    }

    #dropdownOptions {
        display: none;
        position: absolute;
        background: white;
        border: 1px solid black;
        width: 150px;
        z-index: 10;
    }

    .option {
        padding: 10px;
        cursor: pointer;
    }

    .option:hover {
        background: lightblue;
    }
`;

document.head.appendChild(style);

// Show or hide dropdown
dropdownButton.addEventListener("click", function () {

    const isVisible =
        dropdownOptions.style.display === "block";

    dropdownOptions.style.display =
        isVisible ? "none" : "block";
});

// Handle option selection
dropdownOptions.addEventListener("click", function (event) {

    if (event.target.classList.contains("option")) {

        dropdownButton.textContent =
            event.target.textContent + " ▼";

        dropdownOptions.style.display = "none";
    }
});

// Close dropdown using capturing phase
document.addEventListener("click", function (event) {

    if (!dropdown.contains(event.target)) {

        dropdownOptions.style.display = "none";
    }

}, true);