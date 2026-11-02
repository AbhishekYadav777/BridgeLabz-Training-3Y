// Declare username
let userName = "Abhishek";

// Get current hour (0-23)
let currentHour = new Date().getHours();

// Check time and display greeting
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
}
else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
}
else {
    console.log(`Good Evening ${userName}!`);
}