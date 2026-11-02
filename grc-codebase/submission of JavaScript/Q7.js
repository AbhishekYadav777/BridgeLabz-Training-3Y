// Generate random number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Test guess
let userGuess = 25;

console.log("Secret Number:", secretNumber);
console.log("Your Guess:", userGuess);

// Check user's guess
if (userGuess === secretNumber) {
    console.log("Correct guess!");
}
else {
    // Check if guess is within range of ±3
    if (userGuess >= secretNumber - 3 &&
        userGuess <= secretNumber + 3) {
        console.log("Very close!");
    }
    else if (userGuess > secretNumber) {
        console.log("Too high");
    }
    else {
        console.log("Too low");
    }
}