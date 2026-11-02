// Store customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert feedback into lowercase
let lowerFeedback = feedback.toLowerCase();

// Count words
let words = feedback.split(" ");
let wordCount = words.length;

// Check for negative words
let containsBad = lowerFeedback.includes("bad");
let containsPoor = lowerFeedback.includes("poor");

// Display feedback analysis
console.log("Customer Feedback:", feedback);
console.log("Total Words:", wordCount);

// Check feedback quality
if (!containsBad && !containsPoor) {
    console.log("Positive Feedback");
}
else {
    console.log("Needs Improvement");
}