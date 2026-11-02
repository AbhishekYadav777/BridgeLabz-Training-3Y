"use strict";

// Create theme switcher interface
document.body.innerHTML = `
    <h2>Theme Switcher</h2>

    <button data-theme="light">Light Theme</button>

    <button data-theme="dark">Dark Theme</button>

    <button data-theme="blue">Blue Theme</button>

    <p>Welcome to JavaScript Theme Switcher!</p>
`;

// Create theme styling
const style = document.createElement("style");

style.textContent = `
    body {
        font-family: Arial;
        padding: 30px;
        transition: 0.3s;
    }

    body.light {
        background: white;
        color: black;
    }

    body.dark {
        background: #222;
        color: white;
    }

    body.blue {
        background: #1565c0;
        color: white;
    }

    button {
        padding: 10px;
        margin: 5px;
        cursor: pointer;
    }
`;

document.head.appendChild(style);

// Select all theme buttons
const themeButtons = document.querySelectorAll("button");

// Apply selected theme
function changeTheme(themeName) {

    // Remove previous theme classes
    document.body.classList.remove(
        "light",
        "dark",
        "blue"
    );

    // Add selected theme using setAttribute()
    document.body.classList.add(themeName);

    document.body.setAttribute(
        "class",
        themeName
    );

    // Save theme in custom attribute
    document.body.setAttribute(
        "data-theme",
        themeName
    );

    console.log("Current Theme:", themeName);
}

// Handle theme selection
themeButtons.forEach(button => {

    button.addEventListener("click", function () {

        const selectedTheme =
            button.getAttribute("data-theme");

        changeTheme(selectedTheme);
    });
});

// Apply default theme
changeTheme("light");