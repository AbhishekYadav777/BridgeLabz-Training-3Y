"use strict";

// Create application interface
document.body.innerHTML = `
    <h2>Product List Manager</h2>

    <input type="text" id="productInput"
        placeholder="Enter product name">

    <button id="addButton">Add Product</button>

    <ul id="productList"></ul>
`;

// Select elements
const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

// Add new product
addButton.addEventListener("click", function () {

    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter product name");
        return;
    }

    // Create list item
    const listItem = document.createElement("li");

    listItem.innerHTML = `
        <span class="productName"></span>
        <button data-action="edit">Edit</button>
        <button data-action="delete">Delete</button>
    `;

    // Safely insert product name
    listItem.querySelector(".productName").textContent = productName;

    productList.appendChild(listItem);

    productInput.value = "";
});

// Event delegation on parent UL
productList.addEventListener("click", function (event) {

    const action = event.target.dataset.action;

    const listItem = event.target.closest("li");

    if (!listItem || !productList.contains(listItem)) {
        return;
    }

    // Delete product
    if (action === "delete") {

        listItem.remove();
    }

    // Edit product
    else if (action === "edit") {

        startEditing(listItem);
    }
});

// Function to enable inline editing
function startEditing(listItem) {

    // Prevent multiple edit inputs
    if (listItem.querySelector(".editInput")) {
        return;
    }

    const productName = listItem.querySelector(".productName");

    const editInput = document.createElement("input");

    editInput.type = "text";
    editInput.className = "editInput";
    editInput.value = productName.textContent;

    productName.replaceWith(editInput);

    editInput.focus();

    // Auto-save edited value
    function saveEdit() {

        if (!editInput.isConnected) {
            return;
        }

        const updatedName = editInput.value.trim();

        const newName = document.createElement("span");

        newName.className = "productName";

        newName.textContent =
            updatedName || "Unnamed Product";

        editInput.replaceWith(newName);
    }

    // Save on Enter
    editInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            saveEdit();
        }
    });

    // Save on outside click or focus leaving
    editInput.addEventListener("blur", saveEdit);
}

// Basic styling
const style = document.createElement("style");

style.textContent = `
    body {
        font-family: Arial;
        padding: 20px;
    }

    li {
        margin: 12px;
    }

    button {
        margin-left: 8px;
        cursor: pointer;
    }
`;

document.head.appendChild(style);