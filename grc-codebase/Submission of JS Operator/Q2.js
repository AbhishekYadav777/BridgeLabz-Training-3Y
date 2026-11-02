// Original product name
let productName = " wireless headphones PRO ";

// Remove extra spaces and convert to lowercase
let cleanedName = productName.trim().toLowerCase();

// Capitalize first letter of every word
let words = cleanedName.split(" ");

let capitalizedWords = words.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
);

// Join words into a single string
let formattedName = capitalizedWords.join(" ");

// Replace Pro with Pro Edition
formattedName = formattedName.replace("Pro", "Pro Edition");

// Display result
console.log("Product Name:", formattedName);
console.log("Title Length:", formattedName.length);