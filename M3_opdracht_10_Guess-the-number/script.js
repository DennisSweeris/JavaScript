// Variables / Constants
let name;
let guess;
let toGuessNumber = null;
let attempts = 5;
let min;
let max;

function myGame() {
    // Ask name and greet user by it's name
    name = prompt("What is your name?", [""]);
    alert(`Welcome, ${name}! Can you Guess the number?`);

    min = parseInt(prompt("Start value number:"))
    max = parseInt(prompt("End value number:"))

    // Sets a random value with integers(heel getal)
    toGuessNumber = Math.floor(Math.random() * (max - min) + min);
    console.log(`Pssst, the number is: ${toGuessNumber}`); // Cheats answer

    // Lets user pick a number
    while (guess !== toGuessNumber) {
        guess = parseInt(prompt("Enter a number..."))
        alert(`Your guess is: ${guess}`);
        if (guess > toGuessNumber && attempts > 1) { // Guess too high
            alert(`Your guess it too high, ${attempts} attempts remaining`);
            attempts--;
        } else if (guess < toGuessNumber && attempts > 1) { // Guess too low
            alert(`Your guess it too low, ${attempts} attempts remaining`);
            attempts--;
        } else if (attempts == 1) { // 1 attempt remaining
            alert(`${attempts} attempt remaining`);
            attempts--;
        } else if (guess === toGuessNumber) { // Beat the game
            alert(`Good Job! The number was ${guess}!`)
            alert("Thanks for playing!");
            return;
        } else if (attempts == 0) { // Ran out of attempts
            alert(`Game Over ${name}! The correct number was: ${toGuessNumber}`);
            return; // clears game.
        } else
            return; // clears game.
    }
}
