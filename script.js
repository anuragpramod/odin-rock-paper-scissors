function getComputerChoice() {
    let choice = "scissors";
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
        default:
            break;
    } 
    return choice;
}


function getHumanChoice() {
    let choice = prompt("Enter rock, paper or scissors.");
    return choice;
}


let computerScore = 0;
let humanScore = 0;


function playRound(computerChoice,humanChoice) {
    switch (computerChoice) {
        case "rock":
            switch (humanChoice.toLowerCase()) {
                case "rock":
                    return "This round is a tie.";
                    break;
                case "paper":
                    humanScore++;
                    return "Human wins this round.";
                    break;
                case "scissors":
                    computerScore++;
                    return "Computer wins this round.";
                    break;
                default:
                    break;
            }
            break;
        case "paper":
            switch (humanChoice.toLowerCase()) {
                case "rock":
                    computerScore++;
                    return "Computer wins this round.";
                    break;
                case "paper":
                    return "This round is a tie.";
                    break;
                case "scissors":
                    humanScore++;
                    return "Human wins this round.";
                    break;
                default:
                    break;
            }
            break;
        case "scissors":
            switch (humanChoice.toLowerCase()) {
                case "rock":
                    humanScore++;                    
                    return "Human wins this round.";
                    break;
                case "paper":
                    computerScore++;
                    return "Computer wins this round.";
                    break;
                case "scissors":
                    return "This round is a tie.";
                    break;
                default:
                    break;    
            }
            break;
        default:
            break;
    }    
}


const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

const result = playRound(computerSelection,humanSelection)

console.log("Computer - " + computerSelection);
console.log("Human - " + humanSelection);
console.log(result);
