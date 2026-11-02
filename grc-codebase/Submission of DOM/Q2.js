"use strict";

// Create interface
document.body.innerHTML = `
    <h2>Live Character Counter</h2>

    <textarea
        id="message"
        maxlength="100"
        placeholder="Enter your message..."
    ></textarea>

    <p id="counter">100 characters remaining</p>

    <button id="resetButton">Reset</button>
`;

// Select elements
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maximumCharacters = 100;

// Update character counter
function updateCounter() {

    const remainingCharacters =
        maximumCharacters - message.value.length;

    counter.textContent =
        `${remainingCharacters} characters remaining`;

    // Yellow warning at 20 or fewer characters
    if (remainingCharacters <= 20 && remainingCharacters > 0) {

        counter.style.color = "orange";
    }

    // Red when limit is reached
    else if (remainingCharacters === 0) {

        counter.style.color = "red";
    }

    // Normal color
    else {

        counter.style.color = "green";
    }
}

// Prevent additional typing at maximum length
message.addEventListener("keydown", function (event) {

    const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End",
        "Tab"
    ];

    const isShortcut =
        event.ctrlKey || event.metaKey;

    if (
        message.value.length >= maximumCharacters &&
        !allowedKeys.includes(event.key) &&
        !isShortcut
    ) {
        event.preventDefault();
    }
});

// Handle typing and pasted content
message.addEventListener("input", function () {

    // Keep text within 100 characters
    if (message.value.length > maximumCharacters) {

        message.value =
            message.value.slice(0, maximumCharacters);
    }

    updateCounter();
});

// Reset everything
resetButton.addEventListener("click", function () {

    message.value = "";

    updateCounter();
});

// Initial counter
updateCounter();