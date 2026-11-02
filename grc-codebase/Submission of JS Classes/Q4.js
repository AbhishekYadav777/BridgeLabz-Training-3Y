"use strict";

// Create FormBuilder class
class FormBuilder {

    constructor(fields) {
        this.fields = fields;
    }

    // Generate form dynamically
    createForm() {

        let formHTML = `<form id="dynamicForm">`;

        this.fields.forEach(field => {

            formHTML += `
                <label>${field.label}</label>

                <input
                    type="${field.type}"
                    name="${field.name}"
                    placeholder="${field.label}"
                    required
                >

                <br><br>
            `;
        });

        formHTML += `
            <button type="submit">Submit</button>
            </form>

            <p id="formResult"></p>
        `;

        // Insert form into webpage
        document.body.innerHTML += formHTML;

        // Handle submission
        document.getElementById("dynamicForm")
            .addEventListener("submit", (event) => {

                event.preventDefault();

                const formData = this.getFormData();

                document.getElementById("formResult")
                    .textContent = JSON.stringify(formData);

                console.log("Form Data:", formData);
            });
    }

    // Collect all entered values
    getFormData() {

        const form = document.getElementById("dynamicForm");

        const formData = {};

        this.fields.forEach(field => {

            formData[field.name] =
                form.elements[field.name].value;
        });

        return formData;
    }
}

// Define form fields
const fields = [
    { type: "text", name: "username", label: "Username" },
    { type: "email", name: "email", label: "Email" },
    { type: "password", name: "password", label: "Password" }
];

// Create FormBuilder object
const formBuilder = new FormBuilder(fields);

// Generate form
formBuilder.createForm();