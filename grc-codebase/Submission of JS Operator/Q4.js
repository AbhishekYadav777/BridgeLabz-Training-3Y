// Generate 8 random scores between 30 and 100
let scores = [];

for (let i = 0; i < 8; i++) {
    let randomScore = Math.floor(Math.random() * 71) + 30;
    scores.push(randomScore);
}

// Find highest and lowest scores
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Calculate total using reduce()
let totalScore = scores.reduce((sum, score) => sum + score, 0);

// Calculate average
let averageScore = totalScore / scores.length;

// Filter students who passed
let passedStudents = scores.filter(score => score >= 50);

// Use map() to display student results
let studentResults = scores.map((score, index) => ({
    Student: index + 1,
    Score: score,
    Result: score >= 50 ? "Pass" : "Fail"
}));

// Display report
console.log("Student Performance Report");
console.table(studentResults);

console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Passed Students:", passedStudents.length);