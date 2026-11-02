"use strict";

// Create student table
document.body.innerHTML = `
    <h2>Student Search</h2>

    <input type="text" id="searchInput"
        placeholder="Search student...">

    <table border="1" cellpadding="10">

        <thead>
            <tr>
                <th>Name</th>
                <th>Branch</th>
                <th>CGPA</th>
            </tr>
        </thead>

        <tbody id="studentTable">

            <tr>
                <td>Abhishek</td>
                <td>CSE</td>
                <td>8.5</td>
            </tr>

            <tr>
                <td>Amit</td>
                <td>IT</td>
                <td>8.0</td>
            </tr>

            <tr>
                <td>Rahul</td>
                <td>ECE</td>
                <td>7.5</td>
            </tr>

            <tr>
                <td>Neha</td>
                <td>CSE</td>
                <td>9.0</td>
            </tr>

        </tbody>

    </table>

    <p id="noResults" hidden>No results found</p>
`;

// Select elements
const searchInput = document.getElementById("searchInput");

const studentTable = document.getElementById("studentTable");

const noResults = document.getElementById("noResults");

// Listen for search input
searchInput.addEventListener("input", function () {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    // Get all table rows
    const rows = studentTable.querySelectorAll("tr");

    let visibleRows = 0;

    // Check each row
    rows.forEach(row => {

        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {

            row.style.display = "";

            visibleRows++;

        } else {

            row.style.display = "none";
        }
    });

    // Show message when no matching rows exist
    noResults.hidden = visibleRows !== 0;
});