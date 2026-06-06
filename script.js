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
    let choice = "scissors";
    switch (prompt("Enter rock, paper or scissors.").toLowerCase) {
        case "rock":
            choice = "rock";
            break;
        case "paper":
            choice = "paper";
        default:
            break;
    } 
    return choice;
}


const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
