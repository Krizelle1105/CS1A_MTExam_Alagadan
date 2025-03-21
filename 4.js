const favNumber = 11;

let guess = null;

while (guess !== favNumber) {
    guess = Number(prompt("Guess my favorite number:"));
    
    if(guess > favNumber) {
        console.log("Too high! Try again.");
    } else if (guess < favNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Correct! you guessed the favorite number.");
    }
}