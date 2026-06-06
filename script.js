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

function getHumanChoice() {
    return prompt("Enter rock, paper or scissors.").toLowerCase();
}

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return "This round is a tie.";
    }

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

function playGame(rounds) {
    for (let index = 0; index < rounds; index++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        const result = playRound(computerSelection, humanSelection);

        console.log("Round Number " + (index + 1));
        console.log("Computer - " + computerSelection);
        console.log("Human - " + humanSelection);
        console.log(result);
        console.log("Computer Score - " + computerScore);
        console.log("Human Score - " + humanScore);
    }

    if (computerScore > humanScore) {
        return "Computer wins the game!";
    } else if (humanScore > computerScore) {
        return "Human wins the game!";
    } else {
        return "This game is a tie.";
    }
}

console.log(playGame(5));