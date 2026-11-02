"use strict";

// Create tracking box
document.body.innerHTML = `
    <h2>Mouse Movement Tracker</h2>

    <div id="trackingBox"></div>

    <p id="coordinates">
        Move your mouse inside the box.
    </p>
`;

// Select elements
const trackingBox = document.getElementById("trackingBox");

const coordinates = document.getElementById("coordinates");

// Style tracking box
const style = document.createElement("style");

style.textContent = `
    #trackingBox {
        width: 400px;
        height: 400px;
        border: 2px solid black;
        background: #eeeeee;
        position: relative;
        cursor: crosshair;
        overflow: hidden;
    }
`;

document.head.appendChild(style);

// Track mouse movement
trackingBox.addEventListener("mousemove", function (event) {

    // Get mouse coordinates relative to browser viewport
    const x = event.clientX;

    const y = event.clientY;

    // Display coordinates
    coordinates.textContent =
        `Mouse X: ${x}, Mouse Y: ${y}`;

    console.log(`X: ${x}, Y: ${y}`);
});

// Handle double-click
trackingBox.addEventListener("dblclick", function (event) {

    // Get box position
    const boxPosition =
        trackingBox.getBoundingClientRect();

    // Calculate coordinates inside the box
    const x = event.clientX - boxPosition.left;

    const y = event.clientY - boxPosition.top;

    // Create red dot
    const dot = document.createElement("div");

    dot.style.width = "10px";
    dot.style.height = "10px";
    dot.style.background = "red";
    dot.style.borderRadius = "50%";
    dot.style.position = "absolute";

    // Place dot at clicked position
    dot.style.left = `${x - 5}px`;
    dot.style.top = `${y - 5}px`;

    // Add dot to tracking box
    trackingBox.appendChild(dot);

    console.log(`Double Click Position: X=${x}, Y=${y}`);
});