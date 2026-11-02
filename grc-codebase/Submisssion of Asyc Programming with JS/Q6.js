"use strict";

// Async function to fetch products
async function fetchProducts() {

    try {

        // Fetch data from Fake Store API
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        // Check API response
        if (!response.ok) {
            throw new Error("API request failed");
        }

        // Convert response into JSON
        const products = await response.json();

        console.log("Product Details:");

        // Display product information
        products.forEach((product) => {

            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);

            console.log("------------------------");

        });

    } catch (error) {

        console.log(
            "Failed to load products. Please try again."
        );

        console.log("Error:", error.message);
    }
}

// Execute function
fetchProducts();