// Marks of five subjects
let marks = [90, 85, 80, 75, 88];

// Calculate total marks
let total = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

// Calculate average and percentage
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Check if any subject has marks below 35
let failed = marks.some(mark => mark < 35);

// Display results
console.log("Total Marks:", total);
console.log("Average:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");

// Evaluate performance
if (failed || percentage < 50) {
    console.log("Detained");
}
else if (percentage >= 85) {
    console.log("Promoted with Distinction");
}
else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}