// Randomly choose rock, paper, or scissors for the computer.
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Prompt the user for their choice and convert it to lowercase
// so that inputs like "Rock" and "ROCK" are handled correctly.
function getHumanChoice() {
    return prompt("Enter rock, paper or scissors.").toLowerCase();
}

// Keep track of the running score across all rounds.
let computerScore = 0;
let humanScore = 0;

// Play a single round and update the score.
function playRound(computerChoice, humanChoice) {

    // Check for a tie before evaluating the winner.
    if (computerChoice === humanChoice) {
        return "This round is a tie.";
    }

    // Check all conditions where the human wins.
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "Human wins this round.";
    } else {
        computerScore++;
        return "Computer wins this round.";
    }
}

// Play the requested number of rounds and determine the overall winner.
function playGame(rounds) {

    // Repeat the game logic once per round.
    for (let index = 0; index < rounds; index++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        const result = playRound(
            computerSelection,
            humanSelection
        );

        // Display round results and current scores.
        console.log("Round Number " + (index + 1));
        console.log("Computer - " + computerSelection);
        console.log("Human - " + humanSelection);
        console.log(result);
        console.log("Computer Score - " + computerScore);
        console.log("Human Score - " + humanScore);
    }

    // Determine the overall winner after all rounds are complete.
    if (computerScore > humanScore) {
        return "Computer wins the game!";
    } else if (humanScore > computerScore) {
        return "Human wins the game!";
    } else {
        return "This game is a tie.";
    }
}

// Start a 5-round game and print the final result.
console.log(playGame(5));