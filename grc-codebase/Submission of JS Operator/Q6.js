// Global counter variable
let count = 0;

// Function to increase counter
function increment() {
    count++;
    console.log("Incremented:", count);
}

// Function to decrease counter
function decrement() {
    count--;
    console.log("Decremented:", count);
}

// Nested function demonstrating scope
function counterDetails() {

    function displayCount() {
        console.log("Current Count:", count);
    }

    displayCount();
}

// Simulate button clicks
increment();
increment();
increment();

decrement();

// Display final count using nested function
counterDetails();