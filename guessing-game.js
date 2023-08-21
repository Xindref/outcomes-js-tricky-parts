function guessingGame() {
    const randNum = Math.floor((Math.random() * 99) + 1);
    let guessCount = 0;
    let gameOver = false;
    const game = (guess) => {
        if (gameOver) {
            return "The game is over, you already won!";
        }

        guessCount++;

        if (guess < randNum) {
            return `${guess} is too low!`;
        }

        if (guess > randNum) {
            return `${guess} is too high!`;
        }

        gameOver = true;
        return `You win! You found ${randNum} in ${guessCount} guesses.`;
    };
    return game;
}

module.exports = { guessingGame };
